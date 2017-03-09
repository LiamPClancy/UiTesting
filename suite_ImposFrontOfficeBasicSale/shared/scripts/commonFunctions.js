function addItems(){
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
    clickButton(waitForObject(":ImPOS.Pie_Button", 6000));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", 6000));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", 6000));
}

function add6Items(){
    clickButton(waitForObject(":ImPOS.Pie_Button", 6000));
    clickButton(waitForObject(":ImPOS.357 House Red_Button", 6000));
    clickButton(waitForObject(":ImPOS.doshiiTest_Button", 6000));
    clickButton(waitForObject(":ImPOS.Accessories_Button", 6000));
    clickButton(waitForObject(":ImPOS.Douche_Button", 6000));
    clickButton(waitForObject(":ImPOS.Mouth Wash_Button", 6000));
    clickButton(waitForObject(":ImPOS.Towel_Button", 6000));
}

function loginAdmin(){
    clickButton(waitForObject(":1_Button", 6000));
    clickButton(waitForObject(":3_Button", 6000));
    doubleClick(waitForObject(":0_Button", 6000));
    clickButton(waitForObject(":Log In_Button", 6000));
}

function LoginUser(){
    clickButton(waitForObject(":1_Button", 6000));
    clickButton(waitForObject(":Log In_Button", 6000));
}