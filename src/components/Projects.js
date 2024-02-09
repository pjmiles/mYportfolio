import "../styles/Projects.css";
import movieSearch from "../assets/movieSearch.png";
import behiveERP from "../assets/behiveERP.jpg";
import hrmApp from "../assets/hrmApp.jpg"
import crmApp from "../assets/crmApp.jpg"
import { ExternalLink } from "react-external-link";

const data = [
  {
    id: 0,
    pics: behiveERP,
    title: "Custom ERP Application",
    github: "https://github.com/Gurugeeksroyalty-ltd",
    live: "https://www.begnh.com/",
    desc: "An ERP application that manages business operations.",
  },
  {
    id: 1,
    pics: hrmApp,
    title: "HRM Application",
    github: "https://github.com/Gurugeeksroyalty-ltd",
    live: "",
    desc: "A Saas application that manages human resource management for organization, to be realeased soon.",
  },
  {
    id: 2,
    pics: crmApp,
    title: "CRM Application",
    github: "https://github.com/Gurugeeksroyalty-ltd",
    live: "",
    desc: "A Saas application with customer focus, to be realeased soon.",
  },
  {
    id: 3,
    pics: movieSearch,
    title: "Movie Search",
    github: "https://github.com/pjmiles/movie-search",
    live: "https://movie-search-app-iota.vercel.app/",
    desc: "A movie search application",
  },
  //
  // {
  //   id: 1,
  //   pics: twitterProject,
  //   title: "Twiter-Clone",
  //   github: "https://github.com/pjmiles/react-twitter-clone",
  //   live: "https://react-twitter-clone-gamma.vercel.app",
  //   desc: "A Twitter clone where user can signup, login and tweet.",
  // },
  // {
  //   id: 2,
  //   pics: blogProject,
  //   title: "Blog site",
  //   github: "https://github.com/pjmiles/pjmiles-blog",
  //   live: "https://pjmiles-blog.vercel.app",
  //   desc: "A Site where User can post blog and comment.",
  // },
  // {
  //   id: 3,
  //   pics: imageUpload,
  //   title: "Image-Uploads",
  //   github: "https://github.com/pjmiles/react-image-post",
  //   live: "https://react-image-post.vercel.app",
  //   desc: "Site where user can upload image file, search and delete",
  // },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects" smooth>
      <h1 className="project-header-text">Some Projects I Worked On</h1>
      <div className="projects-container">
        {data.map(({ id, pics, title, github, live, desc }) => {
          return (
            <article key={id} className="project-container">
              <figure className="project-card">
                <div className="image-container hover">
                  <ExternalLink href={live} rel="noreferrer" target="_blank">
                    <img src={pics} alt={title} className="project-image" />
                  </ExternalLink>
                  <ExternalLink
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-span"
                  >
                    <h2 className="project-title">{title}</h2>
                  </ExternalLink>
                  <span>
                    <p className="project-details">{desc}</p>
                  </span>
                </div>
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
