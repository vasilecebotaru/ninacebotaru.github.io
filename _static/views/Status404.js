import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor() {
        super();
        this.setTitle("Not found");
    }

    async getHTML() {
        return `<h1>404 se pare ca nu</h1>`;
    }
}