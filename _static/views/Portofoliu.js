import abstractView from "./abstractView.js";

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
            <button class="btn"><a href="/contact">Începe</a></button>
        </div>
        <div class="social-container">
            <a href="#" class="social-link"><img src="static/img/icon-facebook.png" alt="link spre facebook"></a>
            <a href="#" class="social-link"><img src="static/img/icon-instagram.png" alt="link spre instagram"></a>
            <a href="#" class="social-link"><img src="static/img/icon-tiktok.png" alt="link spre tiktok"></a>
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
        <div class="diploma-container">
            <a href="/static/img2/img-diploma1.png" data-lightbox="img-diploma1"><img src="/static/img/img-diploma1-small.png" alt="diploma coaching"></a>
            <a href="/static/img2/img-diploma2.png" data-lightbox="img-diploma2"><img src="/static/img/img-diploma2-small.png" alt="diploma de doctor"></a>
            <a href="/static/img2/img-diploma3.png" data-lightbox="img-diploma3"><img src="/static/img/img-diploma3-small.png" alt="atestat de conferentiar universitar"></a>
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
}