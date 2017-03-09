

function main() {
    source(findFile("scripts", "tableFunctions.js"));
    source(findFile("scripts", "strings.js"));
    
  //change these values (see strings.js file) for each concurrent terminal running the test.
    floorPlanTab = floorTab2Text;
    tableNameList = tableNames21;
    
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    
    while(true){
        openUnoccupiedTableAddItems(floorPlanTab, tableNameList);
        openOccupiedTableAndAddItems(floorPlanTab, tableNameList);
        CashOffOccupiedTable(floorPlanTab, tableNameList)
    }
}



