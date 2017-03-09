function createAndOpenTabAddItem(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        clickButton(waitForObject(":1_Button", 6000));
        clickButton(waitForObject(":3_Button", 6000));
        doubleClick(waitForObject(":0_Button", 6000));
        clickButton(waitForObject(":Log In_Button", 6000));
        clickButton(waitForObject(":ImPOS.Recall_Button", 6000));
        clickButton(waitForObject(":Add New Tab_Button", 6000));
        mouseClick(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", 6000), 116, 18, MouseButton.PrimaryButton);
        type(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", 6000), tabName);
        clickButton(waitForObject(":Message.Save and Open_Button", 6000));
        source(findFile("scripts", "commonFunctions.js"));
        add6Items()
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}

function openTabWithTabNameAddItems(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        clickButton(waitForObject(":1_Button", 6000));
        clickButton(waitForObject(":3_Button", 6000));
        doubleClick(waitForObject(":0_Button", 6000));
        clickButton(waitForObject(":Log In_Button", 6000));
        clickButton(waitForObject(":ImPOS.Recall_Button", 6000));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}", 6000));
        mouseClick(waitForObject(":Search:_Edit", 6000), 64, 25, MouseButton.PrimaryButton);
        type(waitForObject(":Search:_Edit", 6000), tabName);
        mouseClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject", 6000));
        clickButton(waitForObject(":Open_Button", 6000));
        source(findFile("scripts", "commonFunctions.js"));
        add3Items()
        clickButton(waitForObject(":ImPOS.Send Order_Button", 6000));
    }
}



function openTabAndCashOff(tabNamePrefix, loopLimit){
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        tabName = tabNamePrefix + i.toString();
        clickButton(waitForObject(":1_Button"));
        clickButton(waitForObject(":3_Button"));
        doubleClick(waitForObject(":0_Button"));
        clickButton(waitForObject(":Log In_Button"));
        clickButton(waitForObject(":ImPOS.Recall_Button"));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}"));
        mouseClick(waitForObject(":Search:_Edit"), 64, 25, MouseButton.PrimaryButton);
        type(waitForObject(":Search:_Edit"), tabName);
        mouseClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject", 6000));
        clickButton(waitForObject(":Open_Button", 6000));
        clickButton(waitForObject(":ImPOS.Cash_Button"));
        clickButton(waitForObject(":Message.Continue_Button"));
    }
    
}