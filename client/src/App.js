import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Update from './pages/update';
import Books from './pages/books';
import Add from './pages/Add';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update" element={<Update/>}/>
          
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
