const initialValue ={
    count:0,
    inputValue:""
}
export const counterRoucer=(state=initialValue,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count:state.count+1
            }
        case "DECREMENT":
            return{
                ...state,
                count:state.count-1
            }
        case "SET_INPUT":
            return{
                ...state,
                inputValue: action.payloed
            }
        case "INPUT_BY_USER":
            return{
                ...state,
                count:state.count + Number(action.payloed),
                inputValue:""
            }
    }
}