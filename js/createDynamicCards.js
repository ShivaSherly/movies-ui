// Create cards
function createCards(data) {
  const container = document.getElementById('card-container');
  console.log("Before ReplaceChildren");
  container.replaceChildren();
  console.log("After ReplaceChildren");
  console.log("container", container);
  let imagePath = '../images/movieLogo.png';
  data.forEach(item => {
    console.log("Item", item);
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '25%';
    card.style.display = 'inline-block';

    // Create image element
    const image = document.createElement('img');
    image.src = imagePath; // Assuming 'imageSrc' is the key in your JSON object that contains the image URL
    image.alt = "movie Icon"; // Assuming 'imageAlt' is the key in your JSON object that contains the image alt text
    card.appendChild(image);

    // Create title element
    const title = document.createElement('h2');
    title.textContent = item.original_title; // Assuming 'title' is the key in your JSON object that contains the card title
    card.appendChild(title);

    // Create description element
    const description = document.createElement('p');
    description.textContent = item.release_date; // Assuming 'description' is the key in your JSON object that contains the card description
    card.appendChild(description);

    // Create title element
    const viewMore = document.createElement('a');
    viewMore.textContent = "View More"; // Assuming 'title' is the key in your JSON object that contains the card title
    viewMore.href = '#';
    card.appendChild(viewMore);

    // Add card to the container
    container.appendChild(card);
  });
}
