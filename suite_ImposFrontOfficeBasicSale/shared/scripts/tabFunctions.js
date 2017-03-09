function createAndOpenTabAddItem(tabNamePrefix, loopLimit){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button", timeOutValueMS));
        var editTabclicked = false;
        while(!editTabclicked){
            clickButton(waitForObject(":Add New Tab_Button", timeOutValueMS));
            try{
                mouseClick(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", timeOutValueMS), 116, 18, MouseButton.PrimaryButton);
                editTabclicked = true;
            }catch(err){
                editTabclicked = false;
            }
        }
        type(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit", timeOutValueMS), tabName);
        var tabOpened = false
        while(!tabOpened){
            clickButton(waitForObject(":Message.Save and Open_Button", timeOutValueMS));
            try{
                clickButton(waitForObject(":Message.Save and Open_Button", timeOutValueMS));
            }catch(err){
                tabOpened = true;
            }
        }
        add6Items();
        clickButton(waitForObject(":ImPOS.Send Order_Button", timeOutValueMS));
    }
}

function openTabWithTabNameAddItems(tabNamePrefix, loopLimit){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button", timeOutValueMS));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}", timeOutValueMS));
        openTab(tabName);
        add3Items();
        clickButton(waitForObject(":ImPOS.Send Order_Button", timeOutValueMS));
    }
}



function openTabAndCashOff(tabNamePrefix, loopLimit){
    source(findFile("scripts", "strings.js"));
    source(findFile("scripts", "commonFunctions.js"));
    for (i = 0; i < loopLimit; i++){
        tabName = tabNamePrefix + i.toString();
        tabName = tabNamePrefix + i.toString();
        loginAdmin();
        clickButton(waitForObject(":ImPOS.Recall_Button", timeOutValueMS));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}", timeOutValueMS));
        openTab(tabName);
        clickButton(waitForObject(":ImPOS.Cash_Button", timeOutValueMS));
        clickButton(waitForObject(":Message.Continue_Button", timeOutValueMS));
    }
    
}