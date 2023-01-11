export const incrimentAction=()=>{
    return {
        type:"INCREMENT"
    }
}
export const decrementAction=()=>{
    return {
        type:"DECREMENT"
    }
}
export const setIncrementAction=(value)=>{
    return {
        type:"SET_INPUT",
        payload:value
    }
}
export const incrimentByUser=(value)=>{
 return{
    type:"INPUT_BY_USER",
    payload:value
 }
}