function basicCashSale(){
    clickButton(waitForObject(":1_Button", 6000));
    clickButton(waitForObject(":3_Button", 6000));
    doubleClick(waitForObject(":0_Button", 6000));
    clickButton(waitForObject(":Log In_Button", 6000));
    source(findFile("scripts", "commonFunctions.js"));
    add6Items()
    clickButton(waitForObject(":ImPOS.Cash_Button", 6000));
}

function basicEftposSaleWithTips(){
    clickButton(waitForObject(":1_Button", 6000));
    clickButton(waitForObject(":3_Button", 6000));
    doubleClick(waitForObject(":0_Button", 6000));
    clickButton(waitForObject(":Log In_Button", 6000));
    source(findFile("scripts", "commonFunctions.js"));
    addItems()
    clickButton(waitForObject(":ImPOS.EFTPOS_Button", 6000));
    clickButton(waitForObject(":Tips.2_Button", 6000));
    mouseClick(waitForObject(":Tips.Enter_Button", 6000));
}