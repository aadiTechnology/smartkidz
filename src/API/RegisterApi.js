import axios from 'axios';
import configJSON from '../Common/configJSON';

const http = axios.create({
  baseURL: "http://localhost:44315/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
});

const AddEnquiryList = (Body) =>{

    axios.post(configJSON.APIurl+'addEnquiryList', Body)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}
const GetEnquiryList = async () =>{

    const response = await http.get(configJSON.APIurl+'getEnquiryList')
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("here",response)
      return response
}
const RegisterApi = {
    AddEnquiryList,
    GetEnquiryList
}
export default RegisterApi