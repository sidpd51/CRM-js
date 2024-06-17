function openModalDialog(accountId) {
    var pageInput = {
        pageType: "webresource",
        webresourceName: "cft_modalHtmlSource",
    };

    var navigationOptions = {
        target: 2, // 2 is for opening as a dialog
        width: 600, // width of the dialog
        height: 400, // height of the dialog
        position: 1, // 1 is for centering the dialog
    };

    localStorage.setItem("accountid", accountId);

    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function () {
            console.log("Dialog opened");
        },
        function (error) {
            console.log(error.message);
        }
    );
}
