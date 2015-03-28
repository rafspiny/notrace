function ListManager () {
	const WHITELIST  = 'whitelist';
	const ADLIST     = 'adlist';
	const THIRDPARTY = 'thirdparty';

    this.lists = {
    	'WHITELIST': [],
    	'ADLIST': [],
    	'THIRDPARTY': [],
    };

    this.getAvailablLists = function() {
        return this.lists.keys();
    };
}

exports.list_manager = ListManager;