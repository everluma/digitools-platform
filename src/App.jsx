import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Stats from './components/Stats'
import MainSection from "./components/MainSection";
import Steps from "./components/Steps";
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    <MainSection cart={cart} setCart={setCart}/>
    <Steps/>
    <Pricing />
    <Footer />

    <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>
    </>
  )
}

export default App
