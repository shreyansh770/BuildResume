import React, { Component } from 'react'
import { connect } from 'react-redux';


class AddTodo extends Component {
    state = { 
        todo:""
     }

    onChangeHandler = (e) =>{
        e.preventDefault();
        let value = e.target.value;
        this.setState({
            todo:value
        })
    }

    addTodoHandler = () =>{
        this.props.addTodo(this.state.todo);//mapDispatchToProps ke funtion ke todo me chle jayegi value aur fir dispatch chlega
        this.setState({
            todo:""//input se value clear ho jaegi
        })
    }

    render() { 
        return ( 
            <div className="add-todo">
                <input type="text" value={this.state.todo} onChange = {(e)=>{this.onChangeHandler(e)}}/>
                <button onClick = {this.addTodoHandler}>ADD TODO</button>
            </div>
         );
    }
}


// connect() => connects component to the store/local db
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
 
export default AddTodo;