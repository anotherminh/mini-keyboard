(function(root) {
  'use strict';
  var AudioContext = window.AudioContext || window.webkitAudioContex;
  var ctx = new AudioContext();

  root.Note = function (frequency) {
    this.oscillatorNode = this.createOscillator(frequency);
    this.gainNode = this.createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  root.Note.prototype.start = function () {
    this.gainNode.gain.value = 0.4;
  };

  root.Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };

  root.Note.prototype.createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  root.Note.prototype.createGainNode = function () {
  var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

})(this);
