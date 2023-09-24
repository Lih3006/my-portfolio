/* import Home from './pages/Home'; */
import About from './pages/About';
import Projects from './pages/Projects';
import Background from './components/background';
import Experience from './pages/Experience';
import { GlobalStyles } from './styles/global';
import Footer from './components/Footer';
import Start from './pages/Start';
import ScrollPagesComponent from './components/ScrollPagesComponent';

function App() {
  return (
    <Background>
      <GlobalStyles />
      <Start />
      <ScrollPagesComponent>
        {/*   <Home /> */}
        <About />
        <Projects />
        <Experience />
      </ScrollPagesComponent>
      <Footer />
    </Background>
  );
}

export default App;
