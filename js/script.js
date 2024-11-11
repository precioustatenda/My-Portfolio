//Array of projects 
const projects = [
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},

{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
{
title: "Lorem",
description: "A showcase of Tonde's Lorem Ipsum web-dev project.",
url: ""
},
];

//function to load projects
function loadProjects() {
const projectList =document.getElementById("project-list");

projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
    `;

    projectList.appendChild(projectCard);
});
}

//Load projects when DOM is fully Loaded
document.addEventListener("DOMContentLoaded", loadProjects);