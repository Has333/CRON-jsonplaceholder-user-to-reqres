import axios from 'axios';

class ReqresUserService {
    async upload({ jsonPlaceHolderUser }) {
    let user = jsonPlaceHolderUser
    await axios.post('https://reqres.in/api/users', user)
    }
 
    async update({ jsonPlaceHolderUser }){
     let user = jsonPlaceHolderUser
     await axios.put('https://reqres.in/api/users', user)
    }
}

const ReqresUser = new ReqresUserService();

export { ReqresUser }