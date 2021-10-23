// let search = 

function getMovie() {

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=25ec969f&t=the_godfather'
    }).then(function (data) {
        console.log('movie data??', data)
        console.log('movie title??', data.Title)
        console.log('movie year??', data.Year)
        console.log('movie actors??', data.Actors)
    })
}
getMovie()

function getGiphy(data) {

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?api_key=Yra79OxqQFHvDTCxC6nGYUJfeNW8hjuK&q=scary&limit=25&offset=0&rating=pg-13&lang=en'
    }).then(function (data) {
        // console.log('giphy data??', data)
    })
}
getGiphy()