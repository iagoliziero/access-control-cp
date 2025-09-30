import { Mail, User } from "lucide-react";
import Input from "../../component/Input";

const Cadastro = () => {
  return (
    <section className="section">
      <div>
        <h1 className="title">Cadastrar Usuário</h1>
      </div>
      <form className="card">
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
      </form>
    </section>
  );
};

export default Cadastro;
