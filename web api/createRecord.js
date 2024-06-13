function createRecord(){
    const data = {
        
    }
    Xrm.WebApi.createRecord(entityLogicalName, data).then(
        function success(data){
            console.log(`Record Created!`)
            console.log(`Record Type:  ${data.entityType}`)
            console.log(`Record Id:  ${data.id}`)
        },
        function (error) {
            console.log('Error code:' +error.errorCode)
            console.log('Error msg:' +error.message)
        }
    )
}