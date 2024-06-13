function validatePhoneNumber(executionContext) {
    var formContext = executionContext.getFormContext();

    var phoneNumberAttr = formContext.getAttribute("cf_phonenumber");
    var phoneNumberControl = formContext.getControl("cf_phonenumber");

    phoneNumberControl.clearNotification("phoneCheck");

    if (phoneNumberAttr) {
        let phoneNumber = phoneNumberAttr.getValue();
        if (phoneNumber && !phoneNumber.startsWith("91")) {
            phoneNumberControl.setNotification(
                "Phone number must start with '91'.",
                "phoneCheck"
            );
        }
    }
}
