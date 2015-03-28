// var {notrace_whitelist}    = require("./script/whitelist");
// var {notrace_whitelist}    = require("./script/adlist");
// var lists = notrace_list_manager.ListManager.getAvailablLists();
// console.log(lists);
// var notrace_list_manager.ensureWhitelistLoaded();

exports.main = function (options, callbacks) {
  console.log(options.loadReason);
  switch (options.loadReason) {
    case 'install':
      var notrace_ui             = require("./ui/overlay");
      var notrace_list_manager   = require("./script/list_manager");

      console.log(notrace_ui);
      notrace_ui.addButton();
      // notrace_ui.addButton();
      // console.log(notrace_list_manager);
      break;
    case 'enable':
      var notrace_ui             = require("./ui/overlay");
      var notrace_list_manager   = require("./script/list_manager");

      notrace_ui.addButton();
      // console.log(notrace_list_manager);
      break;
    default:
      break;
  }
};

exports.onUnload = function (reason) {
  switch (reason) {
    case 'uninstall':
      var notrace_ui             = require("./ui/overlay");
      break;
    case 'disable':
      var notrace_ui             = require("./ui/overlay");
      notrace_ui.removeButton();
      break;
    default:
      break;
  }
};