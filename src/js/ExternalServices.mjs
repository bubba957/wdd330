const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  const response = res.json;
  if (response.ok) {
    return response;
  } else {
    throw {name: 'servicesError', message: response};
  } 
}

export default class ExternalServices {
  constructor() {
    
  }

  async getData(category) {
    const response = await fetch(`${baseURL}products/search${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    // const products = await this.getData();
    // return products.find((item) => item.Id === id);
    const response = await fetch(`${baseURL}product/${id}}`);
    const data = await convertToJson(response);
    console.log(data.Result);
    return data.Result;
  }
}
