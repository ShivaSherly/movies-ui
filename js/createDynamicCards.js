// Create cards
function createCards(data) {
  const container = document.getElementById('card-container');
  container.replaceChildren();
  let imagePath = 'http://image.tmdb.org/t/p/w500/';
  data.forEach(item => {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '25%';
    card.style.display = 'inline-block';

    // Create image element
    const image = document.createElement('img');
    image.src = imagePath + item.backdrop_path; // Assuming 'imageSrc' is the key in your JSON object that contains the image URL
    image.alt = "movie Icon"; // Assuming 'imageAlt' is the key in your JSON object that contains the image alt text
    card.appendChild(image);

    // Create title element
    const title = document.createElement('h2');
    title.textContent = item.original_title; // Assuming 'title' is the key in your JSON object that contains the card title
    card.appendChild(title);

    // Create description element *** Movie Release Date ***
    const description = document.createElement('p');
    description.textContent = "Released Date :" + item.release_date; // Assuming 'description' is the key in your JSON object that contains the card description
    card.appendChild(description);

    // Create description element *** Language ***
    const language = document.createElement('p');
    language.textContent = "Language :" + item.original_language; // Assuming 'original_language' is the key in your JSON object that contains the card description
    card.appendChild(language);

    // Create description element *** Language ***
    const vote_average = document.createElement('p');
    vote_average.textContent = "Rating :" + item.vote_average; // Assuming 'vote_average' is the key in your JSON object that contains the card description
    vote_average.style.textAlign = 'left';
    card.appendChild(vote_average);

    // Create title element 
    const viewMore = document.createElement('a');
    viewMore.textContent = "Book Tickets Now"; // Assuming 'title' is the key in your JSON object that contains the card title
    viewMore.href = '../html/viewMovieDescription.html?backdrop_path='+item.backdrop_path+'&original_title='+item.original_title+'&release_date='+item.release_date+'&original_language='+item.original_language+'&vote_average='+item.vote_average+'&overview='+item.overview;
    card.appendChild(viewMore);

    // Add card to the container
    container.appendChild(card);
  });
}
