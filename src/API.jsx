import axios from "axios";

const serverIP = "http://0.0.0.0:6006";
// const paymentIP = "http://0.0.0.0:6003/v1";
// const paymentIP = "http://192.168.88.79:6003/v1";
// const serverIP = "http://192.168.88.79:6006";

export function get() {
  return axios
    .get(serverIP + `/get`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
}
