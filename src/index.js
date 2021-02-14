const superagent = require('superagent');
const fetch = require('node-fetch');


module.exports = {
    members: async function() {
        return new Promise(async function(resolve, reject){
            fetch('https://KindImpoliteExperiments.albinhedwall.repl.co/members')
            .catch(err => reject(new Error(err)))
            .then(res => res.json())
            .then(json => resolve(json));
        })
    },
    chipdoc: async function(chipset) {
        return new Promise(async function(resolve, reject){
            fetch(`https://KindImpoliteExperiments.albinhedwall.repl.co/chipdoc?chip=${chipset}`)
            .catch(err => reject(new Error(err)))
            .then(res => res.json())
            .then(json => resolve(json));
        })
    }
}