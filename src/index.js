const superagent = require('superagent');
const fetch = require('node-fetch');


module.exports = {
    members: async function() {
        return new Promise(async function(resolve, reject){
            fetch('https://api.airreps.info/members')
            .catch(err => reject(new Error(err)))
            .then(res => res.json())
            .then(json => resolve(json));
        })
    },
    chipdoc: async function(chipset) {
        return new Promise(async function(resolve, reject){
            fetch(`https://api.airreps.info/chipdoc?chip=${chipset}`)
            .catch(err => reject(new Error(err)))
            .then(res => res.json())
            .then(json => resolve(json));
        })
    },
    readme: async function() {
        return "https://github.com/AirReps/airreps_api";
    },
    advanced: {
        chipdoc: async function(chipset, link, auth) {
            return new Promise((resolve, reject) => {
                let requestData = {
                    chip: chipset,
                    link: link,
                    auth: auth
                }
                fetch('https://api.airreps.info/chipdoc', { 
                    method: 'POST', 
                    body: JSON.stringify(requestData),
                    headers: { 'Content-Type': 'application/json' } 
                })
                .catch(err => reject(new Error(err)))
                .then(res => res.json()) // expecting a json response
                .then(json => resolve(json));
            })
        }
    }
}
