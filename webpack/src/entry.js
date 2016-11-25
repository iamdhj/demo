// require("!style!css!./style.css");
require("./style.css");     //call node_modules/.bin/webpack ./src/entry.js bundle.js --module-bind "css=style!css"
document.write("It works.");
document.write(require("./content.js"));