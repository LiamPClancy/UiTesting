function main() {
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Recall_Button"));
    clickButton(waitForObject(":Open_Button"));
    clickButton(waitForObject(":Message.Continue_Button"));
    mouseClick(waitForObjectItem(":_List", "Impos.Common.DataObjects.CheckAccessObject"));
    clickButton(waitForObject(":Open_Button"));
}
