import Axios from 'axios';

const getInfoByName = async (name) => {
  try {
    const defaultURL = "https://api.hgbrasil.com/weather";
    const keyApi = "01bce105";
  
    const url = `${defaultURL}?key=${keyApi}&format=json-cors&city_name=${name}`;
    
    const response = await Axios.get(url);

    const results = response["data"]["results"];

    return results;

  }catch(e) {
    console.log(e);
  }
}

const getInfoByIP = async (ip) => {
  try {
    const defaultURL = "https://api.hgbrasil.com/weather";
    const keyApi = "01bce105";

    const url = `${defaultURL}?key=${keyApi}&format=json-cors&user_ip=${ip}`;

    console.log(url)

    const response = await Axios.get(url);

    const results = response["data"]["results"];

    return results;

  }catch(e) {
    console.log(e);
  }
}

export default { getInfoByName, getInfoByIP };