

import { useContext } from "react";

import { MainContext, dispatchMethods } from "../context/MainContext";


const Output = () =>{

    const [{equation, result}, dispatch] = useContext(MainContext)


    return (
        <div className="text-right">
            {/* <p className="text-[20px] text-muted-blue-grey-light dark:text-muted-blue-grey-dark mx-10 overflow-scroll">{equation}</p> */}
            <input type="text" value={equation} className="text-[20px] text-muted-blue-grey-light dark:text-muted-blue-grey-dark mx-10 overflow-scroll text-right focus:border-none focus:outline-none" 
                onChange={(e) => {
                    dispatch({type: dispatchMethods.input, payload:e.target.value })
                }}
            />
            <p className="pb-10 mx-10 font-medium text-[48px] overflow-scroll">{result}</p>
        </div>
    )
}

export default Output;