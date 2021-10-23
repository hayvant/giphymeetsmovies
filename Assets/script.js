let searchEl = $('#movieName')



$('#searchMovie').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=25ec969f&t=' + searchEl.val()
    }).then(function (data) {

        $('.empty').empty()
        
        console.log('movie data??', data)

        let title = data.Title
        let year = data.Year
        let actors = data.Actors

        $('#result').append('Title: ' + title)
        $('#result').append('Year it was released: ' + year)
        $('#result').append('Main actors/actresses: ' + actors)

    })
})

// function getGiphy(data) {

//     $.ajax({
//         url: 'https://api.giphy.com/v1/gifs/search?api_key=Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK&q=scary&limit=25&offset=0&rating=pg-13&lang=en'
//     }).then(function (data) {
//         // console.log('giphy data??', data)
//     })
// }