import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
        <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>

        <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Welcome to my web development portfolio! Explore my latest projects.
        </p>

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
                className="
                  min-w-[260px]
                  md:min-w-[280px]
                  lg:min-w-[300px]
                  aspect-square
                  bg-cover bg-center
                  rounded-lg
                  relative
                  cursor-pointer
                  group
                "
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
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
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;
