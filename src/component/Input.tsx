import type { DataForm } from "../interfaces/inputInterface";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type InputLoginProps = {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  name: keyof DataForm;
  value?: string;
  register?: UseFormRegister<DataForm>;
  errors?: FieldErrors<DataForm>;
  rules?: object;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode
};

const Input = ({
  label,
  placeholder,
  id,
  name,
  value,
  register,
  rules,
  disabled,
  onChange,
  icon
}: InputLoginProps) => {

  return (
    <div className="relative">
      <label
        className="block text-lg text-white/70 font-medium text-foreground mb-2"
      >
        {label}
      </label>
     <div className="absolute left-2 top-12">
       {icon}
     </div>
      <input
        {...(register ? register(name, rules) : {})}
        disabled={disabled}
        type="text"
        id={id}
        name={name}
        className={`w-full text-white/70 px-10 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      
    </div>
  );
};

export default Input;