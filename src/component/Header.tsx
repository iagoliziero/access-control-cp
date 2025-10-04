import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="header">
      <h2 className="h2"> Header Access Control </h2>
      <nav>
        <ul className="ul__nav">
          <li>
            <button onClick={() => navigate("/")}> Home </button>
          </li>
          <li>
          <button onClick={() => navigate("/login")}> Login </button>
          </li>
          <li>
          <button onClick={() => navigate("/cadastro")}> Cadastrar </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
