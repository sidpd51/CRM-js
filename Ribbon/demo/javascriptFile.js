function openModalDialog() {
    var pageInput = {
        pageType: "webresource",
        webresourceName: "cft_htmlfile",
    };

    var navigationOptions = {
        target: 2, // 2 is for opening as a dialog
        width: 600, // width of the dialog
        height: 400, // height of the dialog
        position: 1, // 1 is for centering the dialog
    };

    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function () {
            var accountId = Xrm.Page.data.entity
            .getId()
            .replace("{", "")
            .replace("}", "");

        var query =
            "?$select=name,createdon&$filter=_parentaccountid_value eq " +
            accountId +
            " and statecode eq 0";

            Xrm.WebApi.retrieveMultipleRecords("opportunity", query).then(
                function (result) {
                    let opportunityTableBody = document.getElementById("opportunityTableBody");
                        result.entities.forEach((opportunity, index) => {
                            let row = document.createElement("tr");
                            row.innerHTML = `
                                <th scope="row">${index + 1}</th>
                                <td>${opportunity.name}</td>
                                <td>${opportunity.statecode}</td>
                                <td>${opportunity.actualvalue ? opportunity.actualvalue.toLocaleString() : ''}</td>
                            `;
                            opportunityTableBody.appendChild(row);
                        });
                        console.log(result);
                },
                function (error) {
                    console.error(error.message);
                }
            );
            console.log("Dialog closed");
        },
        function (error) {
            console.log(error.message);
        }
    );
}
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
            })