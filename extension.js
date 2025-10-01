const vscode = require('vscode');
let wf = null;

// Attempt to load web-features dataset
try {
  wf = require('web-features');
  console.log('✅ web-features loaded');
} catch (err) {
  console.error('❌ web-features not loaded:', err.message);
}

function activate(context) {
  console.log('✅ Baseline Buddy activated');

  // ------------------------------
  // 1️⃣ Hello World Command
  // ------------------------------
  const hello = vscode.commands.registerCommand(
    'baseline-buddy.helloWorld',
    () => vscode.window.showInformationMessage('Hello World from Baseline Buddy!')
  );

  // ------------------------------
  // 2️⃣ Check Feature Command
  // ------------------------------
  const checkFeature = vscode.commands.registerCommand(
    'baseline-buddy.checkFeature',
    async () => {
      if (!wf) {
        vscode.window.showErrorMessage('web-features module not available. Run "npm install web-features".');
        return;
      }

      const input = await vscode.window.showInputBox({
        placeHolder: "Enter feature id or name (e.g., 'fetch', 'AbortController')"
      });
      if (!input) return;

      const feature = findFeature(input);
      if (!feature) {
        vscode.window.showWarningMessage(`Feature "${input}" not found in web-features.`);
        return;
      }

      const statusText = getStatusText(feature);
      const docLink = getDocLink(feature);

      const choice = await vscode.window.showInformationMessage(
        `${feature.name} — ${statusText}`,
        ...(docLink ? ['Open Docs'] : [])
      );

      if (choice === 'Open Docs' && docLink) {
        vscode.env.openExternal(vscode.Uri.parse(docLink));
      }
    }
  );

  context.subscriptions.push(hello, checkFeature);

  // ------------------------------
  // 3️⃣ Hover Provider
  // ------------------------------
  const hoverProvider = vscode.languages.registerHoverProvider(
    ['javascript', 'typescript', 'javascriptreact', 'typescriptreact'],
    {
      provideHover(document, position) {
        const range = document.getWordRangeAtPosition(position);
        if (!range) return null;
        const word = document.getText(range);

        const feature = findFeature(word);
        if (!feature) return null;

        const statusText = getStatusText(feature);
        const docLink = getDocLink(feature);

        return new vscode.Hover(`**${feature.name}**  
${statusText}  
${docLink ? `[Docs](${docLink})` : 'No Docs Available'}`);
      }
    }
  );

  context.subscriptions.push(hoverProvider);

  // ------------------------------
  // 4️⃣ Diagnostics (Squiggly Warnings)
  // ------------------------------
  const diagnosticCollection = vscode.languages.createDiagnosticCollection('baseline-buddy');
  context.subscriptions.push(diagnosticCollection);

  vscode.workspace.onDidChangeTextDocument(event => {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document !== event.document) return;

    const diagnostics = [];
    const text = event.document.getText();
    const words = text.match(/\b\w[\w-]*\b/g) || [];

    words.forEach(word => {
      const feature = findFeature(word);
      if (feature && feature.status?.baseline !== 'high') {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        let match;
        while ((match = regex.exec(text)) !== null) {
          const startPos = event.document.positionAt(match.index);
          const endPos = event.document.positionAt(match.index + word.length);
          const range = new vscode.Range(startPos, endPos);

          const diag = new vscode.Diagnostic(
            range,
            `⚠️ "${word}" is not fully Baseline supported`,
            vscode.DiagnosticSeverity.Warning
          );
          diagnostics.push(diag);
        }
      }
    });

    diagnosticCollection.set(event.document.uri, diagnostics);
  });

  vscode.workspace.onDidCloseTextDocument(doc => {
    diagnosticCollection.delete(doc.uri);
  });
}

// ------------------------------
// Helper Functions
// ------------------------------

function findFeature(word) {
  if (!wf) return null;
  const featuresMap = wf.features || wf;

  // Exact match
  let feature = featuresMap[word] || featuresMap[word.toLowerCase()];

  // Kebab-case fallback
  const kebab = word.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  feature = feature || featuresMap[kebab];

  // Search by name or id
  if (!feature) {
    feature = Object.values(featuresMap).find(f =>
      (f.name && f.name.toLowerCase() === word.toLowerCase()) ||
      (f.id && f.id.toLowerCase() === word.toLowerCase())
    );
  }

  // Partial match fallback
  if (!feature) {
    feature = Object.values(featuresMap).find(f =>
      (f.name && f.name.toLowerCase().includes(word.toLowerCase())) ||
      (f.id && f.id.toLowerCase().includes(word.toLowerCase()))
    );
  }

  return feature || null;
}

function getStatusText(feature) {
  const status = feature.status?.baseline || 'unknown';
  if (status === 'high') return '✅ Part of Baseline';
  if (status === 'low') return '⚠️ Limited support';
  return '❌ Not in Baseline';
}

function getDocLink(feature) {
  if (feature.mdn) return feature.mdn.url || feature.mdn.spec || (typeof feature.mdn === 'string' ? feature.mdn : null);
  if (feature.mdn_url) return feature.mdn_url;
  if (feature.caniuse) return `https://caniuse.com/${feature.caniuse}`;
  return null;
}

function deactivate() {}

module.exports = { activate, deactivate };
