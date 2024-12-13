import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <MainRouter/>
    </BrowserRouter>
  )
}

export default App
