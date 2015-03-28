var ss   = require("sdk/simple-storage");
var self = require("sdk/self");

const whitelist  = 'whitelist';
const adlist     = 'adlist';
const thirdparty = 'thirdparty';

function ListManager() {
	  return { __proto__: ListManager.prototype	  }
}

ListManager.prototype = {
	constructor: ListManager,
	_lists: {
		whitelist: null,
		adlist: null,
		thirdparty: null,
	},
	getAvailableLists: function() {
	  	return this._lists;
	},
	getList: function(name) {
		return this._lists[name];
	},
	ensureListIsLoaded: function(name) {
		if (this._lists[name] == null) {
			// Load listfrom storage, if possible
			storedList = ss.storage.lists;
			if (null == storedList) {
				// Load from defautl file
				defaultList = JSON.parse(self.data.load('default/'+name+'.json'));
				this._lists[name]  = defaultList;
				ss.storage.lists = defaultList;
			}
			else {
				this._lists[name] = storedList; 
			}
		}
	}

}

exports.list_manager = ListManager;

function createListManager() {
  let manager = ListManager()
  return manager;
}

exports.createListManager = createListManager