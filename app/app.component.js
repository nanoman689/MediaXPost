System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.decorators = [
                    { type: core_1.Component, args: [{
                                selector: 'my-app',
                                template: '<h1>My First Angular App</h1>'
                            },] },
                ];
                /** @nocollapse */
                AppComponent.ctorParameters = [];
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map