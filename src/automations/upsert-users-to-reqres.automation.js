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
            const JsonPlaceHolderUsers = await JsonPlaceHolderUser.listAll({
                page, limit
            })

            for (const JsonPlaceHolderUser of JsonPlaceHolderUsers) {
                const JsonPlaceHolderReqresFormat = TransformToReqres.transform({ JsonPlaceHolderUser})
            }
            page++
            reachLimit = JsonPlaceHolderUsers.length === limit;  
        }}
     }

const AutomationFlow = new Automation();

export { AutomationFlow }