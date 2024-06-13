function createRecord() {
    const dob = new Date(2001, 4, 25);
    const data = {
        cf_choosepc: 100050002,
        cf_customerlogicid: "pp-1002",
        cf_fullname: "siddharth",
        cf_phonenumber: 9142389990,
        cf_email: "sidpd@gmail.com",
        cf_education: [2, 3],
        cf_maritalstatus: 0,
        cf_dateofbirth: dob,
        cf_gender: 100050000,
        "cf_practicalparent@odata.bind":"/cf_practicals(51858877-6E29-EF11-840A-6045BDE780D1)",
    };
    Xrm.WebApi.createRecord("cf_practical", data).then(
        function success(data) {
            console.log(`Record Created!`);
            console.log(`Record Type:  ${data.entityType}`);
            console.log(`Record Id:  ${data.id}`);
        },
        function (error) {
            console.log("Error code:" + error.errorCode);
            console.log("Error msg:" + error.message);
        }
    );
}
