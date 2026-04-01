import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { useState } from 'react';

import './App.css'


function App() {



  const [cart, setCart] = useState([])


  
  return (

    
    <>
    <Navbar cartCount={cart.length} />
    
     <div>
      {/*Banner */}

      <Banner />
    </div>

    <Stats/>
    <MainSection />
    <Steps/>
    <Pricing />
    <Footer />
    </>
  )
}

export default App
