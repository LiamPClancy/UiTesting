function basicCashSale(){
    source(findFile("scripts", "commonFunctions.js"));
    loginAdmin()
    add6Items()
    clickButton(waitForObject(":ImPOS.Cash_Button", 6000));
}

function basicEftposSaleWithTips(){
    source(findFile("scripts", "commonFunctions.js"));
    loginAdmin();
    addItems();
    clickButton(waitForObject(":ImPOS.EFTPOS_Button", 6000));
    clickButton(waitForObject(":Tips.2_Button", 6000));
    mouseClick(waitForObject(":Tips.Enter_Button", 6000));
}