import "../styles/Projects.css";
import twitterProject from "../images/twitterclone.png";
import blogProject from "../images/blogsite.png";
import imageUpload from "../images/imageUpload.png";
import urlShortner from "../images/urlshortner.png";
import todoapp from "../images/todoapp.png";
const data = [
  {
    id: 1,
    pics: twitterProject,
    title: "Twiter-Clone",
    github: "",
    demo: "https://react-twitter-clone-gamma.vercel.app",
  },
  {
    id: 2,
    pics: blogProject,
    title: "Blog site",
    github: "urlhere",
    demo: "https://pjmiles-blog.vercel.app",
  },
  {
    id: 3,
    pics: imageUpload,
    title: "Image-Uploads",
    github: "urlhere",
    demo: "https://react-image-post.vercel.app",
  },
  {
    id: 4,
    pics: todoapp,
    title: "Todo-App",
    github: "urlhere",
    demo: "https://react-image-post.vercel.app",
  },
  {
    id: 5,
    pics: urlShortner,
    title: "Url-Shortner",
    github: "urlhere",
    demo: "https://react-todo-app-six-delta.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="project-header-text">My Recent Work</h1>
      <div className="projects-container">
        {data.map(({ id, pics, title, github, demo }) => {
          return (
            <article key={id} className="project-item">
              <div className="image-container hover">
                <a href={demo} rel="noreferrer" target="_blank">
                  <figure><img src={pics} alt="project" className="project-image" /></figure>
                <span>{title}</span>
                </a>
              </div>
              <div>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
