/* global KeyActions*/
(function(root) {
  'use strict';

  var Track = root.Track = function(attributes) {
    this.startTime = null;
    this.name = attributes['name'];
    this.roll = attributes['roll'];
    this.interval = null;
  };

  Track.prototype.startRecording = function() {
    this.roll = [];
    this.startTime = new Date();
  };

  Track.prototype.addNotes = function(notes) {
    var timeFromStart = new Date() - this.startTime;
    this.roll.push({notes: notes, time: timeFromStart});
  };

  Track.prototype.stopRecording = function() {
    this.addNotes([]);
  };

  Track.prototype.play = function() {
    if (!this.interval) {
      var playBackStartTime = Date.now();
      var currentNote = 0;
      this.interval = setInterval(function() {
        if ((Date.now() - playBackStartTime) > this.roll[currentNote].time) {
          if (currentNote > 0) {
            this.roll[currentNote - 1].notes.forEach(function (note) {
              KeyActions.keyReleased(note);
            });
          }

          this.roll[currentNote].notes.forEach(function (note) {
            KeyActions.keyPressed(note);
          });

          currentNote++;
        }
        // debugger;
        if (currentNote >= this.roll.length - 1){
          clearInterval(this.interval);
          this.interval = null;
        }
      }.bind(this), 10);
    }
  };
})(this);
