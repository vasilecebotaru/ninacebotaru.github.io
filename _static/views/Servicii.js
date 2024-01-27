import abstractView from "./abstractView.js";
import '../css/servicii.css'

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Servicii");
    }

    async getHTML() {
        const fragment = document.createDocumentFragment();
        const htmlContent = `<section class="service-section1">
        <div class="service-card">
            <h2 class="card-title">Life coaching</h2>
            <p class="card-text">în timpul sesiunilor de life coaching vom analiza împreună scenariile din viața ta într-o nouă lumină, astfel incât să poți aborda lucrurile dintr-o perspectivă diferită și să găsești soluții la provocările cu care te confrunți.</p>
            <div class="price-wrapper">
                <h3 class="price">50<span class="small">€</span></h3>
                <p>1 sesiune - 50 minute</p>
            </div>
            <div class="price-wrapper-flex">
                <div class="price-wrapper">
                    <h3 class="price">235<span class="small">€</span></h3>
                    <p class="crossed-out">250<span class="small">€</span></p>
                    <p>5 sesiuni</p>
                </div>
                <div class="price-wrapper">
                    <h3 class="price">459<span class="small">€</span></h3>
                    <p class="crossed-out">500<span class="small">€</span></p>
                    <p>10 sesiuni</p>
                </div>
            </div>
            <button class="btn"><a href="/contact" data-link="contact">Înscrie-te</a></button>
        </div>
    </section>
    <section class="service-section2">
        <div class="service-card">
            <h2 class="card-title">Coaching de cariera</h2>
            <p class="card-text">poți opta pentru acest tip de coaching dacă îți dorești sau ai decis să faci o schimbare în cariera ta, vrei să obții un echilibru între carieră și viața personală sau pur și simplu vrei ghidare și suport în procesul de descoperire a pasiunilor tale și a profesiei potrivite.</p>
            <div class="price-wrapper">
                <h3 class="price">50<span class="small">€</span></h3>
                <p>1 sesiune - 50 minute</p>
            </div>
            <div class="price-wrapper-flex">
                <div class="price-wrapper">
                    <h3 class="price">235<span class="small">€</span></h3>
                    <p class="crossed-out">250<span class="small">€</span></p>
                    <p>5 sesiuni</p>
                </div>
                <div class="price-wrapper">
                    <h3 class="price">459<span class="small">€</span></h3>
                    <p class="crossed-out">500<span class="small">€</span></p>
                    <p>10 sesiuni</p>
                </div>
            </div>
            <button class="btn"><a href="/contact" data-link="contact">Înscrie-te</a></button>
        </div>
    </section>
    <section class="service-section3">
        <div class="service-card">
            <h2 class="card-title">Coaching de relaționare</h2>
            <p class="card-text">te pot ajuta să găsești echilibru în relațiile tale și să îndepărtezi credințele care îți sabotează bucuria și împlinirea; gestionarea conflictelor și a perioadelor încărcate emoțional.</p>
            <div class="price-wrapper">
                <h3 class="price">50<span class="small">€</span></h3>
                <p>1 sesiune - 50 minute</p>
            </div>
            <div class="price-wrapper-flex">
                <div class="price-wrapper">
                    <h3 class="price">235<span class="small">€</span></h3>
                    <p class="crossed-out">250<span class="small">€</span></p>
                    <p>5 sesiuni</p>
                </div>
                <div class="price-wrapper">
                    <h3 class="price">459<span class="small">€</span></h3>
                    <p class="crossed-out">500<span class="small">€</span></p>
                    <p>10 sesiuni</p>
                </div>
            </div>
            <button class="btn"><a href="/contact" data-link="contact">Înscrie-te</a></button>
        </div>
    </section>
    <section class="service-section4">
        <div class="service-card">
            <h2 class="card-title">Coaching de echipă</h2>
            <p class="card-text">prin intermediul acestui program, vom explora împreună provocările legate de comunicare, viziune, flexibilitate și adaptabilitate în cadrul echipei; vom lucra împreună și vom aborda echilibrat sesiunile individuale și de grup pentru a ghida și încuraja evoluția personală și profesională a întregii echipe.</p>
            <div class="price-wrapper">
                <h3 class="price">99<span class="small">€</span></h3>
                <p>1 sesiune - 60 minute</p>
            </div>
            <button class="btn"><a href="/contact" data-link="contact">Înscrie-te</a></button>
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