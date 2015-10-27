/* global React, KeyStore */
(function(root) {
  'use strict';

  root.Key = React.createClass({
    getInitialState: function() {
      return { note: null, pressed: false };
    },

    _storeChange: function() {
      var activeKeys = KeyStore.all();
      if(activeKeys[this.props.noteName]) {
        this.state.note.start();
        this.setState( { pressed: true } );
      } else {
        this.state.note.stop();
        this.setState( {pressed: false } );
      }
    },

    componentDidMount: function() {
      // debugger
      var newNote = new root.Note(root.TONES[this.props.noteName]);
      this.setState({ note: newNote });
      KeyStore.addChangeHandler(this._storeChange);
    },

    render: function () {
      var klass;
      this.state.pressed ? klass = "pressed note-key" : klass = "note-key"
      return (<div className={klass}></div>);
    }
  });

})(this);
