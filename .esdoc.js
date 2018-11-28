module.exports = {
    "source": ".",
    "destination": "./docs",
    "includes": ["\\.js$"],
    "excludes": [".esdoc.js", "node_modules"],
    "plugins": [{
        "name": "esdoc-standard-plugin"
    }, {
        "name": "esdoc-ecmascript-proposal-plugin",
        "option": {
            "all": true
        }
    }]
};
