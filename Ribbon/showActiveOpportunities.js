var ShowActiveOpportunities = {
    showPopup: function () {
        var accountId = Xrm.Page.data.entity
            .getId()
            .replace("{", "")
            .replace("}", "");

        var query =
            "?$select=name,createdon&$filter=_parentaccountid_value eq " +
            accountId +
            " and statecode eq 0";
        var entityPluralName = "opportunity";

        Xrm.WebApi.retrieveMultipleRecords(entityPluralName, query).then(
            function success(result) {
                if (result.entities.length > 0) {
                    // Prepare parameters for the custom web resource
                    var params = {
                        data: result.entities,
                    };

                    // Navigate to the custom web resource
                    var pageInput = {
                          
                        pageType: "webresource",
                        webresourceName: "cft_new_showactiveopportunities.html",
                        data: params,
                    };

                    Xrm.Navigation.navigateTo(pageInput);
                } else {
                    alert("No active opportunities found for this account.");
                }
            },
            function (error) {
                console.error(
                    "Error retrieving opportunities: " + error.message
                );
            }
        );
    },
};
