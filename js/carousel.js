const slides = [
  {
    image: "img/movie_photo/Spider-man.png",
    title: "Spider-Man: No Way Home (2021)",
    genre: "Action,Adventure,Fantasy • 2h 28m",
    about: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    smallAbout: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous...",
    smallAbout2: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell..."
  },
  {
    image: "img/movie_photo/hotel.png",
    title: "Hotel Transylvania: Transformania (2020)",
    genre: "Animation,Adventure,Comedy • 1h 27m",
    about: "After one experiment, Johnny turns into a monster and everyone else becomes human. Now it has to be seen whether they will be able to reverse this experiment.",
    smallAbout: "After one experiment, Johnny turns into a monster and everyone else becomes human. Now it has to be seen whether they...",
    smallAbout2: "After one experiment, Johnny turns into a monster and everyone else becomes human. Now it has to..."
  },
  {
    image: "img/movie_photo/avatar.png",
    title: "AVATAR 2: The Way of Water (2022)",
    genre: "Action,Adventure,Sci-Fi • 2h 10m",
    about: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
    smallAbout: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was...",
    smallAbout2: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat..."
  }
]


function movie(URL,movieName,genre,about,sAbout,sAbout2) {
  return `                
  <div class="mySlides fade">
  <img class="slide-photo" src="${URL}">
  <div class="film-header">"${movieName}"</div>
  <a class="film-genre">"${genre}"</a>
  <p class="about-film">"${about}"</p>
  <p class="small-about-film">"${sAbout}"</p>
  <p class="small-about-film2">"${sAbout2}"</p>
  <button onclick="window.location.href='ticket.html'" class="get-ticket">Get Tickets</button>
  <button class="ticket-price">2500 AMD/3500 AMD</button>
  <button class="more-about">More about movie</button>
  </div>`;
 }

 const data = [];

 for(let i = 0; i < slides.length; i++){
  const { image, title, genre, about, smallAbout, smallAbout2 } = slides[i];
  let slide = movie(image, title, genre, about, smallAbout, smallAbout2);
   data.push(slide);
 }


 function carousel(slideName){
 let slide = document.createElement("div");
 slide.innerHTML = slideName;
 document.getElementById("slideshow-container").appendChild(slide);
}

function drawSlides(){
  let sliderItem = "";
  for(let i=0; i<data.length; i++){
    sliderItem = sliderItem + carousel(data[i]);
  }
}
drawSlides()

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
};

