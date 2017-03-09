

function main() {
    source(findFile("scripts", "tabFunctions.js"));
    source(findFile("scripts", "strings.js"));
    
  //change these values (see strings.js file) for each concurrent terminal running the test.
    currentTabNamePrefix = tabNamePrefix1;
    numberOfTabsToCreate = tabsToCreatePerLoop;
    
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    
    while(true){
        createAndOpenTabAddItem(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabAndCashOff(currentTabNamePrefix, numberOfTabsToCreate);
    }
    
}

