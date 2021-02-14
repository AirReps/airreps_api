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
  
### **chipdoc()**  
This function gets data from the ``/chipdoc`` in the api, and returns it in json format.  
The function works in async.  
#### Information  
» Required parameters:  
``chipset``  
» Function example:  
```js
api.chipdoc("CHIPSET_HERE");
```  
» Returns:
```json
{
  link: 'https://airreps.info/files/datasheets/AB1561_AB1562_Datasheet.pdf',
  status: 'success'
}
```  
  
### **members()**  
This function let's you use the ``/members`` endpoint in the api easily. You get all data returned in easy to use **JSON**.  
The function works in async.  
#### Information  
» Required parameters:  
``none``  
» Function example:  
```js
api.members();
```  
» Returns: 
```json
{ count: 7063, status: 'success', server: 'AirReps', online: 487 }
```  
  
### **readme()**  
This function returns a link to the API README.md  
The function does not work in async.  
#### Information  
» Required parameters:  
``none``  
» Function example:  
```js
api.readme();
```  
» Returns: 
```
"https://github.com/AirReps/airreps_api"
```  
  
