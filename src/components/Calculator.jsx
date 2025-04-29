

import { useContext } from "react"
import  {MainContext} from "../context/MainContext";
import Output from "./Output";
import Input from "./Input";


const Calculator = () =>{

    const [data, dispatch] = useContext(MainContext);
    // console.log(data);


    return (
            <div className="bg-white dark:bg-deep-charcaol-gray text-near-black-text dark:text-white
            min-w-xs w-[350px] h-fit">
                <Output/>
                <Input/>
            </div>
    )
}


export default Calculator