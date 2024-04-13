import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center bg-[#f7f4ee] py-8">
      <div className="container">
        <div className="row">
          <a
            href="mailto:stein.emilyj@gmail.com"
            className="no-underline hover:underline text-black col-12 col-md-4 "
          >
            <p className="mb-md-0">stein.emilyj@gmail.com</p>
          </a>
          <a
            href="tel:1234567890"
            className="no-underline hover:underline text-black col-12 col-md-4"
          >
            <p className="mb-md-0">123 456 7890</p>
          </a>
          <p className="col-12 col-md-4 mb-md-0 ">Philadelphia, PA</p>
        </div>
      </div>
    </footer>
  );
}
