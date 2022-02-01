const elFilmsList = document.querySelector('.films__list');
const elFilmTemplate = document.querySelector('#film-template').content;
const elGenreTemplate = document.querySelector('#film-genre-template').content;
const elFilmsSelect = document.querySelector('.film-select');
const elForm = document.querySelector('.form');


elForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let select = elFilmsSelect.value;

	let newArray = [];

	films.forEach(film => {
		if(select === "All"){
			newArray.push(film)
		}
		if(film.genres.includes(select)){
			newArray.push(film);
		}
	})

	renderFilms(newArray, elFilmsList)
})

var generateGenres = (films) => {
	var genres = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!genres.includes(genre)) {
				genres.push(genre);
			}
		});
	});

	return genres;
};




const renderGenresSelect = (genres, element) => {
	element.innerHTML = null;

	genres.forEach((genre) => {
		var newOption = document.createElement('option');
		newOption.value = genre;
		newOption.textContent = genre;

		element.appendChild(newOption);
	});
};

renderGenresSelect(generateGenres(films), elFilmsSelect);

var renderGenres = (array, element) => {
	element.innerHTML = null;

	array.forEach((genre) => {
		var genreTemplate = elGenreTemplate.cloneNode(true);

		genreTemplate.querySelector('.film-genre').textContent = genre;

		element.appendChild(genreTemplate);
	});
};

function normalizeDate (dateFormat) {

    let date = new Date (dateFormat);
    let day = String(date.getDate()).padStart(2, 0);
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let year = String(date.getFullYear()).padStart(2, 0);

    return (day + '.' + month + '.' + year);
}

var renderFilms = (array, element) => {
	element.innerHTML = null;

	array.forEach((film) => {
		var filmTemplate = elFilmTemplate.cloneNode(true);

		filmTemplate.querySelector('.film__title').textContent = film.title;
		filmTemplate.querySelector('.film__image').src = film.poster;
		filmTemplate.querySelector('.film__overview').textContent =
			film.overview;
		filmTemplate.querySelector('.film__time').textContent =
			normalizeDate(film.release_date);

		var elGenres = filmTemplate.querySelector('.film__genres');

		renderGenres(film.genres, elGenres);

		element.appendChild(filmTemplate);
	});
};

renderFilms(films, elFilmsList);


