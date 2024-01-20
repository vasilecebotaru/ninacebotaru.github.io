import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Recenzii");
    }

    async getHTML() {
        const fragment = document.createDocumentFragment();
        const htmlContent = `<section>
        <div class="slide-container ">
            <div class="slide-content swiper">
                <div class="swiper-wrapper">
                    <div class="card-wrapper swiper-slide">
                        <div class="card">
                            <div class="card-header">
                                <img src="/static/img2/img-review1_ccrop.jpg" alt="review profile picture">
                                <p class="author">Mihaela Vicol</p>
                            </div>
                            <p class="card-body">
                                Datorita Ninei am prins curaj si am început sa merg spre ceea ce ma împlineste si imi place. A fost o placere sa lucrez cu ea, e foarte deschis si prietenoasa, am creat o relatie frumoasa desi nu ne stiam deloc. Recomand cu drag.
                            </p>
                        </div>
                    </div>
                    <div class="card-wrapper swiper-slide">
                        <div class="card">
                            <div class="card-header">
                                <img src="/static/img2/img-review2_ccrop.jpg" alt="review profile picture">
                                <p class="author">Natalia Botnari</p>
                            </div>
                            <p class="card-body">
                                Azi dupa sesiune am fost in conectare cu natura, am constientizat cit este de importanta viata mea si persoana mea care are nevoie de acceptare si iubire. Iti multumes cu recunostintã
                                pentru întrebari care m-au ajutat sa ma inteleg unde sa lucrezi, unde s-a accept unde sa ma laud si unde sa ma imbratisez si sa-mi recunosc vulnerabilitatea. Te imbratisez si iti multumesc.
                            </p>
                        </div>
                    </div>
                    <div class="card-wrapper swiper-slide">
                        <div class="card">
                            <div class="card-header">
                                <img src="/static/img2/img-review3_ccrop.jpg" alt="review profile picture">
                                <p class="author">Tania Braguța</p>
                            </div>
                            <p class="card-body">Buna dimineata
                                Azi la 3 zile distantã de sesiunea cu tine am ales tema lucrării scrise! Sesiunea a fost una magica! M-am simtit ascultata! Întrebările tale profunde si cu impact m-au determinat sa actionez in directia scopului propus! Iti multumesc cu recunostinta! Te cuprind!
                            </p>
                        </div>
                    </div>
                    <div class="card-wrapper swiper-slide">
                        <div class="card">
                            <div class="card-header">
                                <img src="/static/img2/img-review4_ccrop.jpg" alt="review profile picture">
                                <p class="author">Tatiana Bolocan</p>
                            </div>
                            <p class="card-body">Tin sa iti multumesc pentru sesiunea noastră, am adus o claritate si înteleg deja care este următorul pas...
                                Incă mă mai gândesc la unele "Aha-moments" care le-am avut pe parcurs. Iti multumesc mult cã ai avut răbdare sã mã asculti si te-am simtit foarte aproape de mine, atit de calda de parca ne stiam de o viata. Multumesc
                            </p>
                        </div>
                    </div>
                    <div class="card-wrapper swiper-slide">
                        <div class="card">
                            <div class="card-header">
                                <img src="/static/img2/img-review5_ccrop.jpg" alt="review profile picture">
                                <p class="author">Rethink.center</p>
                            </div>
                            <p class="card-body">vin cu multumire la voi si mã bucur că am descoperit Life Coach. Vreau sã-i multumesc Doamnei Nina CEBOTARU care am avut 5 sesiuni de Life Coach, dar pentru mine aceste 5 sesiuni am simit ca un an întreg. Eram sceptica la inceput, dar mi-am zis „ce am de pierdut daca incerc". Asa cả m-am luat in mâini si nu regret absolut deloc, prin faptul ca D-na Nina mi-a deschis ochii si anume mi-a aratat cum sa reusesti sa ajungi spre succes făra FRICA, mi-a aratat cum e sã supravietuiesti si sã fii indrazneata si sã fii tu insati in lumea asta Falsa. Aceste sesiuni am realizat că daca vrei o schimbare începe de la tine, fãra frica, fãrã frica sã te Descoperi. Noi femeile suntem frumoase cu fiecare cicatrice pe care o ascundem in inimele noastre - pentru cã este o me</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
        <button class="btn"><a href="/contact">Înscrie-te acum</a></button>
        <div class="social-container">
            <a href="#" class="social-link"><img src="static/img/icon-facebook.png" alt="link spre facebook"></a>
            <a href="#" class="social-link"><img src="static/img/icon-instagram.png" alt="link spre instagram"></a>
            <a href="#" class="social-link"><img src="static/img/icon-tiktok.png" alt="link spre tiktok"></a>
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