function createAndOpenTabAddItem(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        source(findFile("scripts", "commonFunctions.js"));
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button", 6000));
        clickButton(waitForObject(":Add New Tab_Button", 6000));
        mouseClick(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", 6000), 116, 18, MouseButton.PrimaryButton);
        type(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", 6000), tabName);
        clickButton(waitForObject(":Message.Save and Open_Button", 6000));
        add6Items();
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function openTabWithTabNameAddItems(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        source(findFile("scripts", "commonFunctions.js"));
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button", 6000));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}", 6000));
        openTab(tabName);
        add3Items();
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}



function openTabAndCashOff(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        tabName = tabNamePrefix + i.toString();
        source(findFile("scripts", "commonFunctions.js"));
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button"));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}"));
        openTab(tabName);
        clickButton(waitForObject(":ImPOS.Cash_Button"));
        clickButton(waitForObject(":Message.Continue_Button"));
    }
    
}