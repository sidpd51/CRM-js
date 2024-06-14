Xrm.WebApi.retrieveRecord("account", "83883308-7ad5-ea11-a813-000d3a33f3b4", "?$select=name,numberofemployees,creditlimit,address1_city,address1_stateorprovince,address1_country").then(
    function success(result) {
        console.log(result)
        // perform operations on record retrieval

    },
    function (error) {
        console.log(error.message);
        // handle error conditions
    }
);

Xrm.WebApi.retrieveRecord("account", "83883308-7ad5-ea11-a813-000d3a33f3b4").then(
    function success(result) {
        console.log(result)
        // perform operations on record retrieval

    },
    function (error) {
        console.log(error.message);
        // handle error conditions
    }
);