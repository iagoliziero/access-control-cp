import { useForm } from "react-hook-form";
import type { IDataForm } from "../../interfaces/IDataForm";
import Input from "../../component/Input";
import { Mail, User } from "lucide-react";
import Button from "../../component/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ILogin } from "../../interfaces/Ilogin";

const Login = () => {

  const [errorLogin, setErrorLogin] = useState<boolean>(false);

  const [isLoggedIn, setIsLoggedIn] = useState<ILogin>(() => {
    const stored = localStorage.getItem("loggedIn");
    return { loggedIn: stored === "true" ? "true" : "false" };
  });

  const handleLogin = () => {
    setIsLoggedIn({ loggedIn: "true" });
    return localStorage.setItem("loggedIn", "true");
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataForm>();

  const onSubmit = async (data: IDataForm) => {
    if (data) {
      const BASE_URL: string = import.meta.env.VITE_API_URL;
      try {
        const response = await fetch(
          `${BASE_URL}?email=${data.email}&_username=${data.username}}`,
          { method: "GET" }
        );

        if (response.status != 200) {
          console.error("Failed to fetch users:", response.statusText);
        } else {
          const data: IDataForm[] = await response.json();

          if (data.length === 0) { 
            setErrorLogin(true);
            return;
          } else {
            console.log(isLoggedIn)
            handleLogin();
            setErrorLogin(false);
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    }
  };

  return (
    <section className="section">
      <div>
        <h1 className="title">Cadastrar Usuário</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="card">
        <div>
          <Input
            register={register}
            rules={{ required: true }}
            id="username"
            name="username"
            placeholder="Digite Seu Username"
            label="Username *"
            icon={<User className="text-white/70" />}
          />
          {errors?.username?.type === "required" && (
            <p className="p-errors__input">Nome do usuário é obrigatório.</p>
          )}
        </div>
        <div>
          <Input
            register={register}
            rules={{ required: true }}
            id="email"
            name="email"
            placeholder="Digite Seu Email"
            label="Email *"
            icon={<Mail className="text-white/70" />}
          />
          {errors?.email?.type === "required" && (
            <p className="p-errors__input">Email é obrigatório.</p>
          )}
        </div>
        <Button
          type="submit"
        >
          Logar
        </Button>
        {errorLogin && (
        <p className="p-errors__input">Usuário não encontrado.</p>
      )}
      </form>
    </section>
  );
};

export default Login;
