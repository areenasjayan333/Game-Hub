import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'6a5314cb24fe473d93f8362cc6429f45'
    }
})