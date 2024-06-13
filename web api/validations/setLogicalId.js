function setLogicalId(executionContext) {
    var formContext = executionContext.getFormContext();
    var lookupField = formContext.getAttribute("cf_practicalparent");
    var LogicalId = formContext.getAttribute("cf_customerlogicid");

    if (lookupField.getValue() !== null) {
        var lookupValue = lookupField.getValue()[0];

        //setting fullname to the lookup name field value
        LogicalId.setValue(lookupValue.name);
    } else {
        LogicalId.setValue(null);
    }
}
