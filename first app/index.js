function onSaveFunc(executionContext) {
    debugger;
    let formContext = executionContext.getFormContext();

    let text = formContext.getAttribute("cf_textfield").getValue();
    let date = formContext.getAttribute("cf_datefield").getValue();
    let datetime = formContext.getAttribute("cf_datetimefield").getValue();
    let Phone = formContext.getAttribute("cf_PhoneNumber").getValue();
    let relationshipStatus = formContext
        .getAttribute("cf_relationshipstatus")
        .getValue();
    let multiselect = formContext
        .getAttribute("cf_multiselectfield")
        .getValue();
    let lookup = formContext.getAttribute("cf_lookupfield").getValue();

    let obj = {
        text,
        date,
        datetime,
        multiselect,
        lookup,
        relationshipStatus,
        Phone,
    };

    console.log(obj);
}

function onLoadFunc(executionContext) {
    debugger;
    let dateValue = new Date(2024, 5, 15);
    let dateTimeValue = new Date(2023, 5, 15, 16, 30);

    let formContext = executionContext.getFormContext();

    //set simple text
    formContext
        .getAttribute("cf_textfield")
        .setValue("this is seventh text field value");

    //set date and time value
    setDateTimeField(formContext, "cf_textfield", dateValue);
    setDateTimeField(formContext, "cf_datetimefield", dateTimeValue);

    //set relationship status
    formContext.getAttribute("cf_relationshipstatus").setValue(3);

    //set phone number 
    formContext.getAttribute("")
}

function setDateTimeField(formContext, attributeName, dateValue) {
    formContext.getAttribute(attributeName).setValue(dateValue);
}
