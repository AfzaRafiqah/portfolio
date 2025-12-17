import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import WorkModal from "./WorkModal";

const Work = () => {
  const sliderRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My latest work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </motion.p>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            drag="x"
            dragConstraints={{ left: -((workData.length - 4) * 280), right: 0 }}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {workData.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveProject(project)}
                className="min-w-[220px] md:min-w-[240px] lg:min-w-[260px] aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#ff751f] transition">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <WorkModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
