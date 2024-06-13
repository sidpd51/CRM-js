

function tabLogic(executionContext) {
    const formContext = executionContext.getFormContext();

    let multiselect = formContext.getAttribute("cf_education");

    if (multiselect) {
        let multiselectValues = multiselect.getValue();

        // Check if the value is not null or empty
        if (multiselectValues) {
            // Show or hide tabs based on the selected values
            formContext.ui.tabs.get("tab_2").setVisible(multiselectValues.includes(1));
            formContext.ui.tabs.get("tab_3").setVisible(multiselectValues.includes(2));
            formContext.ui.tabs.get("tab_4").setVisible(multiselectValues.includes(3));
        } else {
            // Hide all tabs if no value is selected
            formContext.ui.tabs.get("tab_2").setVisible(false);
            formContext.ui.tabs.get("tab_3").setVisible(false);
            formContext.ui.tabs.get("tab_4").setVisible(false);
        }
    } else {
        // Hide all tabs if the multiselect attribute is not available
        formContext.ui.tabs.get("tab_2").setVisible(false);
        formContext.ui.tabs.get("tab_3").setVisible(false);
        formContext.ui.tabs.get("tab_4").setVisible(false);
    }
}

