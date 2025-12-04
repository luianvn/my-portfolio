import { motion } from "framer-motion";


export default function Hero() {
return (
<section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">
<motion.h1
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
>
Hi, I'm {" "}
<span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
Jenny
</span>
</motion.h1>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.3, duration: 0.7 }}
className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 text-gray-700 px-4"
>
I build clean, responsive interfaces with React and Tailwind — focused on
performance, accessibility, and delightful micro-interactions.
</motion.p>


<motion.a
whileHover={{ scale: 1.04 }}
whileTap={{ scale: 0.98 }}
href="#projects"
className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-md"
>
View my Works!
</motion.a>
</section>
);
}