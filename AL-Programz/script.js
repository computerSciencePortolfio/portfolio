fetch("programs.json")
.then(response => response.json() )
.then(data => {
    data.forEach(dat => {
        document.getElementById("program-list").innerHTML += `
        <div data-name="${dat.title}" class="program ${dat.c}">
            <p class="program-head">${dat.title}</p>
            <img src="${dat.img}">
            <p class="desc">${dat.desc}</p>
            <a target="_blank" href="${dat.url}"><button class="view-btn">View Program <i class="fa fa-arrow-right"></i></button></a>
        </div>
        `
        const programs = Array.from(document.getElementsByClassName("program"));
        document.getElementById("search").addEventListener("input", () => {
        let regex = new RegExp(document.getElementById("search").value.replace(/\s/g, ""), "i");
        programs.forEach(program => {
           if(regex.test(program.dataset.name.replace(/\s/g, ""))) {
                program.style.display = "flex";
           }  else {
                program.style.display = "none";
           }
        });
    })
    })
})