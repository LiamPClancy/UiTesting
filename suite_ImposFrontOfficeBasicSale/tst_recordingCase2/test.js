function main() {
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Recall_Button"));
    mouseClick(waitForObject(":Search:_Edit"), 92, 29, MouseButton.PrimaryButton);
    clickButton(waitForObject(":btn_ShowTabs_Button"));
    mouseClick(waitForObject(":Search:_Edit"), 69, 18, MouseButton.PrimaryButton);
    type(waitForObject(":Search:_Edit"), "my tab 1");
    mouseClick(waitForObject(":Impos.Common.DataObjects.CheckAccessObject_ListItem_4"));
    clickButton(waitForObject(":Open_Button"));
}
