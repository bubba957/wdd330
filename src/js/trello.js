const trelloBoard = document.querySelector('#trello-board');

// const url = 'https://trello.com/b/xODH5gMt/mapalgate';

const fetch = require('node-fetch');

fetch('https://api.trello.com/1/actions/{id}?key=APIKey&token=APIToken', {
  method: 'GET'
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    trelloBoard.innerHTML = data;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather in Trier, Germany.');
    captionDesc.textContent = desc;
}

apiFetch();