var Avatar = React.createClass({displayName: "Avatar",

    render: function() {
        return (
            React.createElement("span", null, "Avatar")
            )
    }

});

React.render(React.createElement(Avatar, null), document.getElementById('avatar'));