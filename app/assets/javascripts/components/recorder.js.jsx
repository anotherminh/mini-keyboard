/* global React, Track, KeyStore*/
(function(root) {
  'use strict';

  root.Recorder = React.createClass({
    getInitialState: function() {
      return {isRecording: false, track: new Track({name: "New", roll: []})};
    },

    _storeChange: function () {
      var pressedKeys = [];
      var keys = KeyStore.all();
      for (var key in keys) {
        if (keys[key]) { pressedKeys.push(key); }
      }
      this.state.track.addNotes(pressedKeys);
    },

    componentDidMount: function () {
      KeyStore.addChangeHandler(this._storeChange);
    },

    removeChangeHandler: function () {
      this.state.track.stopRecording();
      KeyStore.removeChangeHandler(this._storeChange);
    },

    render: function(){
      var track = this.state.track;
      return(
        <div>
          <button onClick={track.play.bind(track)}>
            <img className="icon" src="/images/play.png"></img>
          </button>
          <button onClick={track.startRecording.bind(track)}>
            <img className="icon" src="/images/record.png"></img>
          </button>
          <button onClick={this.removeChangeHandler}>
            <img className="icon" src="/images/stop.png"></img>
          </button>
        </div>
      );
    }
  });
})(this);
