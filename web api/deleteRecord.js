function deleteRecord() {
    Xrm.WebApi.deleteRecord(
        "cf_practical",
        "9e9dc264-be29-ef11-840a-6045bde780d1"
    ).then(
        function success(data) {
            console.log(`Record Deleted of Type:  ${data.entityType}`);
            console.log(`Record Deleted with id: ${data.id}`);
        },
        function (error) {
            console.log("Error code:" + error.errorCode);
            console.log("Error msg:" + error.message);
        }
    );
}
deleteRecord()