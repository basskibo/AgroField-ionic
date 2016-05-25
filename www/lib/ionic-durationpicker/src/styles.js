(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".idp-control {\n" +
"  min-width: 52px;\n" +
"  min-height: 37px;\n" +
"  text-align: center;\n" +
"  font-size: 20px;\n" +
"  line-height: 32px;\n" +
"}\n" +
"\n" +
".idp-control-arrow {\n" +
"  width: 100%;\n" +
"}\n" +
"\n" +
".idp-control-arrow > .icon::before {\n" +
"  margin-top: 6px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
"\n" +
".idp-unit-box {\n" +
"  border: 1px solid #dddddd;\n" +
"}\n" +
"\n" +
".idp-unit-separator {\n" +
"  padding-top: 44px !important;\n" +
"  font-weight: bold;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".idp-dir-rtl {\n" +
"  direction: rtl !important;\n" +
"}"));
