var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({displayName: "Comment",
    render: function() {
        var rawMarkup = marked(this.props.children + "", {sanitize: true});
        return (
            React.createElement("div", {className: "comment"}, 
                React.createElement("h5", {className: "commentAuthor"}, 
                    this.props.author
                ), 
                React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup} })

            )
            );
    }
});

var CommentList = React.createClass({displayName: "CommentList",
   render: function() {

       var commentNodes = this.props.data.map(function(comment){
           return (
               React.createElement(Comment, {author: comment.author}, 
                   comment.text
               )
               )
       });

       return (
           React.createElement("div", {className: "commentList"}, 
                commentNodes
           )
       );
   }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
               "Hello, world! I am a CommentForm."
            )
        );
    }
});

var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function() {
        return {
            data: []
        }
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState( {data: data} )
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    },

    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h4", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)

            )
            );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit: function(e){
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();

        if(!author || !text) {
            alert("Please enter an author or text");
            return;
        }
        alert('I have submited form ...' + author + ' ' + text);
    },

    render: function() {
        return (
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", placeholder: "Enter an author name", ref: "author"}), React.createElement("br", null), 
                React.createElement("input", {type: "text", placeholder: "Say something ...", ref: "text"}), React.createElement("br", null), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        )
    }
});

React.render(React.createElement(CommentBox, {url: "commentList.json", pollInterval: "{10000}"}), document.getElementById('content'));

//<Comment author="Thando Mafela">This is one **comment**</Comment>
//<Comment author="kc">This is the *second* comment</Comment>
// <!--<Comment/> -->