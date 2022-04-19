export const IncrementAction=data=>({type:'INCREMENT', data});
export const DecrementAction=data=>({type:'DECREMENT', data});
export const ResetAction=()=>({type:'RESET'});
export const AsyncIncrement=(data, time)=>{
    return (dispatch)=>{
        setTimeout(
            ()=>{dispatch(IncrementAction(data))},time
        )
    }
};
    
export const AsyncDecrement=(data,time)=>{
    return (dispatch)=>{
        setTimeout(
            ()=>{dispatch(DecrementAction(data))},time
        )
    }
}




