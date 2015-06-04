var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search ..."})
            )
            )
   }
});

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",

    render: function() {
        return (
            React.createElement("div", null, "Product List")
        )
    }
});

React.render(React.createElement(FilterableProductTable, null), document.getElementById('content'));