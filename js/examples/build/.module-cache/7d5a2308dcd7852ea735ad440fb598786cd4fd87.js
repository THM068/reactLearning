var SearchBar = React.createClass({displayName: "SearchBar",

    render: function() {
        return (
            React.createElement("form", null, 
                React.createElement("input", {type: "text", placeholder: "Search ..."}), 
                React.createElement("p", null, 
                    React.createElement("input", {type: "checkbox"}), 
                    '', 
                    "Only show products in stock"
                )
            )
            )
   }
});

var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
    render: function() {
        return (
            React.createElement("tr", null, 
                React.createElement("th", {colspan: "2"}, 
                    this.props.category
                )
            )
            )
    }
});

var ProductTable = React.createClass({displayName: "ProductTable",
    render : function() {
        var rows = [];
        var categoryArray = [];

        this.props.products.forEach(function(product){
            var categoryName = product.category;

            if($.inArray(product.category, categoryArray) == -1) {
                rows.push(React.createElement(ProductCategoryRow, {category: categoryName, key: product.category}));
                categoryArray.push(categoryName);
            }


        });
        return (
            React.createElement("div", null, "Product Table")
       )
    }
})

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",

    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(SearchBar, null), 
                React.createElement(ProductTable, {products: this.props.products})
            )
        )
    }
});
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

React.render(React.createElement(FilterableProductTable, {products: PRODUCTS}), document.getElementById('content'));

