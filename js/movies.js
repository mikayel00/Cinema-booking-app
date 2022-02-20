const movies = [
    {
        image: "img/movie_photo/godzilla.jpg",
        header: "Godzilla vs. Kong (2021)"
    },
    {
        image: "img/movie_photo/house-of-gucci.jpg",
        header: "House of Gucci (2021)"
    },
    {
        image: "img/movie_photo/tom-and-jerry.jpg",
        header: "Toma and Jerry (2021)"
    },
    {
        image: "img/movie_photo/without-remorse.jpg",
        header: "Without Remorse (2021)"
    },
]

function moviePoster(URL,header) {
    return `
    <div class="movie-poster">
        <img class="movie-photo" src="${URL}">
        <button onclick="window.location.href='ticket.html'" class="ticket_">Get Tickets</button>
        <h2 class="movie-header">"${header}"</h2>
    </div>
    `
}
 const postersData = [];
 for(let i=0; i < movies.length; i++){
     let poster = moviePoster(movies[i].image,movies[i].header);
     postersData.push(poster);
 }
 function posterCreater(posterName){
     let poster = document.createElement("div");
     poster.innerHTML = posterName;
     document.getElementById("movie-container").appendChild(poster);
 }
 function drawPosters(){
     let postersItem = "";
     for(let i=0;i<postersData.length;i++){
         postersItem = postersItem + posterCreater(postersData[i])
     }
 }
 drawPosters();
 