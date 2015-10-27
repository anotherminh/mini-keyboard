/* global EventEmitter, AppDispatcher, KeyStore */
(function(root) {
  'use strict';

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    _keys: {},

    all: function() {
      return jQuery.extend({}, this._keys);
    },

    changed: function() {
      KeyStore.emit("CHANGE_EVENT");
    },

    addChangeHandler: function(handler) {
      KeyStore.on("CHANGE_EVENT", handler);
    },

    removeChangeHandler: function(handler){
      KeyStore.removeListener("CHANGE_EVENT", handler);
    }
  });

  AppDispatcher.register(function(action){
    switch(action.actionType){
      case "KEY_PRESS":
        KeyStore._keys[action.key] = true;
        KeyStore.changed();
        break;
      case "KEY_RELEASE":
        KeyStore._keys[action.key] = false;
        KeyStore.changed();
    }
  });
})(this);
