import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHTML() {
        const fragment = document.createDocumentFragment();
        const htmlContent = `<p class="temporary">contact coming soon</p>`;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Append the child nodes of the temporary container to the DocumentFragment
        while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
        }

        return fragment;
    }
}