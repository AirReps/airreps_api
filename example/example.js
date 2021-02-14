const api = require("./index.js");

api.members()
.then(m => {console.log(m)});
api.chipdoc("AB1562A")
.then(m => {console.log(m)});