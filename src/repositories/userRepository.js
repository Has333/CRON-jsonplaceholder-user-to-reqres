import { User } from '../models/UserSchema.js';

class JsonPlaceHolderUserDatabaseRepository {
  consult(value){
   User.findOne({email: value})
  }

  insert({ JsonPlaceHolderUser }){
   User.insertMany([
       {id: JsonPlaceHolderUser.id,
        email: JsonPlaceHolderUser.email}
   ])}

  update({ JsonPlaceHolderUser }){
   User.updateMany([
       {id:JsonPlaceHolderUser.id,
        email: JsonPlaceHolderUser.email}
   ])}
}

const JsonPlaceHolderUserDatabase = new JsonPlaceHolderUserDatabaseRepository();
export { JsonPlaceHolderUserDatabase }