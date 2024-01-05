import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHTML() {
        return `<h1>contact ske</h1>`;
    }
}