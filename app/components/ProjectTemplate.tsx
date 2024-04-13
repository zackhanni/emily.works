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
      <section>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.firm}</p>
        <p>{props.client}</p>
      </section>
    </main>
  );
}
