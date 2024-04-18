import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Configuration from "./pages/Configuration";
import Error_logs from "./pages/Error_logs";
import Integration_logs from "./pages/Integration_logs";
import Home from "./pages/Home";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/errors" element={<Error_logs />}/>
          <Route path="/integrations" element={<Integration_logs />}/>
          <Route path="/configuration" element={<Configuration />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>

  ) 
  
}

export default App