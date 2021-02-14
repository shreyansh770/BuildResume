import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddTodo from './addTodo';

class Todos extends Component {

    //ab myReducer se aynegi state(after using connect)
    // state = { 
        // todos : [
        //     {id:1 , todo : "Learn ES6"},
        //     {id:2 , todo : "Learn React"},
        //     {id:3 , todo : "Learn Javascript"}
        // ]
    //  }

      


    deleteTodo = (id) =>{

        console.log(this.props)

        // let filterTodos = this.state.todos.filter( todo =>{
        //     return todo.id != id;
        // })

        // this.setState({
        //     todos : filterTodos
        // })

    }

    addTodo = (todo) =>{
        // this.setState({
        //     todos : [...this.state.todos , {id : Math.random() , todo:todo }]
        // })
    }

    render() { 
        return ( 
               
            <React.Fragment>

            <AddTodo addTodo = {this.props.addTodo}></AddTodo>

            <div className="todos">
                {this.props.todos.map((todo)=>{
                     return <div className="todo" key = {todo.id} onClick ={() => {this.deleteTodo(todo.id)}}> {todo.todo} </div>
                })}
            </div>

            </React.Fragment>
         );
    }
}


//mapStateToProps -> store se state leta hai aur use props me convert krke Component ko bhjta hai fir props. krke hum ab usse usse kr paenge
const mapStateToProps = (state) =>{
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo : ((todo) =>{dispatch({type:"ADD_TODOS" , todo:todo})})
    }
}

//connect(mapStateToProps) => HOC => HOC(component) => EHOC of our component
// => EHOC will insert state as props to our component

export default connect(mapStateToProps , mapDispatchToProps)(Todos);
 
// export default Todos;