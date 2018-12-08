import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchPosts } from '/home/ritik/redux_example/src/actions/ postActions.js'

class Posts extends React.Component{
componentDidMount()
    {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps)
    {
       if(nextProps.newposts){

        this.props.posts.unshift(nextProps.newposts)
       }
    }

render(){
    const postitenms=this.props.posts.map(post =>(

        <div key = {post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div>
    ));
    return(
        <div>
            {postitenms}
        </div>
    );
    
}

}

Posts.PropTypes={

    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newposts:PropTypes.object
}
const mapStateToProps =state=>({

    posts:state.posts.items,
    newposts:state.posts.item
})
export default connect(mapStateToProps,{fetchPosts})(Posts);
