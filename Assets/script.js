let searchEl = $('#movieName')

$('#searchMovie').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=25ec969f&t=' + searchEl.val()
    }).then(function (response) {

        $('.empty').empty()

        let title = response.Title
        let year = response.Year
        let actors = response.Actors
        let genre = response.Genre

        $('#result').append('Title: ' + title)
        $('#result').append('Year it was released: ' + year)
        $('#result').append('Main actors/actresses: ' + actors)

    })
    getGiphy()
})

function getGiphy(genre) {

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?api_key=Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK&q=scary&limit=25&offset=0&rating=pg-13&lang=en'
    }).then(function (response) {
        console.log('giphy data??', response)
        console.log('scary gif??', response.data[0].bitly_url)

        let gifDiv = $('<img/>')
        let gif = response.data[0].bitly_url
        $(gifDiv).attr('src', gif)
        $('#result').append(gifDiv)
        
    })
}