import React from "react";
import { motion } from "motion/react";

const WorkModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 max-w-2xl w-full rounded-xl overflow-hidden"
      >
        {/* Image */}
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.bgImage})` }}
        />

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold dark:text-white">
              {project.title}
            </h2>
            <span className="text-black dark:text-white">-</span>
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 my-4 leading-snug">
            {project.summary}
          </p>

          {/* Optional extra fields */}
          {project.tech && (
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
              <strong className="dark:text-white">Technology:</strong>{" "}
              {project.tech}
            </p>
          )}

          <div className="flex justify-between items-center">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                View Project
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 border rounded-full hover:bg-black hover:text-white transition"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkModal;
