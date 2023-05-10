const concat = require("concat");
(async function build() {
    const files = [
        "./dist/extrato/runtime.js",
        "./dist/extrato/polyfills.js",
        "./dist/extrato/main.js",                    
    ];
    await concat(files, "./dist/extrato/extrato.js");
})();