
var TodoApp = React.createClass({displayName: "TodoApp",

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h3", null, "TODO"), 
                React.createElement("form", null, 
                    React.createElement("input", {type: "text", value: ""})
                )
            )
            )
    }
})
React.render(React.createElement(TodoApp, null), document.getElementById('content'));
