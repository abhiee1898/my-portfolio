"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon?: React.ElementType; 
  className?: string; 
}

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  icon: IconComponent,
  className, 
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className={`relative mx-4 ${className}`}>
      <div className="flex items-center space-x-2 cursor-pointer text-black dark:text-white hover:opacity-90">
        {IconComponent && <IconComponent className="text-xl" />}
        <p>{item}</p>
      </div>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="absolute"
        >
          <motion.div className="bg-transparent">
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className, 
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string; 
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} 
      className={`relative rounded-full border border-transparent dark:bg-gray-950 dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-8 px-8 py-6 ${className}`} 
    >
      {children}
    </nav>
  );
};
