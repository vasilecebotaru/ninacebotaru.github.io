import Portofoliu from "../views/Portofoliu.js";
import Contact from "../views/Contact.js";
import Recenzii from "../views/Recenzii.js";
import Servicii from "../views/Servicii.js";
import Status404 from "../views/Status404.js";
import createSwiper from "./recenzii-script.js";
import lightbox from "./portofoliu-script.js";

import "../css/styles.css";
import "../css/portofoliu.css";
import "../css/vars.css"


const mainElem = document.querySelector("#app");

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Portofoliu },
        { path: "/portofoliu", view: Portofoliu },
        { path: "/servicii", view: Servicii },
        { path: "/recenzii", view: Recenzii },
        { path: "/contact", view: Contact },
        { path: "/404", view: Status404 }
    ];

    var swiper;


    const routesMatchCurrLoc = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        }
    });

    let match = routesMatchCurrLoc.find(r => r.isMatch);

    if(!match){
        match = {
            route: routes[routes.length - 1],
            isMatch: true
        }
    }

    const view = new match.route.view();

    
    const fragment = await view.getHTML();

    mainElem.innerHTML = '';
    mainElem.appendChild(fragment);

    if(match.route.path === `/` || match.route.path === `/portofoliu` || match.route.path === `/recenzii`){

        await view.linkImages();
    }
    if(match.route.path === `/recenzii`){
        swiper = createSwiper();
    }
    if(match.route.path === `/portofoliu` || match.route.path === `/`){
        lightbox.init();
    }


    // console.log(match.route.view());
}
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    const navLinksArr = document.querySelectorAll(".nav-link");

    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);

            console.log(location.pathname);

            navLinksArr.forEach(navLink => {
                navLink.classList.remove("active");
            });

            e.target.classList.add("active");
            mainElem.classList = e.target.dataset.link;

        }
    });

    const locationMap = {
        "": "portfolio",
        "portofoliu": "portfolio",
        "servicii": "services",
        "recenzii": "reviews",
        "contact": "contact",
        "404": "notfound404"
    }

    const currentLocation = locationMap[location.pathname.slice(1)] || "notfound404";

    navLinksArr.forEach(navLink => {
        navLink.classList.remove("active");
        if(navLink.dataset.link === currentLocation){
            navLink.classList.add("active");
        }
    });

    mainElem.classList = currentLocation;

    

    router();
});