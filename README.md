# AirReps API Wrapper  
**Simple package for nodejs which helps to communicate with the AirReps API.**  
## Example 
```js
const api = require("airreps-api");

api.members()
.then(m => {console.log(m.count)});
api.chipdoc("AB1562A")
.then(m => {console.log(m.link)});
```  
  
## Functions
