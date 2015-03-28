var ss   = require("sdk/simple-storage");
var self = require("sdk/self");

const whitelist  = 'whitelist';
const ADLIST     = 'adlist';
const THIRDPARTY = 'thirdparty';

lists = {
	whitelist: null,
	ADLIST: null,
	THIRDPARTY: null,
};

function getAvailablLists () {
    return lists;
}

function getList(name) {
	return lists[name];
}

function ensureListIsLoaded(name) {
	if (lists[name] == null) {
		// Load listfrom storage, if possible
		storedList = ss.storage.lists;
		if (null == storedList) {
			// Load from defautl file
			defaultList = self.data.load('default/'+name+'.json');
			lists[name]  = defaultList;
			ss.storage.lists = defaultList;
		}
		else {
			lists[name] = storedList; 
		}
	}
}

exports.getAvailablLists   = getAvailablLists;
exports.ensureListIsLoaded = ensureListIsLoaded;
exports.getList 		   = getList;