import { Outlet } from "react-router";
import "./App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="bg-slate-100">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
