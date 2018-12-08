import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createpost} from '/home/ritik/redux_example/src/actions/ postActions.js'
class Postform extends React.Component{

constructor(props){
    super(props);
    
        this.state={
         title:'',
         body:''
        
        };
    
}
onChange = (e)=>{

    this.setState({
        [e.target.name]:e.target.value
    })
}        

onSubmit = (e)=>{
    e.preventDefault()
    const post={
      title: this.state.title,
      body:this.state.body
    }
   this.props.createpost(post);
}

render(){
   
    return(
        <div>
            
         <h1>PostForm</h1>
         <h2>Enter something to add to the post</h2>
         <form onSubmit = {this.onSubmit}>
             <div>
                 <label>Title:</label>
                 <br />
                 <input type = "text" name = "title" onChange = {this.onChange} value = {this.state.title}></input>
             </div>
             <div>
                 <label>body:</label>
                 <br />
                 <textarea name="body" onChange = {this.onChange}  value = {this.state.body} />
             </div>
             <button type="submit">submit</button>
         </form>
        </div>
    );
}
}
Postform.PropTypes={

    createpost:PropTypes.func.isRequired
    
}
export default connect(null,{createpost})(Postform);