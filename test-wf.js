const wf = require('web-features');

// Safe feature map
const featuresMap = wf.features || wf;

// Show first 5 features
console.log(Object.keys(featuresMap).slice(0,5));

// Test a specific feature
console.log(featuresMap['fetch']);