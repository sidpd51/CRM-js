var Navigate = {

    HideButtonFromOtherPlaces: function(primaryControl) {
        "use strict";
        if (primaryControl !== null && primaryControl.getControl('ActiveCases') !== null) {
            return false;
        }
    },

    navigateToOpportunities: function(primaryControl) {
        // Ensure the primaryControl is not null
        if (primaryControl !== null) {
            // Get the current account ID
            var accountId = primaryControl.data.entity.getId().replace("{", "").replace("}", "");

            // Define the URL to navigate to the Opportunities view filtered by the account
            var url = Xrm.Page.context.getClientUrl() + 
                      "/main.aspx?appid=" + Xrm.Utility.getGlobalContext().appId +
                      "&pagetype=entitylist&etn=opportunity&viewid={00000000-0000-0000-00AA-000010001006}&filter=parentaccountid eq " + accountId + " and statecode eq 0";

            // Open the URL in a new window or dialog
            var windowOptions = {
                openInNewWindow: true
            };

            Xrm.Navigation.openUrl(url, windowOptions);
        } else {
            console.error("primaryControl is null.");
        }
    }
};
