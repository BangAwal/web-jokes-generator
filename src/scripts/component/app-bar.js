class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">
                    Jokes For Everyone
                </h1>
                <p class="lead">Relax Buddy, here some jokes for you
                *Press F5 after you read all the jokes ^^
                </p>
            </div>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);