function validateDob(executionContext) {
    let formContext = executionContext.getFormContext();

    let dobAttr = formContext.getAttribute("cf_datefield");
    let dobControl = formContext.getControl("cf_datefield");
    dobControl.clearNotification("dobCheck");
    if (dobAttr) {
        let birthdate = dobAttr.getValue();
        if (birthdate) {
            let age = calculateAge(birthdate);
            if (age < 18) {
                dobControl.setNotification("Min age should be 18!", "dobCheck");
            }
        }
    }
}

function calculateAge(birthdate) {
    let today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDifference = today.getMonth() - birthdate.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthdate.getDate())
    ) {
        age--;
    }
    return age;
}
