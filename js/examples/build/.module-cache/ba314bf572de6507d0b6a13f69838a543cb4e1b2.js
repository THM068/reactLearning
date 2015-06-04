var Timer = React.createClass({displayName: "Timer",
    getInitialState: function() {
        return {
            secondsElapsed: 0
        };
    }

})

React.render(React.createElement(Timer, null), document.getElementById('content'));