!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){t.parentNode.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.594c6f2c.js.map