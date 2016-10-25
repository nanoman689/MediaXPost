import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';

// App module factory created from offline (AoT) compiler
import { AppModuleNgFactory } from './app.module.ngfactory';

const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);
