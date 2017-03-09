function addItems(){
    clickButton(waitForObject(":ImPOS.Entry_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button", 6000));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", 6000));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", 6000));
    clickButton(waitForObject(":ImPOS.Accessories_Button", 6000));
    clickButton(waitForObject(":ImPOS.Douche_Button", 6000));
    clickButton(waitForObject(":ImPOS.Mouth Wash_Button", 6000));
    clickButton(waitForObject(":ImPOS.Towel_Button", 6000));
    clickButton(waitForObject(":ImPOS.Beer/Wines_Button", 6000));
    clickButton(waitForObject(":ImPOS.Beer of the Week_Button", 6000));
    clickButton(waitForObject(":ImPOS.Corona_Button", 6000));
    clickButton(waitForObject(":ImPOS.Cascade Light_Button", 6000));
    clickButton(waitForObject(":ImPOS.Drinks_Button", 6000));
    clickButton(waitForObject(":ImPOS.Coffee Lrg_Button", 6000));
    clickButton(waitForObject(":ImPOS.Coffee Reg_Button", 6000));
    clickButton(waitForObject(":ImPOS.Mocha_Button", 6000));
    clickButton(waitForObject(":ImPOS.Snacks_Button", 6000));
    clickButton(waitForObject(":ImPOS.Cake/Slice_Button", 6000));
    clickButton(waitForObject(":ImPOS.Ham  Cheese Cross_Button", 6000));
    clickButton(waitForObject(":ImPOS.Chips_Button", 6000));
}

function add3Items(){
    clickButton(waitForObject(":ImPOS.Entry_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button", 6000));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", 6000));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", 6000));
}

function add6Items(){
    clickButton(waitForObject(":ImPOS.Entry_Button"));
    clickButton(waitForObject(":ImPOS.Pie_Button", 6000));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", 6000));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", 6000));
    clickButton(waitForObject(":ImPOS.Accessories_Button", 6000));
    clickButton(waitForObject(":ImPOS.Douche_Button", 6000));
    clickButton(waitForObject(":ImPOS.Mouth Wash_Button", 6000));
    clickButton(waitForObject(":ImPOS.Towel_Button", 6000));
}

function loginAdmin(){
    var loggedIn = false;
    while(!loggedIn){
        try {
            type(waitForObject(":FrontOffice_Edit"), "1300");
            clickButton(waitForObject(":Log In_Button", 6000));
            loggedIn = true;
        }
        catch(err) {
            loggedIn = false;
        }
    }
    
    
}

function LoginUser(){
    var loggedIn = false;
    while(!loggedIn){
        try {
            type(waitForObject(":FrontOffice_Edit"), "1300");
            clickButton(waitForObject(":Log In_Button", 6000));
            loggedIn = true;
        }
        catch(err) {
            loggedIn = false;
        }
    }
}

function openTab(TabName){
    var tabOpened = false;
    while(!tabOpened){
        try{
            mouseClick(waitForObject(":Search:_Edit"), 64, 25, MouseButton.PrimaryButton);
            type(waitForObject(":Search:_Edit", 6000), tabName);
            if (object.exists(":Impos.Common.DataObjects.CheckAccessObject_ListItem")){
                throw "search did not produce exclusive results";
            }
            mouseClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject", 6000));
            clickButton(waitForObject(":Open_Button", 6000));
            tabOpened = true;
        }catch(err){
            for(i = 0; i<tabName.length; i++){
                mouseClick(waitForObject(":Search:_Edit"), 64, 25, MouseButton.PrimaryButton);
                type(waitForObject(":Search:_Edit"), "<Backspace>");
            }
            tabOpened = false;
        }
    }
}


function openTable(floorName, tableName){
    clickButton(waitForObject(":ImPOS.Lockers_Button", 6000));
    mouseClick(waitForObject("{type='TabItem' text='" + floorName +"'}", 6000));
    doubleClick(waitForObject("{container={type='TabItem' text='" + floorName + "'} type='Button' text='" + tableName + "'}", 6000));
}