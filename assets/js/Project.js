let projectBox = document.getElementById('projectBox');

function showProjects() {
    fetch('assets/json/project.json')
        .then(response => response.json())
        .then(data => {
            let str = "";
            let projects = data.projects;
            for (key in projects) {
                str += `<div class="col-sm-6 col-lg-4 item"><img class="img-fluid rounded-0 border"
                            data-bss-hover-animate="pulse" src="assets/img/desk.jpg">
                        <h3 class="name">${projects[key].title}</h3>
                        <p class="description">${projects[key].discription}</p>
                        </div>`;
            }
            projectBox.innerHTML = str;
        })
        .catch(err => console.error(err));
}
// showProjects();