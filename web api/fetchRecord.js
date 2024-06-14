function fetchActiveRecord() {
    // Define the account ID for which you want to retrieve opportunities
    var accountId = "2f250de7-6e23-ef11-840a-7c1e520efa10"; // Replace with your account ID

    // Define the query options
    var query =
        "?$select=opportunityid,name,estimatedvalue,estimatedclosedate&$filter=statecode eq 0 and customerid/accountid eq " +
        accountId;

    // Perform the retrieveMultipleRecords request
    Xrm.WebApi.retrieveMultipleRecords("opportunity", query).then(
        function success(result) {
            // Iterate through the retrieved opportunities
            for (var i = 0; i < result.entities.length; i++) {
                var opportunity = result.entities[i];
                console.log("Opportunity ID: " + opportunity["opportunityid"]);
                console.log("Opportunity Name: " + opportunity["name"]);
                console.log(
                    "Estimated Value: " + opportunity["estimatedvalue"]
                );
                console.log(
                    "Estimated Close Date: " + opportunity["estimatedclosedate"]
                );
                console.log("---"); 
            }
            console.log(
                "Total active opportunities retrieved: " +
                    result.entities.length
            );
        },
        function (error) {
            console.error("Error retrieving opportunities: " + error.message);
        }
    );
    
}
