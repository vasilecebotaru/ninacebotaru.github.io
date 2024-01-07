import Portofoliu from "../views/Portofoliu.js";
import Contact from "../views/Contact.js";
import Recenzii from "../views/Recenzii.js";
import Servicii from "../views/Servicii.js";
import Status404 from "../views/Status404.js";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Portofoliu },
        { path: "/servicii", view: Servicii },
        { path: "/recenzii", view: Recenzii },
        { path: "/contact", view: Contact },
        { path: "/404", view: Status404 }
    ];


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

    const appDiv = document.querySelector("#app");
    const fragment = await view.getHTML();

     appDiv.innerHTML = '';
     appDiv.appendChild(fragment);

    // console.log(match.route.view());
}
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);

            const navLinksArr = document.querySelectorAll(".nav-link");
            navLinksArr.forEach(navLink => {
                navLink.classList.remove("active");
            });

            e.target.classList.add("active");

        }
    })

    router();
});