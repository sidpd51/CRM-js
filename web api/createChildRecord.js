function createRecord() {
    const dob = new Date(2001, 4, 25);
    debugger
    const data = {
        "cf_choosepc": 100050002,
        "cf_customerlogicid": "pp-1004",
        "cf_fullname": "rahulshah",
        "cf_phonenumber": "9142381990",
        "cf_email": "rahul@gmail.com",
        "cf_educationinfo": "1,2",
        "cf_maritalstatus": true,
        "cf_dateofbirth": dob.toISOString(),
        "cf_gender": 100050000,
        "cf_parentname": {
            
        }
    };


    Xrm.WebApi.createRecord("cf_practical", data).then(
        function success(data) {
            console.log(`Record Created!`);
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
createRecord()