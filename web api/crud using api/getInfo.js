function onSaveFunc(executionContext) {
    debugger;
    let formContext = executionContext.getFormContext();

    let fullName = formContext.getAttribute("cf_fullname").getValue();
    let phoneNumber = formContext.getAttribute("cf_phonenumber").getValue();
    let email = formContext.getAttribute("cf_email").getValue();
    let education = formContext.getAttribute("cf_education").getValue();
    let maritalStatus = formContext.getAttribute("cf_maritalstatus").getValue();
    let choosePc = formContext.getAttribute("cf_choosepc").getValue();
    let dob = formContext.getAttribute("cf_dateofbirth").getValue();
    let gender = formContext.getAttribute("cf_gender").getValue();
    let customerName = formContext
        .getAttribute("cf_practicalparent")
        .getValue();
    let customerLogicalId = formContext
        .getAttribute("cf_customerlogicid")
        .getValue();

    let obj = {
        fullName,
        phoneNumber,
        email,
        education,
        maritalStatus,
        choosePc,
        dob,
        gender,
        customerName,
        customerLogicalId,
    };

    console.log(obj);
}
