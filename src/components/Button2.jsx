const Button2 = ({text}) => {
    return (
        <button
            type="button"
            className="relative overflow-hidden bg-black text-white font-bold px-5 py-2 rounded cursor-pointer shine-btn hover:bg-yellow-200 hover:text-black transition-all duration-300"
        >
            {text}
        </button>
    )
}

export default Button2