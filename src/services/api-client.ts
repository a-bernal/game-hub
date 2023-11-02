import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6ee1309ca3e9494eb2c55e345a02478f'
    }
})