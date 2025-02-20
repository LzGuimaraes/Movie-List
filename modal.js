// const overlay = document.getElementById('modal-overlay'); // Se for utilizar, descomente esta linha
const background = document.getElementById('modal-background');
const modalContainer = document.getElementById('modal-container');

let currentMovie = {};

function backgroundClickHandler() {
    overlay.classList.remove('open'); // Certifique-se de que "overlay" está definido no HTML
}

function closeModal() {
    overlay.classList.remove("open");
}

function addCurrentMovieToList() {
    if (isMovieAlreadyOnList(currentMovie.imdbID)) {
        notie.alert({ type: "error", text: "Movie already in your list" });
        return;
    }
    addToList(currentMovie);
    updateUI(currentMovie);
    updateLocalStorage()
    closeModal();
}

function createModal(data) {
    currentMovie = data;

    modalContainer.innerHTML = `
        <h2 id="movie-title">${data.Title} - ${data.Year}</h2>
        <section id="modal-body">
            <img 
                id="movie-poster"                                                                
                src="${data.Poster}"
                alt="Poster of ${data.Title}"/> 
            <div id="movie-info">
                <h3 id="movie-plot">
                    ${data.Plot}
                </h3>
                <div id="movie-cast">
                    <h4>Elenco</h4>
                    <h5>${data.Actors}</h5>
                </div>
                <div id="movie-genre">
                    <h4>Genre:</h4>
                    <h5>${data.Genre}</h5>
                </div> 
            </div>
        </section>
        <section id="modal-footer">
            <button id="add-to-list" onclick="addCurrentMovieToList()">Add to List</button>
        </section>
    `;
}

background.addEventListener('click', backgroundClickHandler);
