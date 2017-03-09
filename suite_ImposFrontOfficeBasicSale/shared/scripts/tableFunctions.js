function openUnoccupiedTableAddItems(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        clickButton(waitForObject(":1_Button", 6000));
        clickButton(waitForObject(":3_Button", 6000));
        doubleClick(waitForObject(":0_Button", 6000));
        clickButton(waitForObject(":Log In_Button", 6000));
        clickButton(waitForObject(":ImPOS.Lockers_Button", 6000));
        mouseClick(waitForObject("{type='TabItem' text='" + floorPlanTab +"'}", 6000));
        doubleClick(waitForObject("{container={type='TabItem' text='" + floorPlanTab + "'} type='Button' text='" + tableName + "'}", 6000));
        clickButton(waitForObject(":Covers.2_Button", 6000));
        mouseClick(waitForObject(":Covers.Enter_Button", 6000));
        source(findFile("scripts", "commonFunctions.js"));
        addItems()
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function openOccupiedTableAndAddItems(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        clickButton(waitForObject(":1_Button", 6000));
        clickButton(waitForObject(":3_Button", 6000));
        doubleClick(waitForObject(":0_Button", 6000));
        clickButton(waitForObject(":Log In_Button", 6000));
        clickButton(waitForObject(":ImPOS.Lockers_Button", 6000));
        mouseClick(waitForObject("{type='TabItem' text='" + floorPlanTab +"'}", 6000));
        doubleClick(waitForObject("{container={type='TabItem' text='" + floorPlanTab + "'} type='Button' text='" + tableName + "'}", 6000));
        source(findFile("scripts", "commonFunctions.js"));
        addItems()
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function CashOffOccupiedTable(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        clickButton(waitForObject(":1_Button"));
        clickButton(waitForObject(":3_Button"));
        doubleClick(waitForObject(":0_Button"));
        clickButton(waitForObject(":Log In_Button"));
        clickButton(waitForObject(":ImPOS.Lockers_Button"));
        mouseClick(waitForObject("{type='TabItem' text='" + floorPlanTab +"'}"));
        doubleClick(waitForObject("{container={type='TabItem' text='" + floorPlanTab + "'} type='Button' text='" + tableName + "'}"));
        clickButton(waitForObject(":ImPOS.Cash_Button"));
    }
}