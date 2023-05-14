// Libraries
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

// Components
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {localStorage.jwt === undefined ? <></> : <Header />}
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
          <Content />
        </LoadScript>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
