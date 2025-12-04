import { motion } from "framer-motion";


export default function About() {
return (
<section id="about" className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-3xl sm:text-4xl font-bold mb-6"
>
About Me
</motion.h2>


<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
className="p-6 sm:p-8 bg-white shadow-md rounded-2xl"
>
<p className="text-gray-700 text-base sm:text-lg leading-relaxed">
I am a frontend developer who loves crafting clean, accessible,
and delightful user interfaces.
</p>
</motion.div>
</div>
</section>
);
}