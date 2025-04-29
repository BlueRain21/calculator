

import { createContext, useReducer } from "react";


const initialState = {
    equation: "0",
    result: "0"
}

export const dispatchMethods = {
    add: "ADD_TO_EQUATION",
    clear: "CLEAR",
    delete: "DELETE",
    percent: "PERCENT",
    equal : "EQUAL",
    input: "ON_INPUT"
}

const calculation = (string) =>{
    let s1 = string.replace(/x/gi, "*");
    let s2 = s1.replace(/÷/gi, "/");
    return eval(s2);
}

const reducer = (state, action)=>{

    switch(action.type){
        case dispatchMethods.add:
            const e1 = state.equation == 0 ? action.payload : state.equation + action.payload;
            if(["++", "--", "x÷", "÷x"].includes(e1.slice(e1.length-2))){
                return state
            }
            return {...state,
                equation: e1,
                result: isNaN(Number(action.payload)) ? state.result : calculation(e1)
            };
        case dispatchMethods.percent:
            let oe = state.equation;
            for(var i=oe.length -1 ; i>=0; i--){
                if((isNaN(Number(oe[i])) && oe[i] !="." && oe[i] !="0") || oe[i] == "÷"){
                    break;
                }
            }

            let e2;
            if(i == -1){
                e2 = "" + Number(state.equation)/100;
            }else{
                e2 = oe.slice(0,i+1) + (Number(oe.slice(i+1))/100);
            }

            return {...state,
                equation: e2,
                result: i == -1 ? e2 : calculation(e2)
            }

        case dispatchMethods.clear:
            return {equation: "0", result: "0"}
        case dispatchMethods.delete:
            const equation1 = state.equation.slice(0, state.equation.length-1);
            const f11 = equation1.replace(/x/gi, "*");
            const f21 = f11.replace(/÷/gi, "/");
            // console.log(f21);
            const result1 = eval(f21);
            return {equation: equation1, result: result1}

        case dispatchMethods.equal:
            return {
                ...state,
                equation: ""+state.result,
            }

        case dispatchMethods.input:
            let payload = action.payload;
            return {
                ...state,
                equation: payload,
                result: isNaN(Number(payload[payload.length-1])) ? calculation(payload.slice(0, payload.length-1)) : calculation(payload)
            }
        default:
            return state
    }
}

export const MainContext = createContext();

const MainReducer = ({children}) =>{
    const data = useReducer(reducer, initialState);

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}


export default MainReducer;