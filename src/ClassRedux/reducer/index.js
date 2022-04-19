const initState={
    counter:0
}

export const reducer=(state=initState, action)=>{
const {type,data}=action
switch (type) {
    case 'INCREMENT':
        return {counter: state.counter + data};
    case 'DECREMENT':
        return {counter: state.counter - data};
    case 'RESET':
        return {counter: 0};
    default:
        return state;
}
}

