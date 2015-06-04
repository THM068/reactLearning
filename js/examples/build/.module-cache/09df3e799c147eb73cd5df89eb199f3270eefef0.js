var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search ..."}), 
                React.createElement("p", null, 
                    React.createElement("input", {type: "checkbox"}), 
                    ' ', 
                    "Only show products in stock"
                )
            )
            )
   }
});

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(SearchBar, null)
            )
        )
    }
});

React.render(React.createElement(FilterableProductTable, null), document.getElementById('content'));