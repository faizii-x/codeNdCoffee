import { BrowserRouter } from "react-router-dom";
import PrimaryRoutes from "./primaryRoutes";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimaryRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
