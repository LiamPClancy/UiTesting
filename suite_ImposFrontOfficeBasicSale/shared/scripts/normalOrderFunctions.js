function basicCashSale(){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    loginAdmin();
    add6Items();
    cashOffOrder();
}

function basicEftposSaleWithTips(){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    loginAdmin();
    addItems();
    clickButton(waitForObject(":ImPOS.EFTPOS_Button", timeOutValueMS));
    clickButton(waitForObject(":Tips.2_Button", timeOutValueMS));
    mouseClick(waitForObject(":Tips.Enter_Button", timeOutValueMS));
}