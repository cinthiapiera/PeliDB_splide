$(document).ready(function () {
     $.ajax({
        type: "GET",
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        dataType: "json",
        async: "true",
        headers: {
            "Authorization" : `Bearer ${API_KEY}`,
            "Accept" : "application/json"
        },
        success: function(data){

            console.log(data);
            data.results.forEach(function (movie) {

                const title = movie.title;
                const posterPath = movie.poster_path;
    
                let posterUrl;
                if (posterPath) {
                    posterUrl = `https://image.tmdb.org/t/p/w780${posterPath}`;
                } else {
                    posterUrl = "https://via.placeholder.com/500x750?text=No+Poster+Available";
                }
                renderMoviesDetails(title,posterUrl);
            });
            // Inicializar Splide después de agregar todas las películas
            const splide = new Splide('#splide', {
                type: 'loop',
                drag: 'free',
                perPage: 3,
                gap: '20px',
                autoplay: true,
                autoScroll: {
                    speed: 1,
                },
            });
            splide.mount(window.splide.Extensions);
        },
        error: function (error) {
            console.log(error);
        }
     });
});
 
function renderMoviesDetails(title,posterUrl) {
     const movieItem = $('<li></li>').addClass('splide__slide');
     const moviePoster = $('<img>').attr('src', posterUrl).attr('alt', title);
 
     movieItem.append(moviePoster);
 
     $('.splide__list').append(movieItem);
}