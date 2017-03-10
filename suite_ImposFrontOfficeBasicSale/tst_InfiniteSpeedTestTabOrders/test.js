

function main() {
    source(findFile("scripts", "tabFunctions.js"));
    source(findFile("scripts", "strings.js"));
    
  //change these values (see strings.js file) for each concurrent terminal running the test.
    currentTabNamePrefix = tabNamePrefix1;
    numberOfTabsToCreate = 2;
    
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button", timeOutValueMS));
    
    while(true){
        createAndOpenTabAddItem(currentTabNamePrefix, numberOfTabsToCreate);
        openTabWithTabNameAddItems(currentTabNamePrefix, numberOfTabsToCreate);
        openTabAndCashOff(currentTabNamePrefix, numberOfTabsToCreate);
    }
    
}

