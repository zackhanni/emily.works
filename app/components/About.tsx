import Image from "next/image";

export default function About() {
  return (
    <section className="bg-slate-400 py-8 text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <Image
              src="/emily.jpg"
              width={250}
              height={250}
              alt="Emily Hanni portrait"
              className="object-cover w-full h-[300px]"
            />
          </div>
          <div className="col-12 col-md-6">
            <p>Hello!</p>
            <p>
              I&apos;m Emily - a detail-oriented FF+E Specialist in the
              commercial, hospitality, and residential interior design
              industries. Highly skilled at B2B communication and coordination
              with high-profile clients and diverse teams as a front-facing
              representative of design firms. Adept at managing project design
              development, budgeting, FF+E specification, procurement, and
              logistics. Seeking to contribute expertise and creativity to a
              dynamic, collaborative organization.
            </p>
            <a href="/" className="text-white no-underline">
              <p className="hover:underline">Download Resume</p>
            </a>
          </div>
        </div>
        <div className="row">
          <p>this is row 2</p>
        </div>
      </div>
    </section>
  );
}
