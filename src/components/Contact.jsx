import { motion } from "framer-motion";


export default function Contact() {
return (
<section id="contact" className="py-20 px-4 bg-transparent">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Me!</h2>


<motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="mailto:vinluanjenny98@gmail.com" className="inline-block px-6 py-3 btn-blue rounded-lg shadow">
Send Email
</motion.a>

</div>
</section>
);
}