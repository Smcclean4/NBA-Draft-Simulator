var axios = require("axios").default;

export default async function getData() {
    try {
      const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
      
    } catch (error) {
      
    }
  }






