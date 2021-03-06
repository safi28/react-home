import axios from "axios";
import getCookie from "../utils/getCookie";

const productService = {
  getAll: () => {
    return axios.get("http://localhost:9999/api/products/");
  },
  getProducts: async () => {
    const response = await axios.get("http://localhost:9999/api/products/all");
    return response.data;
  },
  getAutomationProducts: async () => {
    const response = await axios.get("http://localhost:9999/api/automation/all");
    return response.data
  },
  create: (product) => {
    return fetch("http://localhost:9999/api/products/create", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
        Authorization: getCookie("auth_cookie"),
      },
    });
  },
  delete: (product) => {
    return fetch("http://localhost:9999/api/automation/delete", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
        Authorization: getCookie("auth_cookie"),
      },
    });
  },
  createSmart: (product) => {
    return fetch("http://localhost:9999/api/automation/create", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
        Authorization: getCookie("auth_cookie"),
      },
    });
  },
  verify: (token) => {
    return fetch("http://localhost:9999/api/user/verify", {
      method: "POST",
      body: JSON.stringify({
        token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default productService;
