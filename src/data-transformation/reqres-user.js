class TransformToReqresFormat {
    transform({ jsonPlaceHolderUser }){
      return {
          name: jsonPlaceHolderUser.name + ' ' + jsonPlaceHolderUser.username,
          job: jsonPlaceHolderUser.company.name
      }
    }
}

const TransformToReqres = new TransformToReqresFormat();
export { TransformToReqres }