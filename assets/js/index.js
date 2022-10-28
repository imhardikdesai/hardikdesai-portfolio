let homeProjects = document.getElementById('homeProjects');
function showHomePageProjects() {
    fetch('assets/json/project.json')
        .then(response => response.json())
        .then(data => {
            let projects = data.projects;
            let str = ""
            for (let i = 0; i < 4; i++) {
                str += `
                            <div class="col-sm-6 item">
                                <div class="row homepageProjects">
                                    <div class="col-md-12 col-lg-5 d-flex justify-content-center align-content-center">
                                        <a href="#">
                                            <img class="imgThumbnail img-fluid" data-aos="fade" data-aos-duration="1700" src="${projects[i].imgurl}" />
                                        </a>
                                    </div>
                                    <div class="col text-center">
                                        <h3 class="name">${projects[i].title}</h3>
                                        <p class="description">${projects[i].description}</p>
                                        <a href="${projects[i].liveDemoLink}" target="_blank">
                                            <button type="button" class="readBtn btn btn-outline-primary btn-sm">Live Demo</button>
                                        </a>
                                        <a href="${projects[i].sourceLink}" target="_blank">
                                            <button type="button" class="readBtn btn btn-outline-primary btn-sm">Source Code</button>
                                        </a>
                                    </div>
                                </div>
                             </div>
                       `;
            }
            homeProjects.innerHTML = str;
        })
        .catch(err => console.error(err));
}
showHomePageProjects();