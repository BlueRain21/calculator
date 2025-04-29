
import { MdOutlinePercent } from "react-icons/md";
import { FiDivide } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa6";

import { useContext } from "react";

import { MainContext, dispatchMethods } from "../context/MainContext";
import ThemeButton from "./ThemeButton";
import Button from "./Button";


const Input = () =>{

    const [data, dispatch]= useContext(MainContext);

    const inputKeys = [
        {
            Icon: MdOutlinePercent,
            style: " bg-pale-grey dark:bg-charcoal-dark",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.percent});
            },
            label: "Convert the number to percentage"
            
        },
        {
            Icon: FiDivide,
            style: " bg-pale-grey dark:bg-charcoal-dark",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "÷"});
            },
            label : "Divide"
        },
        {
            Icon: RxCross1,
            style: " bg-pale-grey dark:bg-charcoal-dark",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "x"});
            },
            label : "Multiply"
        },
        {
            text: 7,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "7"});
            },
            label: "7"
        },
        {
            text: 8,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "8"});
            },
            label: "8"
        },
        {
            text: 9,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "9"});
            },
            label: "9"
        },
        {
            Icon: FiMinus,
            style: " bg-pale-grey dark:bg-charcoal-dark",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "-"});
            },
            label: "Minus"
        },
        {
            text: 4,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "4"});
            },
            label: "4"
        },
        {
            text: 5,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "5"});
            },
            label: "5"
        },
        {
            text: 6,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "6"});
            },
            label: "6"
        },
        {
            Icon: FaPlus,
            style: " bg-pale-grey dark:bg-charcoal-dark",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "+"});
            },
            label: "Plus"
        },
        {
            text: 1,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "1"});
            },
            label: "1"
        },
        {
            text: 2,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "2"});
            },
            label: "2"
        },
        {
            text: 3,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "3"});
            },
            label: "3"
        },
        {
            Icon: FaEquals,
            style: "bg-linear-to-b from-fuchsia to-tangerine row-span-2 h-33 shadow-xl/25 dark:shadow-tangerine",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.equal});
            },
            label: "Equal"
        },
        {
            text: "AC",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.clear});
            },
            label: "Clear"
        },
        {
            text: 0,
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "0"});
            },
            label: "0"
        },
        {
            text: ".",
            handleClick : ()=>{
                dispatch({type: dispatchMethods.add, payload: "."});
            },
            label: "."
        }
    ]



    return (
        <div className="px-10 py-12 bg-[#F5F5F5] dark:bg-[#27292E] rounded-t-[25px] grid grid-cols-4 gap-4">
            <ThemeButton/>
            {
                inputKeys.map((ele, i) => <Button {...ele} key={i}/>)
            }
            {/* <Button style=" bg-pale-grey dark:bg-charcoal-dark" Icon={MdOutlinePercent}/>
            <Button style=" bg-pale-grey dark:bg-charcoal-dark" Icon={FiDivide}/>
            <Button style=" bg-pale-grey dark:bg-charcoal-dark " Icon={RxCross1}/>
            <Button text={7} />
            <Button text={8} />
            <Button text={9} />
            <Button style=" bg-pale-grey dark:bg-charcoal-dark " Icon={FiMinus}/>
            <Button text={4} />
            <Button text={5} />
            <Button text={6} />
            <Button style=" bg-pale-grey dark:bg-charcoal-dark " Icon={FaPlus}/>
            <Button text={1} />
            <Button text={2} />
            <Button text={3} />
            <Button style="bg-linear-to-b from-fuchsia to-tangerine row-span-2 h-33 shadow-xl/25 dark:shadow-tangerine" Icon={FaEquals} />
            <Button text="AC" />
            <Button text={0} />
            <Button text="." /> */}



            
        </div>
    )
}

export default Input;