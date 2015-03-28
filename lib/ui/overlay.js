var { ToggleButton } = require("sdk/ui/button/toggle");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = null;
var notraceMainMenu = require("sdk/panel").Panel({
  width:215,
  height:160,
  contentURL: self.data.url("pages/panel.html"),
  onHide: handleHide
});

function addButton() {
  button = ToggleButton({
    id: "notrace-mainmenuentry",
    label: "NoTrace",
    icon: {
      // "16": "./firefox-16.png",
      "32": self.data.url("images/NoTrace.png")
    },
    onChange: handleChange
  });
}

function removeButton() {
  if (null !== button)
    button.destroy();
}

function handleChange(state) {
  if (state.checked) {
    notraceMainMenu.show({
      position: button
    });
  }
}

function handleHide() {
  if (null !== button)
    button.state('window', {checked: false});
}

exports.addButton = addButton;
exports.removeButton = removeButton;