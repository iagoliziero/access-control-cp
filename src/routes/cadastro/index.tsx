import { Mail, User, UsersRound } from "lucide-react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useForm } from "react-hook-form";
import type { IDataForm } from "../../interfaces/IdataForm";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm<IDataForm>();

    const onSubmit = (data: IDataForm) => {
        alert(JSON.stringify(data));
    }

  return (
    <section className="section">
      <div>
        <h1 className="title">Cadastrar Usuário</h1>
      </div>
      <form className="card" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            rules={{required: true}}
            id="name"
            name="name"
            placeholder="Digite Seu Nome"
            label="Name *"
            icon={<UsersRound className="text-white/70" />}
          />
          {errors.name?.type === 'required' && (
            <p className="p-errors__input">Nome é obrigatório.</p>
          )}
        </div>
        <div>
          <Input
            register={register}
            rules={{required: true}}
            id="username"
            name="username"
            placeholder="Digite Seu Username"
            label="Username *"
            icon={<User className="text-white/70" />}
          />
          {errors.username?.type === 'required' && (
            <p className="p-errors__input">Nome do usuário é obrigatório.</p>
          )}
        </div>
        <div>
          <Input
            register={register}
            rules={{required: true}}
            id="email"
            name="email"
            placeholder="Digite Seu Email"
            label="Email *"
            icon={<Mail className="text-white/70" />}
          />
          {errors.email?.type === 'required' && (
            <p className="p-errors__input">Email é obrigatório.</p>
          )}
        </div>
        <Button type="submit">
            Cadastrar
        </Button>
      </form>
    </section>
  );
};

export default Cadastro;
