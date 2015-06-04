var ProfilePic = React.createClass({displayName: "ProfilePic",
    render: function() {
        return (
            React.createElement("img", {src: 'https://graph.facebook.com/' + this.props.username + "/picture"})
            )
    }
})




var Avatar = React.createClass({displayName: "Avatar",

    render: function() {
        return (
            React.createElement(ProfilePic, {username: this.props.username})
            )
    }

});

React.render(React.createElement(Avatar, {username: "thando.mafela"}), document.getElementById('avatar'));