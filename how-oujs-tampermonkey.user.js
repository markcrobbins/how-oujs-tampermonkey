// ==UserScript==
// @name         how-oujs-tampermonkey
// @namespace    http://mrobbinsassoc.com/
// @version      0.1
// @description  This script is a template example
// @author       MarkCRobbins
// @license      MIT
// @copyright    2020, MarkCRobbins (https://openuserjs.org/users/MarkCRobbins)
//
// @updateURL    https://openuserjs.org/meta/MarkCRobbins/how-oujs-tampermonkey.meta.js
// @downloadURL  https://openuserjs.org/install/MarkCRobbins/how-oujs-tampermonkey.user.js
//
// @match        http*://checkvist.com/*
//
// @require      https://code.jquery.com/jquery-3.5.1.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/qtip2/3.0.3/basic/jquery.qtip.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.js
// @require      https://raw.githubusercontent.com/markcrobbins/how-oujs-tampermonkey/master/required.js
//
// @resource     styleCSS https://raw.githubusercontent.com/markcrobbins/how-oujs-tampermonkey/master/style.css
//
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';
  const Module = 'how-oujs-tampermonkey';
  console.log('Module:' + Module);
  const styleCssTxt  = GM_getResourceText("styleCSS");
  GM_addStyle(styleCssTxt);
})();


