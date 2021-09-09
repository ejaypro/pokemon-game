import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

import BgImage1 from './assets/bg1.jpg';
import BgImage2 from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header
        title="Header title"
        descr="Header description. Pokemon Game"
      />
      <Layout
        title="First Layout"
        descr="First layout description"
        urlBg={BgImage1}   
      />
      <Layout
        title="Second Layout"
        descr="Second layout description"
        colorBg="#F2F2F2"
      />
      <Layout
        title="Third Layout"
        descr="Third layout description"
        urlBg={BgImage2}
      />
      <Footer />
    </>
  );
}

export default App;
