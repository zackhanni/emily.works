import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Commercial",
    link: "/",
    image: "/commercial.jpeg",
  },
  {
    name: "Residential",
    link: "/",
    image: "/residential.jpeg",
  },
  {
    name: "Model unit staging",
    link: "/",
    image: "/staging.jpeg",
  },
];

export default function Portfolio() {
  return (
    <section className="container py-6">
      <div className="row">
        {projects.map((project) => {
          return (
            <div key={project.name} className="col-12 col-md-6 col-xl-4">
              <Link href={project.link} className="no-underline text-black">
                <Image
                  src={project.image}
                  width={400}
                  height={300}
                  alt={project.name}
                  className="object-cover w-[400px] h-[300px]"
                />
                <p className="text-center pt-2 pb-4 hover:underline">{`${project.name} projects`}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
