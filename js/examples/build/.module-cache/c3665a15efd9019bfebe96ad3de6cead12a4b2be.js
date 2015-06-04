var ProfilePic = React.createClass({displayName: "ProfilePic",
    render: function() {
        return (
            React.createElement("img", {src: 'https://graph.facebook.com/' + this.props.username + "/picture"})
            )
    }
});

var ProfileLink = React.createClass({displayName: "ProfileLink",
    render: function() {
        return (
            React.createElement("a", {href: 'https://www.facebook.com/'+ this.props.username}, "this.props.username")
            )
    }
})




var Avatar = React.createClass({displayName: "Avatar",

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(ProfilePic, {username: this.props.username}), 
                React.createElement(ProfileLink, {username: this.props.username})
            )
            )
    }

});

React.render(React.createElement(Avatar, {username: "kerriechanner"}), document.getElementById('avatar'));