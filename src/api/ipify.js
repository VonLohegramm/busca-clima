import Axios from 'axios';

const getUserIP = async() => {
  try {
  
    const url = "https://api.ipify.org?format=json";
    
    const response = await Axios.get(url);

    const result = response["data"]["ip"];

    return result;

  }catch(e) {
    console.log(e);
  }
}

export default { getUserIP };