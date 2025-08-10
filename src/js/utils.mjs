// Get American food from the API
export function americanFood() { 
    document.getElementById('american').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};

// Get Chinese food from the API
export function chineseFood() { 
    document.getElementById('chinese').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};

// Get French food from the API
export function frenchFood() { 
    document.getElementById('french').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=French')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};

// Get Italian food from the API
export function italianFood() { 
    document.getElementById('italian').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};

// Get Japanese food from the API
export function japaneseFood() { 
    document.getElementById('japanese').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};

// Get Mexican food from the API
export function mexicanFood() { 
    document.getElementById('mexican').addEventListener('click', () => {
      const dataContainer = document.getElementById('data');
      const errorContainer = document.getElementById('error');

      // Clear previous data and errors
      dataContainer.textContent = '';
      errorContainer.textContent = '';

      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(parsedData => {
          dataContainer.textContent = JSON.stringify(parsedData, null, 2);
        })
        .catch(error => {
          errorContainer.textContent = `Error fetching data: ${error.message}`;
        });
    })};