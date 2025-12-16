import Image from "next/image";
import { assets, workData } from "@/assets/assets";

const works = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/works/work1.jpg",
    description: "Personal portfolio built with Next.js",
  },
  {
    id: 2,
    title: "E-commerce App",
    image: "/works/work2.jpg",
    description: "Online store with payment integration",
  },
  {
    id: 3,
    title: "Dashboard UI",
    image: "/works/work3.jpg",
    description: "Admin dashboard design",
  },
];

export default function WorkPage() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-10">My Work</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {workData.map((project, index) => (
            <div
              key={project.id}
              className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
