function updateRecord() {
    const dob = new Date(2001, 4, 25);
    debugger
    const data = {
        "cf_choosepc": 100050002,
        "cf_customerlogicid": "pp-1004",
        "cf_fullname": "Abhinav",
        "cf_phonenumber": "9142381990",
        "cf_email": "abhinav@gmail.com",
        "cf_educationinfo": "1,2",
        "cf_maritalstatus": true,
        "cf_dateofbirth": dob.toISOString(),
        "cf_gender": 100050000,
        "cf_PracticalParent@odata.bind": "/cf_practicalparents(16081cd0-6e29-ef11-840a-6045bde780d1)"
    };


    Xrm.WebApi.createRecord("cf_practical", data, "21c401a2-b929-ef11-840a-6045bde780d1").then(
        function success(data) {
            console.log(`Record Updated!`);
            console.log(data);
            console.log(`Record Type:  ${data.entityType}`);
            console.log(`Record Id:  ${data.id}`);
        },
        function (error) {
            console.log("Error code:" + error.errorCode);
            console.log("Error msg:" + error.message);
        }
    );
}
updateRecord()