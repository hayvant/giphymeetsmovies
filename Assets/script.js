let searchEl = $('movieName').val()



$('#searchMovie').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=25ec969f&t=' + searchEl
    }).then(function (data) {
        console.log('movie data??', data)

        let title = data.Title
        console.log('title??', title)
        let year = data.Year
        console.log('year??', year)
        let actors = data.Actors
        console.log('actors??', actors)


    })
})

// function getGiphy(data) {

//     $.ajax({
//         url: 'https://api.giphy.com/v1/gifs/search?api_key=Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK&q=scary&limit=25&offset=0&rating=pg-13&lang=en'
//     }).then(function (data) {
//         // console.log('giphy data??', data)
//     })
// }