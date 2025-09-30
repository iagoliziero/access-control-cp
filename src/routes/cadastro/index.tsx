import { Mail, User, UsersRound } from "lucide-react";
import Input from "../../component/Input";
import Button from "../../component/Button";

const Cadastro = () => {
  return (
    <section className="section">
      <div>
        <h1 className="title">Cadastrar Usuário</h1>
      </div>
      <form className="card">
        <div>
          <Input
            id="name"
            name="name"
            placeholder="Digite Seu name"
            label="Name *"
            icon={<UsersRound className="text-white/70" />}
          />
        </div>
        <div>
          <Input
            id="username"
            name="username"
            placeholder="Digite Seu Username"
            label="Username *"
            icon={<User className="text-white/70" />}
          />
        </div>
        <div>
          <Input
            id="email"
            name="email"
            placeholder="Digite Seu Email"
            label="Email *"
            icon={<Mail className="text-white/70" />}
          />
        </div>
        <Button onClick={function(){alert("Funciono")}}>
            Cadastrar
        </Button>
      </form>
    </section>
  );
};

export default Cadastro;
