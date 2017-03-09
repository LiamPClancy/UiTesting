//floor plan tabs
function main() {
    source(findFile("scripts", "normalOrderFunctions.js"));
    
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    
    while(true){
        basicCashSale();
        basicEftposSaleWithTips();
    }
    
    
}




