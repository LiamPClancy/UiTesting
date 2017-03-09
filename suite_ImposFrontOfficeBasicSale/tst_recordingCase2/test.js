function main() {
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    clickButton(waitForObject(":1_Button"));
    clickButton(waitForObject(":3_Button"));
    doubleClick(waitForObject(":0_Button"));
    clickButton(waitForObject(":Log In_Button"));
    clickButton(waitForObject(":ImPOS.Log Out_Button"));
    clickButton(waitForObject(":1_Button"));
    test.vp("VP1");
}
