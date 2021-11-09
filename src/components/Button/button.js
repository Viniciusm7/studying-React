const Button = ({children, className, onClick}) => {
    return (
         /* enviando para card.js*/
                <button
                    type="button" 
                    className={className} 
                    onClick = {onClick}
                 >
                      {children}
                </button>
    )
}

export default Button;