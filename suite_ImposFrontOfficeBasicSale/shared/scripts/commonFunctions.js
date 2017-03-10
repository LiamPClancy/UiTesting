function addItems(){
    source(findFile("scripts", "strings.js"));
    clickButton(waitForObject(":ImPOS.Entry_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Pie_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Accessories_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Douche_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Mouth Wash_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Towel_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Beer/Wines_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Beer of the Week_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Corona_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Cascade Light_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Drinks_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Coffee Lrg_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Coffee Reg_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Mocha_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Snacks_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Cake/Slice_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Ham  Cheese Cross_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Chips_Button", timeOutValueMS));
}

function add3Items(){
    source(findFile("scripts", "strings.js"));
    clickButton(waitForObject(":ImPOS.Entry_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Pie_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", timeOutValueMS));
}

function add6Items(){
    source(findFile("scripts", "strings.js"));
    clickButton(waitForObject(":ImPOS.Entry_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Pie_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Accessories_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Douche_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Mouth Wash_Button", timeOutValueMS));
    clickButton(waitForObject(":ImPOS.Towel_Button", timeOutValueMS));
}

function loginAdmin(){
    source(findFile("scripts", "strings.js"));
    var loggedIn = false;
    while(!loggedIn){
        clickButton(waitForObject(":C_Button"));
        type(waitForObject(":FrontOffice_Edit", timeOutValueMS), "1300");
        clickButton(waitForObject(":Log In_Button", timeOutValueMS));
        try{
            waitForObject(":ImPOS.Entry_Button", timeOutValueMS);
            loggedIn = true;
        }catch(err){
            loggedIn = false;
        }
    }
}

function LoginUser(){
    source(findFile("scripts", "strings.js"));
    var loggedIn = false;
    while(!loggedIn){
        clickButton(waitForObject(":C_Button"));
        type(waitForObject(":FrontOffice_Edit", timeOutValueMS), "1300");
        clickButton(waitForObject(":Log In_Button", timeOutValueMS));
        try{
            waitForObject(":ImPOS.Entry_Button", timeOutValueMS);
            loggedIn = true;
        }catch(err){
            loggedIn = false;
        }
    }
}

function openTab(TabName){
    source(findFile("scripts", "strings.js"));
    var tabOpened = false;
    while(!tabOpened){
        try{
            type(waitForObject(":Search:_Edit", timeOutValueMS), tabName);
            snooze(1);
            if (object.exists(":Impos.Common.DataObjects.CheckAccessObject_ListItem")){
                throw "search did not produce exclusive results";
            }
            mouseClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject", timeOutValueMS));
            clickButton(waitForObject(":Open_Button", timeOutValueMS));
            try{
                clickButton(waitForObject(":Message.Continue_Button"));
                for(i = 0; i<tabName.length; i++){
                    type(waitForObject(":Search:_Edit", timeOutValueMS), "<Backspace>");
                };
                tabOpened = false;
            }catch(err){
                //nothing needs to happen, this is the expected path.
                tabOpened = true;
            }
            if (tabOpened){
                try{
                    //try to see if the menu is visible
                    waitForObject(":ImPOS.Entry_Button", timeOutValueMS);
                    tabOpened = true;
                }catch(err){
                    tabOpened = false;
                }
            }
            
        }catch(err){
            for(i = 0; i<tabName.length; i++){
                type(waitForObject(":Search:_Edit", timeOutValueMS), "<Backspace>");
            };
            tabOpened = false;
        }
    }
}


function openTable(floorName, tableName){
    source(findFile("scripts", "strings.js"));
    clickButton(waitForObject(":ImPOS.Lockers_Button", timeOutValueMS));
    openTableFloorPlan(floorName, tableName);
}

function openTableFloorPlan(floorName, tableName){
    source(findFile("scripts", "strings.js"));
    mouseClick(waitForObject("{type='TabItem' text='" + floorName +"'}", timeOutValueMS));
    doubleClick(waitForObject("{container={type='TabItem' text='" + floorName + "'} type='Button' text='" + tableName + "'}", timeOutValueMS));
 
}

function sendOrder(){
    var hasLoggedOut = false;
    while(!hasLoggedOut){
        try{
            clickButton(waitForObject(":ImPOS.Send Order_Button", timeOutValueMS));
            waitForObject(":FrontOffice_Edit", timeOutValueMS)
            hasLoggedOut = true;
        }catch(err){
            hasLoggedOut = false;
        }
    }
}

function cashOffOrder(){
    var hasLoggedOut = false;
    while(!hasLoggedOut){
        try{
            clickButton(waitForObject(":ImPOS.Cash_Button", timeOutValueMS));
            waitForObject(":FrontOffice_Edit", timeOutValueMS)
            hasLoggedOut = true;
        }catch(err){
            hasLoggedOut = false;
        }
    }
}