function RetriveMultipleRecord(){
    Xrm.WebApi.retrieveMultipleRecords("cf_practical","?$select=cf_fullname,cf_gender,cf_email&$top=5").then(
        function success(result){
            for(let i =0; i<result.entities.length; i++){
                console.log(result.entities[i])
            }
        },
        function (error){
            console.log(`ErrorCode: ${error.errorCode}`)
            console.log(`ErrorMsg: ${error.message}`)
        }
    )
}


//using filter in records
Xrm.WebApi.retrieveMultipleRecords("cf_practical","?$select=cf_fullname,cf_gender,cf_email&$filter=cf_gender eq 100050000&$orderby=cf_fullname desc&$top=5").then(
    function success(result){
        for(let i =0; i<result.entities.length; i++){
            console.log(result.entities[i])
        }
    },
    function (error){
        console.log(`ErrorCode: ${error.errorCode}`)
        console.log(`ErrorMsg: ${error.message}`)
    }
)



