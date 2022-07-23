let projectBox = document.getElementById('projectBox');

function showProjects() {
    fetch('assets/json/project.json')
        .then(response => response.json())
        .then(data => {
            let str = "";
            let projects = data.projects;
            for (key in projects) {
                str += ` 
                            <div class="col-sm-6 col-lg-4 item">
                                <img class="imgThumbnail img-fluid rounded-0 border" data-bss-hover-animate="pulse"
                                    src="${projects[key].imgurl}">
                                <h3 class="name">${projects[key].title}</h3>
                                <p class="description">${projects[key].discription}</p>
                                <a href="/" target="_blank"><button type="button" class="readBtn btn btn-outline-primary">Read
                                more</button></a>
                            </div>
                        `;
            }
            projectBox.innerHTML = str;
        })
        .catch(err => console.error(err));
}
// showProjects();