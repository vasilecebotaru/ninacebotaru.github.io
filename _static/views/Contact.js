import abstractView from "./abstractView.js";
import setFormListener from "../js/contact-script.js";
import '../css/contact.css';


export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHTML() {
        const fragment = document.createDocumentFragment();
        const htmlContent = `<section>
        <div class="form-wrapper">
            <div class="wrapper">
                <h3>Înregistrează-te aici</h3>
                <p>Completați formularul și vă vom suna în scurt timp</p>
            </div>
            <form action="/submit" method="POST" id="register-form">
                <div class="form-control">
                    <label for="name">Numele și prenumele</label>
                    <input type="text" name="name" id="full-name" autocomplete="off" placeholder="NUMELE ȘI PRENUMELE" required>
                </div>
                <div class="form-control">
                    <label for="telephone">Telefon</label>
                    <div class="wrapper">
                        <span class="telephone-prefix">+373</span>
                        <input type="tel" name="tel" id="telephone" autocomplete="off" placeholder="TELEFON" required>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn" form="register-form">Trimite</button>
        </div>

        <div class="success-container">
            <div class="wrapper">
                <h3>Succes!</h3>
                <p>Am primit un mesaj și vă vom suna în curând</p>
            </div>
            <button class="btn"><a href="/">OK</a></button>
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

    async formListener(){
        setFormListener();
    }
}