function main() {
    source(findFile("scripts", "normalOrderFunctions.js"));
    source(findFile("scripts", "tabFunctions.js"));
    source(findFile("scripts", "tableFunctions.js"));
    source(findFile("scripts", "strings.js"));
    
    //change these values (see strings.js file) for each concurrent terminal running the test.
    floorPlanTab = floorTab1Text;
    tableNameList = tableNames11;
    currentTabNamePrefix = tabNamePrefix1;
    numberOfTabsToCreate = tabsToCreatePerLoop;
    
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    
    while(true){
        basicCashSale();
        basicEftposSaleWithTips();
        
        openUnoccupiedTableAddItems(floorPlanTab, tableNameList);
        openOccupiedTableAndAddItems(floorPlanTab, tableNameList);
        CashOffOccupiedTable(floorPlanTab, tableNameList)
        
        createAndOpenTabAddItem(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabAndCashOff(currentTabNamePrefix, numberOfTabsToCreate);
    }
    
}