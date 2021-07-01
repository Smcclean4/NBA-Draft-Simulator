var axios = require("axios").default;

async function getData() {
    try {
      const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

export default getData()


