'use stric'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbar_height = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbar_height){
        navbar.classList.add('navbar__drak');
    }
    else{
        navbar.classList.remove('navbar__drak');
    }
})

// Handle scrolling when tapping on the navbar menu

const navbar_menu = document.querySelector('.navbar__menu');
navbar_menu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    else{
        navbar_menu.classList.remove('open');
        scrollInto(link);
    }
});

const contact_button = document.querySelector('.home__contact');
contact_button.addEventListener('click',(event)=>{
    scrollInto('#contact');
});

//Make home slowly transparent
const home = document.querySelector('.home__container');
const home_height = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / home_height;
})


// show arrow up button

const arrow_up = document.querySelector(".arrow_up");
document.addEventListener('scroll', ()=>{
    if(window.scrollY > home_height/2){
        arrow_up.classList.add('visible');
    }
    else{
        console.log('222');
        arrow_up.classList.remove('visible');
    }
})

// arrwo up
arrow_up.addEventListener('click', ()=>{
    scrollInto('#home');
})

function scrollInto(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

// projects

const work_btn_container = document.querySelector('.work__categories');
const project_container = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project');

work_btn_container.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // remove selection from the pre items
    const active = document.querySelector('.category__btn.selected')
    active.classList.add('selected');

    project_container.classList.add('anim_out');
    
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter == '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        })
        project_container.classList.remove('anim_out');
    },300)
    // projects.forEach((project)=>{
    //     console.log(project);
    // })
})

const navbar_toggle_btn = document.querySelector('.navbar__toggle__btn');
navbar_toggle_btn.addEventListener('click',()=>{
    navbar_menu.classList.toggle('open');
    console.log("WWW");
})
