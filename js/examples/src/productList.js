var SearchBar = React.createClass({

    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search ..." />
                <p>
                    <input type="checkbox" />
                    {''}
                    Only show products in stock
                </p>
            </form>
            )
   }
});

var ProductCategoryRow = React.createClass({
    render: function() {
        return (
            <tr>
                <th colspan="2">
                    {this.props.category}
                </th>
            </tr>
            )
    }
});

var ProductTable = React.createClass({
    render : function() {
        var rows = [];
        var categoryArray = [];

        this.props.products.forEach(function(product){
            var categoryName = product.category;

            if($.inArray(product.category, categoryArray) == -1) {
                console.log(categoryName);
                rows.push(<ProductCategoryRow category={categoryName} key={product.category} />);
                categoryArray.push(categoryName);
            }


        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
       );
    }
});

var FilterableProductTable = React.createClass({

    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
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

React.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('content'));

