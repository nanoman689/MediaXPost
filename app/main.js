System.register(['@angular/platform-browser', './app.module.ngfactory'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_1, app_module_ngfactory_1;
    var platform;
    return {
        setters:[
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_module_ngfactory_1_1) {
                app_module_ngfactory_1 = app_module_ngfactory_1_1;
            }],
        execute: function() {
            platform = platform_browser_1.platformBrowser();
            platform.bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
        }
    }
});
//# sourceMappingURL=main.js.map