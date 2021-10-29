const searchEl = $('#movieName')
const movieApi = '25ec969f'
const gifApi = 'Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK'



$('#searchMovie').on('click', function () {

    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=' + movieApi + '&t=' + searchEl.val()
    }).then(function (response) {

        $('.empty').empty()

        let title = response.Title
        let year = response.Year
        let actors = response.Actors

        $('#movieTitle').text(title)
        $('#movieYear').text('Released in ' + year)
        $('#moviePeople').text('Main actors/actresses are ' + actors)

        getGiphy()
        getStorage()
    })
})

// $('#searchMovie').keypress(function (event) {
//     if (event.keyCode == 13 && searchEl.val()) {
//         event.preventDefault()
//         $('#searchMovie').click();
//     }
// })

function getGiphy() {

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/random?api_key=' + gifApi + '&tag=' + searchEl.val() + '&limit=1&lang=en'
    }).then(function (response) {

        let gif = response.data.images.original.url
        $('#movieGif').attr('src', gif)
    })
}

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

// tailwind.config.js
