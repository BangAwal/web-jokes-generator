function main() {

    const baseUrl = "https://sv443.net/jokeapi/v2/joke/any?";

    const getJokes = () => {
        fetch(`${baseUrl}blacklistFlags=nsfw&type=single&amount=15`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderJokes(responseJson.jokes);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderJokes = (jokes) => {
        const listJokeElement = document.querySelector("#listData");
        listJokeElement.innerHTML = "";

        jokes.forEach(joke => {
            listJokeElement.innerHTML += `
            <div class="card">
            <div class="card-header">
              ${joke.category}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${joke.joke}</p>
                <footer class="blockquote-footer">Someone famous </footer>
              </blockquote>
            </div>
          </div>
            `;
        });
    };

    const showResponseMessage = (message = "Check Your Connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getJokes();
    });
}

export default main;