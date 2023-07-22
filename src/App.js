import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import items from './components/Date';


function App() {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [item, setItem] = useState(items);

  const menuItems = [...new Set(items.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = items.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio item={item} setItem={setItem} menuItems={menuItems} filterItem={filterItem} />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;