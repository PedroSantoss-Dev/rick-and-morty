import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";
import {  Logotipo } from "./shared/components/Logotipo/index";
import { Navbar } from "./shared/components/Navbar/index";
function App() {
  return (
    <BrowserRouter>
      <Logotipo/>
      <Navbar/>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
