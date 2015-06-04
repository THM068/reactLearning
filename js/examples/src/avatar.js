var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.username + "/picture"} />
            )
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.facebook.com/'+ this.props.username}>{this.props.username}</a>
            )
    }
})




var Avatar = React.createClass({

    render: function() {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
            )
    }

});

React.render(<Avatar username='marange1'/>, document.getElementById('avatar'));