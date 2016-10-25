System.register(['@angular/core', '@angular/platform-browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule.decorators = [
                    { type: core_1.NgModule, args: [{
                                imports: [platform_browser_1.BrowserModule],
                                declarations: [app_component_1.AppComponent],
                                bootstrap: [app_component_1.AppComponent]
                            },] },
                ];
                /** @nocollapse */
                AppModule.ctorParameters = [];
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map