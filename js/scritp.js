// $(document).ready(function () {
//    $.ajax({
//         type: "GET",
//         url: "https://api.themoviedb.org/3/movie/changes?page=1",
//         dataType: "json",
//         async: "true",
//         headers: {
//             "Authorization" : `Bearer ${API_KEY}`,
//             "Accept" : "application/json"
//         },
//         success: function(data){
//             const limitedData = data.results.slice(0,10);
//             limitedData.forEach(function (movie) {
//                const movieId = movie.id;
//                getMovieDetails(movieId);
//             });
//         },
//         error: function (error) {
//             console.log(error);
//         }
//    });
// });

// function getMovieDetails(movieId) {
//     // console.log(limitedData);
//     $.ajax({
//         type: "GET",
//         url: `https://api.themoviedb.org/3/movie/${movieId}`,
//         dataType: "json",
//         async: "true",
//         headers: {
//             "Authorization" : `Bearer ${API_KEY}`,
//             "Accept" : "application/json"
//         },
//         success: function(movieDetails){
//             // console.log(movieDetails);
            
//             const title = movieDetails.title;
//             const posterPath = movieDetails.poster_path;

//             let posterUrl;
//             if (posterPath) {
//                 // Crear URL completa para el póster
//                 posterUrl = `https://image.tmdb.org/t/p/w780${posterPath}`;
//             } else {
//                 // URL de imagen por defecto si no hay póster disponible
//                 posterUrl = "https://via.placeholder.com/500x750?text=No+Poster+Available";
//             }
//             renderMoviesDetails(title,posterUrl);

//             // Inicializar Splide después de agregar todas las películas
//             if ($('.splide__slide').length === 10) {
//                 const splide = new Splide('#splide', {
//                     type: 'loop',
//                     drag: 'free',
//                     perPage: 3,
//                     gap: '20px',
//                     autoplay: true,
//                     autoScroll: {
//                         speed: 1,
//                     },
//                 });
//                 splide.mount(window.splide.Extensions);
//             }
//         },
//         error: function (error) {
//             console.log(error);
//         }
//    });
// }

// function renderMoviesDetails(title,posterUrl) {
//     const movieItem = $('<li></li>').addClass('splide__slide');
//     // const movieTitle = $('<h2></h2>').text(title);
//     const moviePoster = $('<img>').attr('src', posterUrl).attr('alt', title);

//     // movieItem.append(movieTitle);
//     movieItem.append(moviePoster);

//     $('.splide__list').append(movieItem);
// }