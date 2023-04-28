// Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {localStorage.jwt === undefined ? (
          <Content />
        ) : (
          <>
            <Header />
            <Content />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
