function RetriveSingleRecord(executionContext){
    const formContext = executionContext.getFormContext()
    const recordId = formContext.data.entity.getId()

    Xrm.WebApi.retriveRecord
}