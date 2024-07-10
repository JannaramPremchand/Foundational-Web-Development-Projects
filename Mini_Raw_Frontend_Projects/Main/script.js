$(document).ready(function() {
  AOS.init();

  $.getJSON('projects.json', function(data) {
    const projectsSection = $('#projects-section');

    for (const category in data.projects) {
      const categoryElement = $('<div class="category my-4"></div>');
      const categoryTitle = $(`<h3 class="text-center">${category}</h3>`);
      categoryElement.append(categoryTitle);

      const projectsContainer = $('<div class="row justify-content-center"></div>');

      data.projects[category].forEach(project => {
        const projectElement = $(`
          <div class="col-md-4 mb-4" data-aos="fade-up">
            <div class="card h-100">
              <a href="${project.link}" target="_blank" class="card-link">
                <img src="${project.thumbnail}" class="card-img-top" alt="${project.title}">
              </a>
              <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <div class="text-center mt-2">
                  <a href="${project.link}" target="_blank" class="btn btn-primary mr-2">Preview</a>
                  <a href="${project.github_link}" target="_blank" class="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        `);
        projectsContainer.append(projectElement);
      });

      categoryElement.append(projectsContainer);
      projectsSection.append(categoryElement);
    }
  }).fail(function() {
    console.error('Error fetching the projects.');
  });
});
