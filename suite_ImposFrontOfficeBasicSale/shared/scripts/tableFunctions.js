function openUnoccupiedTableAddItems(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        source(findFile("scripts", "commonFunctions.js"));
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            clickButton(waitForObject(":Covers.2_Button", 6000));
            mouseClick(waitForObject(":Covers.Enter_Button", 6000));
        }catch(err){
            
        }
        addItems();
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function openOccupiedTableAndAddItems(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        source(findFile("scripts", "commonFunctions.js"));
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            addItems();
        }catch(err){
            clickButton(waitForObject(":Covers.2_Button", 6000));
            mouseClick(waitForObject(":Covers.Enter_Button", 6000));
            addItems();
        }
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function CashOffOccupiedTable(floorPlanTab, tableNames){
    for(i=0; i < tableNames.length; i++){
        source(findFile("scripts", "commonFunctions.js"));
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            clickButton(waitForObject(":ImPOS.Cash_Button"));
        }catch(err){
            clickButton(waitForObject(":Covers.2_Button", 6000));
            mouseClick(waitForObject(":Covers.Enter_Button", 6000));
            addItems();
            clickButton(waitForObject(":ImPOS.Cash_Button"));
        }
        
    }
}