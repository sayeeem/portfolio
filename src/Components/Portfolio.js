import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} class="card">
          <div class="card__thumb">
            <a href={projects.url} title={projects.title} target="_blank">
              <img alt={projects.title} src={projectImage} />
            </a>
          </div>

          <div class="card__body">
            <div class="card__category">{projects.languages}</div>
            <h2 class="card__title">{projects.title}</h2>
            <div class="card__subtitle">{projects.summary}</div>
            <p class="card__description">{projects.description}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="card__container">{projects}</div>
    </section>
  );
};

export default Portfolio;
