function main() {
    startApplication("FrontOffice");
    clickButton(waitForObject(":Message.Continue_Button"));
    clickButton(waitForObject(":C_Button"));
    type(waitForObject(":FrontOffice_Edit"), "1300");
    clickButton(waitForObject(":Log In_Button"));
}
