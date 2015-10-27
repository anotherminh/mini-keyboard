/*global React, Key, Organ*/
(function(root) {
  'use strict';
  root.Organ = React.createClass({
    render: function() {
      return (
        <div className="organ">
          {
            Object.keys(root.TONES).map(function (tone) {
              return <Key key={ tone } noteName={ tone }/>;
            })
          }
        </div>
      );
    }
  });
})(this);
