/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
System.register(['@angular/core/src/linker/ng_module_factory', './app.module', '@angular/common/src/common_module', '@angular/core/src/application_module', '@angular/platform-browser/src/browser', '@angular/common/src/localization', '@angular/core/src/application_init', '@angular/core/src/testability/testability', '@angular/core/src/application_ref', '@angular/core/src/linker/compiler', '@angular/platform-browser/src/dom/events/hammer_gestures', '@angular/platform-browser/src/dom/events/event_manager', '@angular/platform-browser/src/dom/shared_styles_host', '@angular/platform-browser/src/dom/dom_renderer', '@angular/platform-browser/src/security/dom_sanitization_service', '@angular/core/src/linker/view_utils', '@angular/platform-browser/src/browser/title', './app.component.ngfactory', '@angular/core/src/application_tokens', '@angular/platform-browser/src/dom/events/dom_events', '@angular/platform-browser/src/dom/events/key_events', '@angular/core/src/zone/ng_zone', '@angular/platform-browser/src/dom/debug/ng_probe', '@angular/core/src/console', '@angular/core/src/i18n/tokens', '@angular/core/src/error_handler', '@angular/platform-browser/src/dom/dom_tokens', '@angular/platform-browser/src/dom/animation_driver', '@angular/core/src/render/api', '@angular/core/src/security', '@angular/core/src/change_detection/differs/iterable_differs', '@angular/core/src/change_detection/differs/keyvalue_differs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import2, import3, import4, import5, import6, import7, import8, import9, import10, import11, import12, import13, import14, import15, import16, import18, import19, import20, import21, import22, import23, import24, import25, import26, import27, import28, import29, import30, import31, import32;
    var AppModuleInjector, AppModuleNgFactory;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import2_1) {
                import2 = import2_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            },
            function (import9_1) {
                import9 = import9_1;
            },
            function (import10_1) {
                import10 = import10_1;
            },
            function (import11_1) {
                import11 = import11_1;
            },
            function (import12_1) {
                import12 = import12_1;
            },
            function (import13_1) {
                import13 = import13_1;
            },
            function (import14_1) {
                import14 = import14_1;
            },
            function (import15_1) {
                import15 = import15_1;
            },
            function (import16_1) {
                import16 = import16_1;
            },
            function (import18_1) {
                import18 = import18_1;
            },
            function (import19_1) {
                import19 = import19_1;
            },
            function (import20_1) {
                import20 = import20_1;
            },
            function (import21_1) {
                import21 = import21_1;
            },
            function (import22_1) {
                import22 = import22_1;
            },
            function (import23_1) {
                import23 = import23_1;
            },
            function (import24_1) {
                import24 = import24_1;
            },
            function (import25_1) {
                import25 = import25_1;
            },
            function (import26_1) {
                import26 = import26_1;
            },
            function (import27_1) {
                import27 = import27_1;
            },
            function (import28_1) {
                import28 = import28_1;
            },
            function (import29_1) {
                import29 = import29_1;
            },
            function (import30_1) {
                import30 = import30_1;
            },
            function (import31_1) {
                import31 = import31_1;
            },
            function (import32_1) {
                import32 = import32_1;
            }],
        execute: function() {
            AppModuleInjector = (function (_super) {
                __extends(AppModuleInjector, _super);
                function AppModuleInjector(parent) {
                    _super.call(this, parent, [import18.AppComponentNgFactory], [import18.AppComponentNgFactory]);
                }
                Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_4", {
                    get: function () {
                        if ((this.__LOCALE_ID_4 == null)) {
                            (this.__LOCALE_ID_4 = 'en-US');
                        }
                        return this.__LOCALE_ID_4;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_5", {
                    get: function () {
                        if ((this.__NgLocalization_5 == null)) {
                            (this.__NgLocalization_5 = new import5.NgLocaleLocalization(this._LOCALE_ID_4));
                        }
                        return this.__NgLocalization_5;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_10", {
                    get: function () {
                        if ((this.__ApplicationRef_10 == null)) {
                            (this.__ApplicationRef_10 = this._ApplicationRef__9);
                        }
                        return this.__ApplicationRef_10;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_Compiler_11", {
                    get: function () {
                        if ((this.__Compiler_11 == null)) {
                            (this.__Compiler_11 = new import9.Compiler());
                        }
                        return this.__Compiler_11;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_12", {
                    get: function () {
                        if ((this.__APP_ID_12 == null)) {
                            (this.__APP_ID_12 = import19._appIdRandomProviderFactory());
                        }
                        return this.__APP_ID_12;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_13", {
                    get: function () {
                        if ((this.__DOCUMENT_13 == null)) {
                            (this.__DOCUMENT_13 = import4._document());
                        }
                        return this.__DOCUMENT_13;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_14", {
                    get: function () {
                        if ((this.__HAMMER_GESTURE_CONFIG_14 == null)) {
                            (this.__HAMMER_GESTURE_CONFIG_14 = new import10.HammerGestureConfig());
                        }
                        return this.__HAMMER_GESTURE_CONFIG_14;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_15", {
                    get: function () {
                        if ((this.__EVENT_MANAGER_PLUGINS_15 == null)) {
                            (this.__EVENT_MANAGER_PLUGINS_15 = [
                                new import20.DomEventsPlugin(),
                                new import21.KeyEventsPlugin(),
                                new import10.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_14)
                            ]);
                        }
                        return this.__EVENT_MANAGER_PLUGINS_15;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_EventManager_16", {
                    get: function () {
                        if ((this.__EventManager_16 == null)) {
                            (this.__EventManager_16 = new import11.EventManager(this._EVENT_MANAGER_PLUGINS_15, this.parent.get(import22.NgZone)));
                        }
                        return this.__EventManager_16;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_17", {
                    get: function () {
                        if ((this.__DomSharedStylesHost_17 == null)) {
                            (this.__DomSharedStylesHost_17 = new import12.DomSharedStylesHost(this._DOCUMENT_13));
                        }
                        return this.__DomSharedStylesHost_17;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_18", {
                    get: function () {
                        if ((this.__AnimationDriver_18 == null)) {
                            (this.__AnimationDriver_18 = import4._resolveDefaultAnimationDriver());
                        }
                        return this.__AnimationDriver_18;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_19", {
                    get: function () {
                        if ((this.__DomRootRenderer_19 == null)) {
                            (this.__DomRootRenderer_19 = new import13.DomRootRenderer_(this._DOCUMENT_13, this._EventManager_16, this._DomSharedStylesHost_17, this._AnimationDriver_18));
                        }
                        return this.__DomRootRenderer_19;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_20", {
                    get: function () {
                        if ((this.__RootRenderer_20 == null)) {
                            (this.__RootRenderer_20 = import23._createConditionalRootRenderer(this._DomRootRenderer_19, this.parent.get(import23.NgProbeToken, null)));
                        }
                        return this.__RootRenderer_20;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_21", {
                    get: function () {
                        if ((this.__DomSanitizer_21 == null)) {
                            (this.__DomSanitizer_21 = new import14.DomSanitizerImpl());
                        }
                        return this.__DomSanitizer_21;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_22", {
                    get: function () {
                        if ((this.__Sanitizer_22 == null)) {
                            (this.__Sanitizer_22 = this._DomSanitizer_21);
                        }
                        return this.__Sanitizer_22;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_23", {
                    get: function () {
                        if ((this.__ViewUtils_23 == null)) {
                            (this.__ViewUtils_23 = new import15.ViewUtils(this._RootRenderer_20, this._APP_ID_12, this._Sanitizer_22));
                        }
                        return this.__ViewUtils_23;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_24", {
                    get: function () {
                        if ((this.__IterableDiffers_24 == null)) {
                            (this.__IterableDiffers_24 = import3._iterableDiffersFactory());
                        }
                        return this.__IterableDiffers_24;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_25", {
                    get: function () {
                        if ((this.__KeyValueDiffers_25 == null)) {
                            (this.__KeyValueDiffers_25 = import3._keyValueDiffersFactory());
                        }
                        return this.__KeyValueDiffers_25;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_26", {
                    get: function () {
                        if ((this.__SharedStylesHost_26 == null)) {
                            (this.__SharedStylesHost_26 = this._DomSharedStylesHost_17);
                        }
                        return this.__SharedStylesHost_26;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppModuleInjector.prototype, "_Title_27", {
                    get: function () {
                        if ((this.__Title_27 == null)) {
                            (this.__Title_27 = new import16.Title());
                        }
                        return this.__Title_27;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppModuleInjector.prototype.createInternal = function () {
                    this._CommonModule_0 = new import2.CommonModule();
                    this._ApplicationModule_1 = new import3.ApplicationModule();
                    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
                    this._AppModule_3 = new import1.AppModule();
                    this._ErrorHandler_6 = import4.errorHandler();
                    this._ApplicationInitStatus_7 = new import6.ApplicationInitStatus(this.parent.get(import6.APP_INITIALIZER, null));
                    this._Testability_8 = new import7.Testability(this.parent.get(import22.NgZone));
                    this._ApplicationRef__9 = new import8.ApplicationRef_(this.parent.get(import22.NgZone), this.parent.get(import24.Console), this, this._ErrorHandler_6, this, this._ApplicationInitStatus_7, this.parent.get(import7.TestabilityRegistry, null), this._Testability_8);
                    return this._AppModule_3;
                };
                AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
                    if ((token === import2.CommonModule)) {
                        return this._CommonModule_0;
                    }
                    if ((token === import3.ApplicationModule)) {
                        return this._ApplicationModule_1;
                    }
                    if ((token === import4.BrowserModule)) {
                        return this._BrowserModule_2;
                    }
                    if ((token === import1.AppModule)) {
                        return this._AppModule_3;
                    }
                    if ((token === import25.LOCALE_ID)) {
                        return this._LOCALE_ID_4;
                    }
                    if ((token === import5.NgLocalization)) {
                        return this._NgLocalization_5;
                    }
                    if ((token === import26.ErrorHandler)) {
                        return this._ErrorHandler_6;
                    }
                    if ((token === import6.ApplicationInitStatus)) {
                        return this._ApplicationInitStatus_7;
                    }
                    if ((token === import7.Testability)) {
                        return this._Testability_8;
                    }
                    if ((token === import8.ApplicationRef_)) {
                        return this._ApplicationRef__9;
                    }
                    if ((token === import8.ApplicationRef)) {
                        return this._ApplicationRef_10;
                    }
                    if ((token === import9.Compiler)) {
                        return this._Compiler_11;
                    }
                    if ((token === import19.APP_ID)) {
                        return this._APP_ID_12;
                    }
                    if ((token === import27.DOCUMENT)) {
                        return this._DOCUMENT_13;
                    }
                    if ((token === import10.HAMMER_GESTURE_CONFIG)) {
                        return this._HAMMER_GESTURE_CONFIG_14;
                    }
                    if ((token === import11.EVENT_MANAGER_PLUGINS)) {
                        return this._EVENT_MANAGER_PLUGINS_15;
                    }
                    if ((token === import11.EventManager)) {
                        return this._EventManager_16;
                    }
                    if ((token === import12.DomSharedStylesHost)) {
                        return this._DomSharedStylesHost_17;
                    }
                    if ((token === import28.AnimationDriver)) {
                        return this._AnimationDriver_18;
                    }
                    if ((token === import13.DomRootRenderer)) {
                        return this._DomRootRenderer_19;
                    }
                    if ((token === import29.RootRenderer)) {
                        return this._RootRenderer_20;
                    }
                    if ((token === import14.DomSanitizer)) {
                        return this._DomSanitizer_21;
                    }
                    if ((token === import30.Sanitizer)) {
                        return this._Sanitizer_22;
                    }
                    if ((token === import15.ViewUtils)) {
                        return this._ViewUtils_23;
                    }
                    if ((token === import31.IterableDiffers)) {
                        return this._IterableDiffers_24;
                    }
                    if ((token === import32.KeyValueDiffers)) {
                        return this._KeyValueDiffers_25;
                    }
                    if ((token === import12.SharedStylesHost)) {
                        return this._SharedStylesHost_26;
                    }
                    if ((token === import16.Title)) {
                        return this._Title_27;
                    }
                    return notFoundResult;
                };
                AppModuleInjector.prototype.destroyInternal = function () {
                    this._ApplicationRef__9.ngOnDestroy();
                };
                return AppModuleInjector;
            }(import0.NgModuleInjector));
            exports_1("AppModuleNgFactory", AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule));
        }
    }
});
//# sourceMappingURL=app.module.ngfactory.js.map