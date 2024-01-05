import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Recenzii");
    }

    async getHTML() {
        return `<h1>recenzie ske</h1>`;
    }
}