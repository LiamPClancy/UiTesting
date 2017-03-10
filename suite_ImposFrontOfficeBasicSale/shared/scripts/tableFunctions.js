function openUnoccupiedTableAddItems(floorPlanTab, tableNames){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            clickButton(waitForObject(":Covers.2_Button", timeOutValueMS));
            mouseClick(waitForObject(":Covers.Enter_Button", timeOutValueMS));
        }catch(err){
            
        }
        addItems();
        sendOrder();
    }
}

function openOccupiedTableAndAddItems(floorPlanTab, tableNames){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            addItems();
        }catch(err){
            clickButton(waitForObject(":Covers.2_Button", timeOutValueMS));
            mouseClick(waitForObject(":Covers.Enter_Button", timeOutValueMS));
            addItems();
        }
        sendOrder();
    }
}

function CashOffOccupiedTable(floorPlanTab, tableNames){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    
    for(i=0; i < tableNames.length; i++){
        tableName = tableNames[i];
        loginAdmin();
        openTable(floorPlanTab, tableName);
        try{
            clickButton(waitForObject(":ImPOS.Cash_Button", timeOutValueMS));
        }catch(err){
            try{
                openTableFloorPlan(floorName, tableName);
            }catch(err){
                clickButton(waitForObject(":Covers.2_Button", timeOutValueMS));
                mouseClick(waitForObject(":Covers.Enter_Button", timeOutValueMS));
                addItems();
                clickButton(waitForObject(":ImPOS.Cash_Button", timeOutValueMS));
            }
        }
    }
}