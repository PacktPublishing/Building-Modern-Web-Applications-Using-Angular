(function (global) {
  System.config({
    paths: {
      'ng:': 'node_modules/@angular/'
    },
    map: {
      '@angular/core': 'ng:core/bundles/core.umd.js',
      '@angular/common': 'ng:common/bundles/common.umd.js',
      '@angular/compiler': 'ng:compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'ng:platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'ng:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      'rxjs': 'node_modules/rxjs'
    },
    packages: {
      src: {
        main: 'main',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);

