import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div className="w-full h-screen p-5 items-center flex flex-col justify-between bg-[url('public/background-forest.png')] bg-cover bg-center bg-no-repeat bg-black/25 bg-blend-multiply">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
         <Footer />
      </footer>
    </div>
  );
}