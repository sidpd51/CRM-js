function RetriveSingleRecord(executionContext){
    
    Xrm.WebApi.retrieveRecord("cf_practical", "b2ceb56e-8729-ef11-840a-6045bde780d1", "?$select=cf_fullname,cf_gender,cf_email").then(
        function success(result) {
            console.log(result)
            // perform operations on record retrieval
        },
        function (error) {
            console.log(error.message);
            // handle error conditions
        }
    );
}