import '../styles/Projects.css'

const data = [
  {
    id: 1,
    picture: "twitter clone",
    title: "Twiter-Clone",
    github: "urlhere",
    demo: "",
  },
  {
    id: 2,
    picture: "url-shortner",
    title: "Url-Shortner",
    github: "urlhere",
    demo: "",
  },
  {
    id: 3,
    picture: "blog without auth",
    title: "Blog site",
    github: "urlhere",
    demo: "",
  },
  {
    id: 4,
    picture: "image search",
    title: "Image-Uploads",
    github: "urlhere",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1>My Recent Work</h1>
      <div className="projects-container">
        {data.map(({ id, picture, title, github, demo }) => {
          return (
            <article key={id} className="project-item">
              <div>
                <div>{picture}</div>
              </div>
              <h2>{title}</h2>
              <div>
                <a href={github} target="_blank" rel="noreferrer" className="btn">github</a>
                <a href={demo} target="_blank" rel="noreferrer" className="btn">demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
