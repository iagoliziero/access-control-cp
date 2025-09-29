import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div className="layout">
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