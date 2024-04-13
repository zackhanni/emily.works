import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-slate-400 py-6">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Image
              src="/emily.jpg"
              width={250}
              height={250}
              alt="Emily Hanni portrait"
              className="object-cover w-[250px] h-[250px]"
            />
          </div>
          <div className="col-12 col-md-6 bg-gray-600 text-white rounded-2xl p-4">
            <h2>Emily Hanni</h2>
            <p>FF+E Specialist, Interior design professional</p>
            <p>
              Detail-oriented FF+E Specialist in the commercial, hospitality,
              and residential interior design industries. Highly skilled at B2B
              communication and coordination with high-profile clients and
              diverse teams as a front-facing representative of design firms.
            </p>
            <p>Hire me!</p>
            <a href="/" className="text-white no-underline">
              <p className="hover:underline">Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
