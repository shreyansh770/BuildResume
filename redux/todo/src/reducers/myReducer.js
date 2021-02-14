const initialSate = {
    todos : [
        {id:1 , todo : "Learn ES6"},
        {id:2 , todo : "Learn React"},
        {id:3 , todo : "Learn Javascript"}
    ]
}

export function myReducer(state = initialSate , action){
    console.log(action)
    if(action.type == "ADD_TODOS"){
        return{
            ...state,
            todos : [...state.todos , {id:Math.random() , todo:action.todo}]
        }
    }else{
        return state;
    }
}