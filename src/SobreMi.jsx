import { motion } from 'framer-motion';
function SobreMi() { return ( 
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} 
        className="max-w-2xl text-center p-6" > 
        <h2 className="text-2xl font-bold mb-2">Sobre mí</h2> 
        <p className="text-green-400">
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
            He decidido empezar desde cero aprender y capacitarme en estos temas de desarrollo y diseño web.
        </p> 
        </motion.section> ); } export default SobreMi;