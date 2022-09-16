import "../styles/Projects.css";
import twitterProject from "../assets/twitterclone.png";
import blogProject from "../assets/blogsite.png";
import imageUpload from "../assets/imageUpload.png";
import urlShortner from "../assets/urlshortner.png";
import todoapp from "../assets/todoapp.png";
const data = [
  {
    id: 1,
    pics: twitterProject,
    title: "Twiter-Clone",
    github: "https://github.com/pjmiles/react-twitter-clone",
    demo: "https://react-twitter-clone-gamma.vercel.app",
  },
  {
    id: 2,
    pics: blogProject,
    title: "Blog site",
    github: "https://github.com/pjmiles/pjmiles-blog",
    demo: "https://pjmiles-blog.vercel.app",
  },
  {
    id: 3,
    pics: imageUpload,
    title: "Image-Uploads",
    github: "https://github.com/pjmiles/react-image-post",
    demo: "https://react-image-post.vercel.app",
  },
  {
    id: 4,
    pics: todoapp,
    title: "Todo-App",
    github: "https://github.com/pjmiles/react-todo-app",
    demo: "https://react-todo-app-six-delta.vercel.app",
  },
  {
    id: 5,
    pics: urlShortner,
    title: "Url-Shortner",
    github: "https://github.com/pjmiles/url-shortner",
    demo: "https://url-shortner-alpha-one.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects" smooth>
      <h1 className="project-header-text">My Recent Work</h1>
      <div className="projects-container">
        {data.map(({ id, pics, title, github, demo }) => {
          return (
            <article key={id} className="project-item">
              <div className="image-container hover">
                <a href={demo} rel="noreferrer" target="_blank">
                  <figure>
                    <img src={pics} alt="project" className="project-image" />
                  </figure>
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="project-span">
                  <h2 className="project-title">{title}</h2>
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
