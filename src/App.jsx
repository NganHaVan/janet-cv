import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";
import SocialMediaLinks from "./Components/SocialMediaLinks";
import Work from "./Components/Work";
function App() {
  return (
    <>
      <div className="bg-primary">
        <Nav />
        <Home />
        <SocialMediaLinks />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
