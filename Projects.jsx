import { motion } from "framer-motion";


export default function Projects() {
    const projects = [
        {
            title: "Simple Calculator UI",
            desc: "A clean calculator interface built using HTML & CSS Flexbox.",
            link: "/projects/calculator/calcu.html"
        },
        {
            title: "Loop Activity (JS)",
            desc: "A JavaScript exercise demonstrating loops such as sum, factorial, odd, and even number generation. Includes clean UI and dynamic DOM output.",
            link: "/projects/loop/index.html"
        },
        {
            title: "Employee Management System",
            desc: "A JavaScript activity demonstrating arrays & objects by managing a list of names and employee records with dynamic table updates.",
            link: "/projects/array/index.html"
        },
        {
            title: "React To-Do List System",
            desc: "A polished task management system using React, Axios, TailwindCSS, and modal components. Users can add, view, and manage tasks through a clean interface.",
            link: "https://to-do-client.netlify.app/"
        }
    ];



    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition cursor-pointer"
                            onClick={() => p.link && window.open(p.link, "_blank")}
                        >
                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-600">{p.desc}</p>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
}