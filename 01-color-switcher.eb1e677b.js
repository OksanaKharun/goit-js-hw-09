const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{t.parentNode.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.eb1e677b.js.map