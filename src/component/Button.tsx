import type { IButton } from "../interfaces/IButton";

const Button = ({children, onClick, type}: IButton) => {
    return (
        <button type={type} onClick={onClick} className="button__card">
            {children}
        </button>
    );
}
 
export default Button;

