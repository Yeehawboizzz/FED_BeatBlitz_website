// Done by YeeHen and Jason
document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = "https://fedassg2albums-d12d.restdb.io/rest/albums";
  const apiKey = "65b9fa451513d1f084491cb6";

  // Fetch api array from restDB
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': apiKey,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Console.log the array fetched for debugging purposes
      console.log(data);
      displayAlbums(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // Define the displayAlbums function
  function displayAlbums(albums) {
    // Your logic to display albums here
    for (let i = albums.length - 1; i >= 0; i--) {
      const album = albums[i];

      // Call the updateAlbumDisplay function for each album
      updateAlbumDisplay(album, i);
    }
  }

  function updateAlbumDisplay(album, index) {
    // Get elements by ID
    const cardTitle = document.getElementById(`card-title-${index}`);
    const cardText = document.getElementById(`card-text-${index}`);
    const backContent = document.getElementById(`back-${index}`);

    // Update the HTML elements with the fetched data
    cardTitle.textContent = album['artist'];
    cardText.innerHTML = `${album['album-name']}<br>$${album['album-price'].toFixed(2)}SGD`;

    // Update the content on the back of the card
    backContent.innerHTML = `
      <ul>
        <li>${album['album-songs']}</li>
        <li>Release: ${new Date(album['album-date']).toLocaleDateString()}</li>
        <li>Length: ${album['length']}</li>
        <li>Label: ${album['label']}</li>
      </ul>
    `;
  }
});

