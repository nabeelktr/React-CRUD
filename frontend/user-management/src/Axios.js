import axios from "axios"; 
import { base_URL } from "./components/Constants/constants";


const instance = axios.create({

baseURL : base_URL

});

export default instance;