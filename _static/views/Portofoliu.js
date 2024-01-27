import abstractView from "./abstractView.js";
import dip1 from "../img/img-diploma1.png";
import dip2 from "../img/img-diploma2.png";
import dip3 from "../img/img-diploma3.png";
import dip1small from "../img/img-diploma1-small.png";
import dip2small from "../img/img-diploma2-small.png";
import dip3small from "../img/img-diploma3-small.png";
import iconFb from "../img/icon-facebook.png";
import iconIg from "../img/icon-instagram.png";
import iconTt from "../img/icon-tiktok.png"

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Portofoliu");
    }

    async getHTML() {

        const fragment = document.createDocumentFragment();
        const htmlContent = `<section class="portofoliu-section1">
        <h1 class="hero-title">Nina Cebotaru</h1>
        <div class="wrapper">
            <ul class="hero-subtitle">
                <li>Life Coaching</li>
                <li>Coaching de:</li>
                <li>Carieră</li>
                <li>Relaționare</li>
                <li>Echipă</li>
            </ul>
            <button class="btn"><a href="/contact" data-link="contact">Începe</a></button>
        </div>
        <div class="social-container">
            <a href="#" class="social-link"><img id="social-img-fb" alt="link spre facebook"></a>
            <a href="#" class="social-link"><img id="social-img-ig" alt="link spre instagram"></a>
            <a href="#" class="social-link"><img id="social-img-tt" alt="link spre tiktok"></a>
        </div>
    </section>
    <section class="portofoliu-section2">
        <div class="wrapper">
            <p>
                Doctor în stiințe ale educației, coach certificat internațional, peste <span class="emphasis">15 ani</span> de experiență în domeniul educației și peste <span class="emphasis">500</span> de ședințe de coaching.
            </p>
        </div>
    </section>
    <section class="portofoliu-section3">
        <div class="wrapper">
            <h3 class="about-me-title">Valori personale</h3>
            <p class="about-me-text">libertate, echilibru, dezvoltare, înțelegere, satisfacție, sănătate</p>
        </div>
        <div class="wrapper">
            <h3 class="about-me-title">Misiune personală</h3>
            <p class="about-me-text">ofer ghidare și suport în procesul <em>tău</em> de regăsire sau transformare, folosind resursele <em>tale</em> existente și dobândind unele noi, urmând planul stabilit de <em>tine</em>, conform valorilor <em>tale</em>, personale.</p>
        </div>
        <div class="wrapper">
            <h3 class="about-me-title">Beneficii</h3>
            <p class="about-me-text">explorarea zonelor în care dorești schimbare; deblocarea/descoperirea resurselor interioare; setarea limitelor personale; stabilirea unui plan de acțiuni; claritate în luarea deciziilor; dezvoltare personală si profesională.</p>
        </div>
    </section>
    <section class="portofoliu-section4">
        <h2 class="subtitle">Diplome</h2>
        <div class="pswp-gallery diploma-container" id="diploma-gallery">
            <a id="img-diploma1" data-pswp-width="2000" data-pswp-height="1414" target="_blank">
                <img id="img-diploma1-small" alt="diploma coaching">
            </a>
            <a id="img-diploma2" data-pswp-width="2400" data-pswp-height="1687" target="_blank">
                <img id="img-diploma2-small" alt="diploma de doctor">
            </a>
            <a id="img-diploma3" data-pswp-width="2400" data-pswp-height="1687" target="_blank">
                <img id="img-diploma3-small" alt="atestat de conferentiar universitar">
            </a>
        </div>
    </section>`;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Append the child nodes of the temporary container to the DocumentFragment
        while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
        }

        return fragment;
    }

    async linkImages(){
        const dip1Elem = document.querySelector(`#img-diploma1`);       //asta e <a>
        const dip2Elem = document.querySelector(`#img-diploma2`);
        const dip3Elem = document.querySelector(`#img-diploma3`);
        const dip1SmallElem = document.querySelector(`#img-diploma1-small`);        //asta e <img>
        const dip2SmallElem = document.querySelector(`#img-diploma2-small`);
        const dip3SmallElem = document.querySelector(`#img-diploma3-small`);
        const imgElemFb = document.querySelector(`#social-img-fb`);
        const imgElemIg = document.querySelector(`#social-img-ig`);
        const imgElemTt = document.querySelector(`#social-img-tt`);

        dip1Elem.href = dip1;
        dip2Elem.href = dip2;
        dip3Elem.href = dip3;
        dip1SmallElem.src = dip1small;
        dip2SmallElem.src = dip2small;
        dip3SmallElem.src = dip3small;
        imgElemFb.src = iconFb;
        imgElemIg.src = iconIg;
        imgElemTt.src = iconTt;
    }
}