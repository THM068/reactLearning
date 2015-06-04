var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
    render: function() {
        var rawMarkup = marked(this.props.children + "", {sanitize: true});
        return (
            <div className="comment">
                <h5 className="commentAuthor">
                    {this.props.author}
                </h5>
                <span dangerouslySetInnerHTML={{__html: rawMarkup} } />

            </div>
            );
    }
});

var CommentList = React.createClass({
   render: function() {

       var commentNodes = this.props.data.map(function(comment){
           return (
               <Comment author={comment.author}>
                   {comment.text}
               </Comment>
               )
       });

       return (
           <div className="commentList">
                {commentNodes}
           </div>
       );
   }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
               Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var CommentBox = React.createClass({
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
            <div className="commentBox">
                <h4>Comments</h4>
                <CommentList data={this.state.data} />
                <CommentForm />

            </div>
            );
    }
});

var CommentForm = React.createClass({
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
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter an author name" ref="author"/><br/>
                <input type="text" placeholder="Say something ..." ref="text"/><br/>
                <input type="submit" value="Post" />
            </form>
        )
    }
});

React.render(<CommentBox url="commentList.json" pollInterval="{10000}"/>, document.getElementById('content'));

//<Comment author="Thando Mafela">This is one **comment**</Comment>
//<Comment author="kc">This is the *second* comment</Comment>
// <!--<Comment/> -->