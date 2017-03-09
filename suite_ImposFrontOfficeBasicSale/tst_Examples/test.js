function main() {
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    for (i=0; i<10;i++){
        basicCashSale();
        basicEftposSaleWithTips();
    }
}

function basicCashSale(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Cash_Button"));
}

function basicEftposSaleWithTips(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.EFTPOS_Button"));
    clickButton(waitForObject(":Tips.2_Button"));
    mouseClick(waitForObject(":Tips.Enter_Button"));
}

function openUnoccupiedTableAddItem(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Lockers_Button"));
    doubleClick(waitForObject(":1 - 80.1_Button"));
    clickButton(waitForObject(":Covers.2_Button"));
    mouseClick(waitForObject(":Covers.Enter_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function openOccupiedTableAddItem(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Lockers_Button"));
    doubleClick(waitForObject(":1 - 80.1_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function createNormalOrderAndSend(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function addToNormalOrderAndSend(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    mouseClick(waitForObject(":ImPOS.Recall_Button"));
    //this line opens the first checkAccessObject in the list
    doubleClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject"));
    //this line opens the second checkAccessObject in the list
    //doubleClick(waitForObject(":Impos.Common.DataObjects.CheckAccessObject_ListItem"));
    //this line opens the fourth checkAccessObject in the list. 
    //doubleClick(waitForObject(":Impos.Common.DataObjects.CheckAccessObject_ListItem_3"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function createAndOpenTabAddItem(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Recall_Button"));
    clickButton(waitForObject(":Add New Tab_Button"));
    type(waitForObject(":Message.System.Windows.Controls.TextBlock_Edit"), "FirstTab");
    clickButton(waitForObject(":Message.Save_Button"));
    mouseClick(waitForObject(":Impos.Common.DataObjects.CheckAccessObject.$0.00_Label"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function openTabAddItem(){
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Recall_Button"));
    mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}"));
    doubleClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject"));
    clickButton(waitForObject(":ImPOS.Pie_Button"));
    clickButton(waitForObject(":ImPOS.Send Order_Button"));
}

function openTabWithTabName(){
    var tabPrefix = 'My Tab '
    for (i = 1; i < 3; i++){
        tabName = tabPrefix + i.toString();
        clickButton(waitForObject(":1_Button"));
        clickButton(waitForObject(":3_Button"));
        doubleClick(waitForObject(":0_Button"));
        clickButton(waitForObject(":Log In_Button"));
        clickButton(waitForObject(":ImPOS.Recall_Button"));
        mouseClick(waitForObject("{container={type='WPFControl' name='btn_ShowTabs'} type='Label' name='TopLabel' text='Tabs'}"));
        mouseClick(waitForObject(":Search:_Edit"), 64, 25, MouseButton.PrimaryButton);
        type(waitForObject(":Search:_Edit"), tabName);
        doubleClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject"));
        clickButton(waitForObject(":ImPOS.Pie_Button"));
        clickButton(waitForObject(":ImPOS.Send Order_Button"));
    }
}

function openExistingTableAndAddItems(){
    floorTab1Text = '1 - 80';
    floorTab2Text = '81 - 160';
    floorTab3Text = '161 - 240';
    floorTab4Text = '241 - 280';
    
    tableNames1 = ['1','2','3','4','5']
    tableNames2 = ['81','82','83','84','85']
    tableNames2 = ['161','162','163','164','165']
    tableNames2 = ['241','242','243','244','245']
    
    for(i=0; i < tableNames1.length; i++){
        tableName = tableNames1[i];
        clickButton(waitForObject(":1_Button"));
        clickButton(waitForObject(":3_Button"));
        doubleClick(waitForObject(":0_Button"));
        clickButton(waitForObject(":Log In_Button"));
        clickButton(waitForObject(":ImPOS.Lockers_Button"));
        mouseClick(waitForObject("{type='TabItem' text='1 - 80'}"));
        doubleClick(waitForObject("{container={type='TabItem' text='1 - 80'} type='Button' text='" + tableName + "'}"));
        clickButton(waitForObject(":ImPOS.Pie_Button"));
        clickButton(waitForObject(":ImPOS.Send Order_Button"));
    }
}





