const moviesContent =[ {
    name:"Avatar 2",
    alt:"Avatar 2",
    title:"Avatar 2 comming soon",
    img:"./img/movie_blog/avatar 2.jpg",
    href:"https://www.youtube.com/watch?v=EWXb-Twcbi4"
},
{
    name:"Black panterr:Wakanda forever",
    alt:"Black panterr:Wakanda forever",
    title:"Black panterr:Wakanda forever comming soon",
    img:"./img/movie_blog/black panterr.jpg",
    href:"https://www.youtube.com/watch?v=qZuQc-GvRlk"
},
{
    name:"Spider man",
    alt:"Spider man",
    title:"Spider man comming soon",
    img:"./img/movie_blog/Spider man.jpg",
    href:"https://www.youtube.com/watch?v=BbXJ3_AQE_o"
},
{
    name:"THOR",
    alt:"THOR",
    title:"THOR comming soon",
    img:"./img/movie_blog/Toor.jpg",
    href:"https://www.youtube.com/watch?v=KHPrDP0F5_o"
}
]


document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const upcommingMoviesContainer = document.querySelector('.upcoming_movies');
        moviesContent.forEach(element => {
            let upcommingMoviesItemContainer = document.createElement('div'); 
            upcommingMoviesItemContainer.className = 'item_movie'; 
           
            let movieLink = document.createElement('a');
            movieLink.target = '_blank';
            movieLink.href = element.href;
            
            let movieImg = document.createElement('img');
            movieImg.class = 'blog_img';
            movieImg.src = element.img;
            movieImg.title = element.title;
            movieImg.alt = element.alt;
            movieLink.appendChild(movieImg);
            upcommingMoviesItemContainer.appendChild(movieLink);
            upcommingMoviesContainer.appendChild(upcommingMoviesItemContainer);

        });
    }
  };

  