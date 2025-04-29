



const Button = ({text, style, Icon, handleClick}) =>{
    return (
        <button
        className={`w-15 h-15   rounded-full cursor-pointer flex justify-center items-center text-[24px] ${style}`}
        onClick={handleClick}
        >
            {text}
            {Icon && <Icon/>}
        </button>
    )
}

export default Button;

