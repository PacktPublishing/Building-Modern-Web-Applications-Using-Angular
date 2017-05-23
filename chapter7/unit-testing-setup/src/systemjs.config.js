(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/',
      'ng:': 'node_modules/@angular/'
    },
    map: {
      'app': 'app',
      '@angular/animations': 'ng:animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'ng:animations/bundles/animations-browser.umd.js',
      '@angular/core': 'ng:core/bundles/core.umd.js',
      '@angular/common': 'ng:common/bundles/common.umd.js',
      '@angular/compiler': 'ng:compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'ng:platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'ng:platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'ng:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'ng:http/bundles/http.umd.js',
      '@angular/router': 'ng:router/bundles/router.umd.js',
      '@angular/router/upgrade': 'ng:router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'ng:forms/bundles/forms.umd.js',
      'rxjs': 'node_modules/rxjs'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
