import { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<nav className="fixed top-0 w-full bg-white shadow-md z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl nav-brand">JENNY</h1>


<div className="hidden md:flex space-x-8 font-medium text-gray-700">
{["Home", "About", "Projects", "Contact"].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className="hover:text-blue-600 transition"
>
{item}
</a>
))}
</div>


<button
className="md:hidden text-3xl text-gray-700"
onClick={() => setOpen(!open)}
>
☰
</button>
</div>


{open && (
<div className="md:hidden bg-white shadow-md p-4 space-y-3 text-center text-gray-700">
{["Home", "About", "Projects", "Contact"].map((item) => (
<a
key={item}
href={`#${item.toLowerCase()}`}
className="block py-2 hover:text-blue-600"
onClick={() => setOpen(false)}
>
{item}
</a>
))}
</div>
)}
</nav>
);
}