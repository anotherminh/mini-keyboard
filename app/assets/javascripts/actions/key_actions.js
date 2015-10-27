/* global AppDispatcher */
var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESS",
      key: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASE",
      key: key
    });
  }
};
