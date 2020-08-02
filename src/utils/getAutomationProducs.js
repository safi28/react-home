import axios from 'axios'

const getAutomationProducts = async () => {
  const response = await axios.get("http://localhost:9999/api/automation/all");
  return response.data
};
export default getAutomationProducts
