exports.main = function (options, callbacks) {
  console.log(options.loadReason);
  switch (options.loadReason) {
    case 'install':
      var notrace_ui             = require("./lib/ui/overlay");
      var notrace_list_manager   = require("./lib/script/list_manager");
      notrace_ui.addButton();
      listManager = notrace_list_manager.createListManager()
      listManager.ensureListIsLoaded('whitelist');
      console.log(listManager.getList('whitelist'));
      // notrace_list_manager.list_manager.ensureListIsLoaded('whitelist');
      // console.log(notrace_list_manager.list_manager.getList('whitelist'));
      //openPanel(console);
      break;
    case 'enable':
      var notrace_ui             = require("./lib/ui/overlay");
      var notrace_list_manager   = require("./lib/script/list_manager");

      notrace_ui.addButton();
      break;
    default:
      break;
  }
};

exports.onUnload = function (reason) {
  switch (reason) {
    case 'uninstall':
      var notrace_ui             = require("./lib/ui/overlay");
      break;
    case 'disable':
      var notrace_ui             = require("./lib/ui/overlay");
      notrace_ui.removeButton();
      break;
    default:
      break;
  }
};	