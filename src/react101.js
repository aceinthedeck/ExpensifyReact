import {createStore} from 'redux';

const store=createStore((state={count:0},action)=>{

    if(action.type==='INCREMENT'){
        return{
            count:state.count+1
        };
    }
    else
    return state;
});

store.dispatch({
    type:'INCREMENT'
});


console.log(store.getState());