import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Portofoliu");
    }

    async getHTML() {
        return `<h1>Protofoliu ske</h1>`;
    }
}