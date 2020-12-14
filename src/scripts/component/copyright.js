class Copyright extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="col-sm-12 m-auto">
                <br><br>
                <p class="text-center">&copy; Copyright 2020 | Muhammad Awaluddin</p>
            </div>
        </div>
        `;
    }
}

customElements.define("copy-right", Copyright);