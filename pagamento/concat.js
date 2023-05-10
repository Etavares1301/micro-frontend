const concat = require("concat");
(async function build() {
    const files = [
        "./dist/pagamento/runtime.js",
        "./dist/pagamento/polyfills.js",
        "./dist/pagamento/main.js",                    
    ];
    await concat(files, "./dist/pagamento/pagamento.js");
})();