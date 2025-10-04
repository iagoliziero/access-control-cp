import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { useState } from "react";
import DropUpMenu from "./component/DropUpMenu";
function App() {
  const [isLogged] = useState<string>(localStorage.getItem("loggedIn") || "false");

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  
  return (
    <div className="w-full h-screen p-5 items-center flex flex-col justify-between bg-[url('background-forest.png')] bg-cover bg-center bg-no-repeat bg-black/25 bg-blend-multiply">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        {isOpenMenu &&
            <DropUpMenu />
        }

        {isLogged && (
          <button
            onClick={openMenu}
            className="btn__app"
          >
            Ver dados
          </button>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
