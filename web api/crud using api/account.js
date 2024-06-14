// Define the filter criteria (e.g., retrieving accounts with a specific name)
var accountName = "2f250de7-6e23-ef11-840a-7c1e520efa10"; 

// Define the query options
var query = "?$select=accountid,name,revenue,numberofemployees&$filter=name eq '" + accountName + "'";

// Perform the retrieveMultipleRecords request
Xrm.WebApi.retrieveMultipleRecords("account", query).then(
    function success(result) {
        // Iterate through the retrieved accounts
        for (var i = 0; i < result.entities.length; i++) {
            var account = result.entities[i];
            console.log("Account ID: " + account["accountid"]);
            console.log("Account Name: " + account["name"]);
            console.log("Revenue: " + account["revenue"]);
            console.log("Number of Employees: " + account["numberofemployees"]);
            console.log("---");
        }
        console.log("Total accounts retrieved: " + result.entities.length);
    },
    function(error) {
        console.error("Error retrieving accounts: " + error.message);
    }
);
