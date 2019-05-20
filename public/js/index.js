// Design Concept by George Vasyagin: https://dribbble.com/shots/2266601-IMDb-design-concept/attachments/425192


// let movies = [
//   {
//     title: "Bird Box",
//     genre: ["Drama", "Horror", "Sci-Fi"],
//     rating: 6.7,
//     poster: "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
//   },
//   {
//     title: "Green Book",
//     genre: ["Biography", "Comedy", "Drama"],
//     rating: 8.3,
//     poster: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
//   },
//   {
//     title: 'Avengers: EndGame',
//     genre: ['Action', 'Adventure', 'Fantasy'],
//     rating: 8,
//     poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
//   },
//   {
//     title: 'Mad Max: Fury Road',
//     genre : ['Action', 'Adventure', 'Sci-Fi'],
//     rating: 8.3,
//     poster: 'https://s-media-cache-ak0.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg'
//   },
//   {
//     title: 'The Hunger Games: Mockingjay Part 1',
//     genre: ['Adventure', 'Sci-Fi', 'Thriller'],
//     rating: 6.8,
//     poster: 'https://1.bp.blogspot.com/-Ds0sudZmSq4/Vgxrr75E77I/AAAAAAAAREo/sZkZW5YMDTw/s1600/Mockingjay%2BPart%2B1.jpg'
//   },
//   {
//     title: 'Jurassic World',
//     genre: ['Action', 'Adventure', 'Sci-Fi'],
//     rating: 7.2,
//     poster: 'https://s-media-cache-ak0.pinimg.com/736x/0b/ab/9a/0bab9a9c671dbb7aa8626eec44a0195f.jpg'
//   },
//   {
//     title: 'Everest',
//     genre: ['Adventure', 'Drame', 'Thriller'],
//     rating: 7.4,
//     poster: 'http://www.impawards.com/2015/posters/everest_ver4.jpg'
//   },
//   {
//     title: 'Insurgent',
//     genre: ['Adventure', 'Sci-Fi', 'Thriller'],
//     rating: 6.4,
//     poster: 'http://cdn2-www.comingsoon.net/assets/uploads/2015/01/FIN16_Insurgent_Guns_1Sht_Trim-1422379653-mtv-14224534611.jpg'
//   },
//   {
//     title: 'Sicario',
//     genre: ['Action', 'Crime', 'Drama'],
//     rating: 8,
//     poster: 'https://s-media-cache-ak0.pinimg.com/564x/7f/a1/5c/7fa15c26aa2cb48562ea37bbc177be74.jpg'
//   }
// ];

const results = document.getElementById('results');
const range_form = document.getElementById('range-form');
const search_form = document.getElementById('search-form');
const movieSection = document.querySelector('#movies');


/*
FUNCTIONS
*/
const search_filter = function(e) {
  e.preventDefault();
  const search_value = this.querySelector('#search').value.toUpperCase();
  const movieList = document.querySelectorAll('figure');
  for(let i = 0; i < movieList.length; i++) {
    const movie_movieName = movieList[i].querySelector('h5').textContent;
    const movie_genre = movieList[i].querySelector('p').textContent;
    if(movie_movieName.toUpperCase().indexOf(search_value) > -1) {
      movieList[i].style.display = '';
    } else {
      movieList[i].style.display = 'none';
    }
  }
};


const rating_filter = function() {
  
  const rating_value = +this.querySelector('#range').value;
  results.textContent = rating_value;
  const movieList = document.querySelectorAll('figure');
  
const rating_results = movies.filter(movie => movie.rate_average === rating_value)
.map(movie => `
<figure>
  <img src="${movie.poster}" />
  <figcaption>
    <h5>${text_truncate(movie.movieName, 26)}</h5>
    <p>${movie.genre}</p>
    <div class="rating">
      <i class="fa fa-heart"></i>
      <h4>${movie.rate_average}</h4>
    </div>
    <button>
      <i class="fa fa-plus"></i>
    </button>
  </figcaption>
</figure>`);
    movieSection.innerHTML = rating_results;
}

// SHORTEN MOVIE TITLE IF LENGTH IS MORE THEN 26 CHARACTERS
const text_truncate = function(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

// LOOP THROUGH ARRAY & CREATE A TEMPLATE
let template = '';
movies.forEach((movie) => {

  template += `
  <figure>
    <img src="${movie.poster}" />
    <figcaption>
      <h5>${text_truncate(movie.movieName, 26)}</h5>
      <p>${movie.genre.join(', ')}</p>
      <div class="rating">
        <i class="fa fa-heart"></i>
        <h4>${movie.rate_average}</h4>
      </div>
      <button>
        <i class="fa fa-plus"></i>
      </button>
    </figcaption>
  </figure>`;  
});
movieSection.innerHTML = template;

// FILTER THROUGH MOVIES BY TITLE & GENRE
search_form.addEventListener('input', search_filter);

// FILTER MOVIES BY RATING
range_form.addEventListener('input', rating_filter);

