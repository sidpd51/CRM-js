function setFullName(executionContext) {
    var formContext = executionContext.getFormContext();
    var lookupField = formContext.getAttribute('cf_lookupfield');
    var fullnameField = formContext.getAttribute('cf_textfield');
    
    if (lookupField.getValue() !== null) {
        var lookupValue = lookupField.getValue()[0]; 
        
        //setting fullname to the lookup name field value
        fullnameField.setValue(lookupValue.name);
    } else {
        
        fullnameField.setValue(null);
    }
}
