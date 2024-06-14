function RetriveSingleRecord(executionContext){
    Xrm.WebApi.retrieveRecord("cf_practical", "b2ceb56e-8729-ef11-840a-6045bde780d1", "?$select=cf_fullname,cf_gender,cf_email&$expand=cf_PracticalParent($select=cf_parentname,cf_practicalparentid,createdon)").then(
        function success(result) {
            console.log(result)
        },
        function (error) {
            console.log(error.message);
        }
    );
}

Xrm.WebApi.retrieveRecord("cf_practicalparent", "17081cd0-6e29-ef11-840a-6045bde780d1", "?$select=cf_parentname,createdon&$expand=cf_practical_PracticalParent_cf_practicalparent($select=cf_fullname,cf_gender,cf_email)").then(
    function success(result) {
        console.log(result)
    },
    function (error) {
        console.log(error.message);
    }
);

Xrm.WebApi.retrieveRecord("cf_practicalparent", "17081cd0-6e29-ef11-840a-6045bde780d1",
    "?$select=cf_parentname,createdon&$expand=cf_practical_PracticalParent_cf_practicalparent($select=cf_fullname,cf_gender,cf_email;$filter=cf_gender eq 100050000)").then(
    function success(result) {
        console.log(result)
    },
    function (error) {
        console.log(error.message);
    }
);

;$filter=cf_PracticalParent/cf_gender eq 100050000;$orderby=cf_fullname desc;$top=5.





// Replace with the GUID of the account you want to retrieve opportunities for
var accountId = "83883308-7ad5-ea11-a813-000d3a33f3b4"; 

// Define the query options
var query = "?$select=opportunityid,name,estimatedvalue,closeprobability&$filter=_parentaccountid_value eq " + accountId;

// Perform the retrieveMultipleRecords request
Xrm.WebApi.retrieveMultipleRecords("opportunity", query).then(
    function success(result) {
        // Iterate through the retrieved opportunities
        for (var i = 0; i < result.entities.length; i++) {
            var opportunity = result.entities[i];
            console.log("Opportunity ID: " + opportunity["opportunityid"]);
            console.log("Opportunity Name: " + opportunity["name"]);
            console.log("Estimated Value: " + opportunity["estimatedvalue"]);
            console.log("Close Probability: " + opportunity["closeprobability"]);
            console.log("---");
        }
        console.log("Total opportunities retrieved: " + result.entities.length);
    },
    function(error) {
        console.error("Error retrieving opportunities: " + error.message);
    }
);
