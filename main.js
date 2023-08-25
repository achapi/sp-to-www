// ==UserScript==
// @name         sp to www
// @namespace    https://github.com/achapi/sp-to-www
// @version      1.0
// @description  sp.nicovideo.jp → www.nicovideo.jp
// @author       achapi
// @match        sp.nicovideo.jp/*
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var uri = new URL(window.location.href);
    if (uri.hostname == "sp.nicovideo.jp"){
        uri.hostname = "www.nicovideo.jp";
        window.location.href = uri.href;
    }
})();
