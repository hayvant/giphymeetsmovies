const searchEl = $('#movieName')
const movieApi = '25ec969f'
const gifApi = 'Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK'



$('#searchMovie').on('click', function () {

    getMovie(searchEl.val())
})

$('#movieName').keypress(function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        $('#searchMovie').click();
    }
})

function getMovie(movie) {

    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=' + movieApi + '&t=' + movie
    }).then(function (response) {

        $('.empty').empty()

        let title = response.Title
        let year = response.Year
        let actors = response.Actors

        if (title == undefined || year == undefined) {

            $('#movieTitle').text('Oops! That movie does not exist. Try again!')
            $('#movieYear').text('')
            $('#moviePeople').text('')
            $('#movieGif').attr('src', './images/oops.gif')

        } else {

            $('#movieTitle').text(title)
            $('#movieYear').text('Released in ' + year)
            $('#moviePeople').text('Main cast members are ' + actors)

            getGiphy()
            getStorage()
        }
    })

}

function getGiphy() {

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/random?api_key=' + gifApi + '&tag=' + searchEl.val() + '&limit=1&lang=en'
    }).then(function (response) {

        let gif = response.data.images.original.url
        $('#movieGif').attr('src', gif)
    })
}

const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);

function getStorage() {

    let searchLowered = searchEl.val().toLowerCase()

    let movieArray = JSON.parse(localStorage.getItem('movies')) || []
    if (movieArray.includes(searchLowered) === false) {
        movieArray.push(searchLowered)
    }
    localStorage.setItem('movies', (JSON.stringify(movieArray)))

    for (let i = 0; i < movieArray.length; i++) {

        let savedMovie = $('<p>')
        $(savedMovie).text(movieArray[i])
        $('#movieStorage').append(savedMovie)
    }
}