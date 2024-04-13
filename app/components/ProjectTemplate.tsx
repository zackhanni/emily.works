import React from "react";

interface ProjectTemplateProps {
  title: string;
  description: string;
  firm: string;
  client: string;
}

export default function ProjectTemplate(props: ProjectTemplateProps) {
  return (
    <main>
      <section className="container py-8">
        <div className="row text-center">
          <h2 className="pb-8">{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.firm}</p>
          <p>{props.client}</p>
        </div>
      </section>
    </main>
  );
}
