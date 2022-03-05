import { ReportsHelper } from '../helpers/ErrorReports.helper.js';
import { JsonPlaceHolderUser } from '../services/json-place-holder.service.js';
import { JsonPlaceHolderUserDatabase } from '../repositories/userRepository.js';
import { TransformToReqres } from '../data-transformation/reqres-user.js';
import { ReqresUser } from  '../services/reqres.service.js';



class Automation {
    async run() {
        let page = 1;
        let limit = 10;
        let reachLimit = true;

        while(reachLimit) {
            const JsonPlaceHolderUsers = await JsonPlaceHolderUser.listAll({page, limit})   
           // reachLimit = await JsonPlaceHolderUsers.length === limit;
            page++
            console.log(JsonPlaceHolderUsers)
            }
        }}

const AutomationFlow = new Automation();
export { AutomationFlow }
        