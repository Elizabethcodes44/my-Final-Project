import { motion } from "framer-motion";
import {  useNavigate, useLocation, Link } from "react-router-dom"; 

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      stagggerDirection: -1,
    },
  },
};

const listVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export default function Links() {
  const navigate = useNavigate(); 
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pregnancy Calculator", path: "/calculator" },
    { name: "Health tips", path: "/tips" },
    { name: "Health tracker", path: "/tracker" },
    { name: "Appointment Planner", path: "/planner" },
    { name: "Courses", path: "/courses" },
    
  ];
  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <motion.div className="Links" variants={variants}>
      {links.map((item) => (
        <motion.div key={item.name} variants={listVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
           <div onClick={() => handleLinkClick(item.path)} className={location.pathname === item.path ? "active" : ""}>
            {item.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
