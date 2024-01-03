import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Servicii");
    }

    async getHTML() {
        return `<h1>servicii ske</h1>`;
    }
}