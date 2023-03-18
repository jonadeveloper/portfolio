let menuVisible= false;
//fn que oculta o muestra el menu
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = ""
        menuVisible = false
    }else{
        document.getElementById("nav").classList = "responsive"
        menuVisible = true
    }
}

function select(){
    document.getElementById("nav").classList = ""
    menuVisible = false
}


function efectSkills(){
    var skills = document.getElementById("skills");
    var distSkills = window.innerHeight - skills.getBoundingClientRect().top
    if(distSkills >= 300){
        let skills = document.getElementsByClassName("progress")
        skills[0].classList.add("htmlcss")
        skills[1].classList.add("wordpress")
        skills[2].classList.add("javascript")
        skills[3].classList.add("react")
        skills[4].classList.add("redux")
        skills[5].classList.add("node")
        skills[6].classList.add("postgresql")
        skills[7].classList.add("sequelize")
        skills[8].classList.add("comunicacion")
        skills[9].classList.add("trabajoenequipo")
        skills[10].classList.add("creatividad")
        skills[11].classList.add("dedicacion")
        skills[12].classList.add("pensamientocritico")
        skills[13].classList.add("responsabilidad")
        skills[14].classList.add("empatia")
        skills[15].classList.add("scrum")
    }
}

window.onscroll = function(){
    efectSkills()
}

function downloadPDF(url, name) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}  