import type { IButton } from "../interfaces/IButton";

const Button = ({children, onClick}: IButton) => {
    return (
        <button onClick={onClick} className="button__card">
            {children}
        </button>
    );
}
 
export default Button;

