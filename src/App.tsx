import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Background from '../src/components/background';
import Experience from '../src/pages/Experience';
import { GlobalStyles } from '../src/styles/global';
import Footer from '../src/components/Footer'; /* import Start from '../src/pages/Start'; */
import ScrollPagesComponent from '../src/components/ScrollPagesComponent';
import RoutesMain from './routes';

function App() {
  return (
    <Background>
      <RoutesMain />
      <GlobalStyles />
      <ScrollPagesComponent>
        <About />
        <Projects />
        <Experience />
      </ScrollPagesComponent>
      <Footer />
    </Background>
  );
}

export default App;
