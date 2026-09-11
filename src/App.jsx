import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Saludo from './Saludo'
import { motion } from 'framer-motion';


function App() {
  const [count, setCount] = useState(0)
  const [contador, setContador] = useState(0);
  

  return (
    <>
    
    
      <section id="center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="min-h-screen bg-red-200 flex flex-col items-center justify-center gap-6 p-6"> 
          
          <Saludo nombre="Antonella" /> 
        <p className="text-blue-400 text-lg">Estoy aprendiendo React 🚀</p> 
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setContador(contador + 1)} className="bg-black-400 text-yellow px-6 py-3 rounded-lg hover:bg-red-900"> Clics: {contador} 
          </motion.button> 
        </motion.div>
      
      </section>

      
    </>
  )
}

export default App
