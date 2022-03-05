import axios from 'axios';

class JsonPlaceHolderUserService {
            async listAll({page = 1, limit = 5}) {
                    let data
                    await axios.get(`https://jsonplaceholder.typicode.com/users/?_page=${page}&_limit=${limit}`)
                    .then(response => {
                    data = [response.data]
                    data.flat()
                    console.log(data)
                    return data;
                    })}
                    
                }

const JsonPlaceHolderUser = new JsonPlaceHolderUserService();

export { JsonPlaceHolderUser }