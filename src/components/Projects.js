import "../styles/Projects.css";
import twitterProject from "../assets/twitterclone.png";
import blogProject from "../assets/blogsite.png";
import imageUpload from "../assets/imageUpload.png";
// import urlShortner from "../assets/urlshortner.png";
import todoapp from "../assets/todoapp.png";
const data = [
  {
    id: 1,
    pics: twitterProject,
    title: "Twiter-Clone",
    github: "https://github.com/pjmiles/react-twitter-clone",
    demo: "https://react-twitter-clone-gamma.vercel.app",
    desc: "A Twitter clone where user can signup, login and tweet.",
  },
  {
    id: 2,
    pics: blogProject,
    title: "Blog site",
    github: "https://github.com/pjmiles/pjmiles-blog",
    demo: "https://pjmiles-blog.vercel.app",
    desc: "A Site where User can post blog and comment.",
  },
  {
    id: 3,
    pics: imageUpload,
    title: "Image-Uploads",
    github: "https://github.com/pjmiles/react-image-post",
    demo: "https://react-image-post.vercel.app",
    desc: "Site where user can upload image file, search and delete",
  },
  {
    id: 4,
    pics: todoapp,
    title: "Todo-App",
    github: "https://github.com/pjmiles/react-todo-app",
    demo: "https://react-todo-app-six-delta.vercel.app",
    desc: "A todo App that can add tasks and delete it on completed",
  },
  // {
  //   id: 5,
  //   pics: urlShortner,
  //   title: "Url-Shortner",
  //   github: "https://github.com/pjmiles/url-shortner",
  //   demo: "https://url-shortner-alpha-one.vercel.app/",
  //   desc: "A site that should bring a shortened URL when authenticated. This site not compeleted.",
  // },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects" smooth>
      <h1 className="project-header-text">Some of my recent projects</h1>
      <div className="projects-container">
        {data.map(({ id, pics, title, github, demo, desc }) => {
          return (
            <article key={id} className="project-container">
              <figure className="project-card">
                <div className="image-container hover">
                  <a href={demo} rel="noreferrer" target="_blank">
                    <img src={pics} alt={title} className="project-image" />
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-span"
                  >
                    <h2 className="project-title">{title}</h2>
                  </a>
                  <span>
                    <p className="project-details">{desc}</p>
                  </span>
                </div>
                {/* <span className="project-details">{desc}</span> */}
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
