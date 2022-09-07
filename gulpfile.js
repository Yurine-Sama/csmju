const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
    .src("dist/js/*.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * CSMJU | Computer Science MJU by Hop Team
      =========================================================
      
      * Product Page CSMJU 2021
      * Copyright 2021 Creative Tim 
      * Licensed under MIT 
      * Tailwind Starter Kit Page
      
      * Coded by HOP Team
      
      =========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp
    .src("dist/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

      =========================================================
      * CSMJU | Computer Science MJU by Hop Team
      =========================================================
      
      * Product Page CSMJU 2021
      * Copyright 2021 Creative Tim 
      * Licensed under MIT 
      * Tailwind Starter Kit Page
      
      * Coded by HOP Team
      
      =========================================================
-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("dist/css/*.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * CSMJU | Computer Science MJU by Hop Team
      =========================================================
      
      * Product Page CSMJU 2021
      * Copyright 2021 Creative Tim 
      * Licensed under MIT 
      * Tailwind Starter Kit Page
      
      * Coded by HOP Team
      
      =========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
