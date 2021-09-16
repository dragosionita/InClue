window.inclue={dom:{app:document.createElement("div"),magnifier:document.createElement("div")},data:{options:[{name:"seizure",title:"Seizure Safe Profilea",subTitle:"Eliminates flashes and redusec color",description:"This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations."},{name:"vision",title:"Vision Impaired Profile",subTitle:"Enhances the website's visuals",description:" This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others. "},{name:"adhd",title:"Cognitive Disability Profile",subTitle:"Assists with reading and focusing",description:" This profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements of the website more easily. "}],checkedOptions:[],colorOptions:[{name:"monochrome",title:"Monochrome"},{name:"lightContrast",title:"Light Contrast"}],checkedColorOptions:[],contentOptions:[{name:"magnifier",title:"Text Magnifier"},{name:"center",title:"Align Center"}],checkedContentOptions:[],orientationOptions:[{name:"cursorBlack",title:"Big Black Cursor"},{name:"cursorWhite",title:"Big White Cursor"}],checkedOrientationColorOptions:[]},handleOption:function(M,i){(0,window.inclue.features[M])(i)},features:{seizure:function(M){M?document.documentElement.classList.add("icl-desaturate"):document.documentElement.classList.remove("icl-desaturate")},zoom:function(M){if(M)for(var i=document.body.childNodes,N=0;N<i.length;N++)console.log("elements[i].tagName",i[N].tagName),"DIV"!=i[N].tagName||i[N].classList.contains("inclue-app")||(i[N].style.zoom=1.1131);else for(i=document.body.childNodes,N=0;N<i.length;N++)"DIV"==i[N].tagName&&(i[N].style.zoom=1)},vision:function(M){M?(document.documentElement.classList.add("icl-saturation-contrast"),document.body.classList.add("icl-readable-font"),window.inclue.features.zoom(!0)):(document.documentElement.classList.remove("icl-saturation-contrast"),document.body.classList.remove("icl-readable-font"),window.inclue.features.zoom(!1))},adhd:function(M){M?document.documentElement.classList.add("icl-emphasize-links"):document.documentElement.classList.remove("icl-emphasize-links")},magnifier:function(M){var i=document.querySelector(".icl-tooltip");document.addEventListener("mousemove",function(M){setTimeout(function(){if("P"==M.target.tagName&&M.target.firstChild.nodeValue.trim().length>2){console.log("aa",M.target.firstChild.nodeValue);var N=M.clientX,j=M.clientY;i.style.display="block",i.style.top=j+"px",i.style.left=N+"px",i.innerHTML=M.target.firstChild.nodeValue}else i.style.display="none"},500)},!1)}},init:function(M){this.loadVendors()},loadVendors:function(){var M=document.createElement("script"),i=document.body?document.body:document.querySelector("head");M.src="https://unpkg.com/alpinejs",M.async=!0,M.onload=function(){inclue.start()},i.appendChild(M)},start:function(){this.dom.app.innerHTML='<div x-data="{ open: false}">\n  <div class="inclue-trigger" @click="open = !open">\n    <img class="widget-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOThweCIgaGVpZ2h0PSI5OHB4IiB2aWV3Qm94PSIwIDAgOTggOTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+V2lkZ2V0PC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaWRnZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAtMTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiNGRkZGRkYiIGN4PSI0OCIgY3k9IjYxIiByPSI0OCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiMwMDQ4RkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iNy43Nzc3MSIgeT0iMjEuMTExMzI4IiB3aWR0aD0iODAuMDAyMiIgaGVpZ2h0PSI3OS45OTk4IiByeD0iMzkuOTk5OSI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNNTEuMjAyMzEsNDkuMzg2NzI4IEM1My40NjIxMSw0Ny4xMjY5MjggNTMuNDYyMTEsNDMuNDYyOTI4IDUxLjIwMjMxLDQxLjIwMzEyOCBDNDguOTQyNDEsMzguOTQzMjI4IDQ1LjI3ODUxLDM4Ljk0MzIyOCA0My4wMTg3MSw0MS4yMDMxMjggQzQwLjc1ODgxLDQzLjQ2MjkyOCA0MC43NTg4MSw0Ny4xMjY5MjggNDMuMDE4NzEsNDkuMzg2NzI4IEM0NS4yNzg1MSw1MS42NDY1MjggNDguOTQyNDEsNTEuNjQ2NTI4IDUxLjIwMjMxLDQ5LjM4NjcyOCBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4wNzM5MSw1MS44MTQyMjggQzUyLjg1ODYxLDUzLjg4NjkyOCA0MS4zNTgzMSw1My44ODY5MjggMzAuMTQyOTEsNTEuODE0MjI4IEMyOS45MTg5MSw1MS43NzAyMjggMjkuNjg4MzEsNTEuNzcxNDI4IDI5LjQ2NDcxLDUxLjgxNzcyOCBDMjkuMjQxMTEsNTEuODY0MDI4IDI5LjAyOTAxLDUxLjk1NDQyOCAyOC44NDA4MSw1Mi4wODM4MjggQzI4LjY1MjcxLDUyLjIxMzIyOCAyOC40OTIyMSw1Mi4zNzg4MjggMjguMzY4OTEsNTIuNTcxMDI4IEMyOC4yNDU3MSw1Mi43NjMyMjggMjguMTYyMDEsNTIuOTc4MDI4IDI4LjEyMjgxLDUzLjIwMzAyOCBDMjguMDgwMzEsNTMuNDI2OTI4IDI4LjA4MjUxLDUzLjY1NzEyOCAyOC4xMjk1MSw1My44ODAxMjggQzI4LjE3NjQxLDU0LjEwMzIyOCAyOC4yNjcwMSw1NC4zMTQ3MjggMjguMzk2MTEsNTQuNTAyNTI4IEMyOC41MjUzMSw1NC42OTA0MjggMjguNjkwMzEsNTQuODUwNzI4IDI4Ljg4MTgxLDU0Ljk3NDQyOCBDMjkuMDczMzEsNTUuMDk4MTI4IDI5LjI4NzMxLDU1LjE4MjYyOCAyOS41MTE2MSw1NS4yMjMxMjggQzMzLjMwOTgxLDU1LjkyMTgyOCAzNy4xNDY0MSw1Ni4zOTI2MjggNDEuMDAwODEsNTYuNjMyOTI4IEM0MS4zNzQwMSw1Ni42NTg3MjggNDEuNzM4MDEsNTYuNzYwMjI4IDQyLjA3MDcxLDU2LjkzMTIyOCBDNDIuNDAzMzEsNTcuMTAyMjI4IDQyLjY5NzcxLDU3LjMzOTEyOCA0Mi45MzU5MSw1Ny42Mjc1MjggQzQzLjE3NDExLDU3LjkxNTkyOCA0My4zNTExMSw1OC4yNDk3MjggNDMuNDU2MjEsNTguNjA4NzI4IEM0My41NjEyMSw1OC45Njc3MjggNDMuNTkyMTEsNTkuMzQ0MzI4IDQzLjU0NzAxLDU5LjcxNTYyOCBMNDMuMjEwMzEsNjIuNjA5MDI4IEM0Mi42OTgzMSw2Ny4xNjMzMjggNDEuNjM4NTEsNzEuNjM5MTI4IDQwLjA1MzkxLDc1LjkzOTQyOCBMMzcuOTQ5NzEsODEuNTY4MzI4IEMzNy43ODc4MSw4MS45OTk0MjggMzcuODAzOTEsODIuNDc3MTI4IDM3Ljk5NDMxLDgyLjg5NjQyOCBDMzguMTg0NzEsODMuMzE1NzI4IDM4LjUzMzkxLDgzLjY0MjIyOCAzOC45NjUwMSw4My44MDQwMjggQzM5LjM5NjExLDgzLjk2NTkyOCAzOS44NzM4MSw4My45NDk4MjggNDAuMjkzMTEsODMuNzU5NDI4IEM0MC43MTI0MSw4My41NjkwMjggNDEuMDM4OTEsODMuMjE5OTI4IDQxLjIwMDcxLDgyLjc4ODcyOCBMNDEuNzE2MzEsODEuNzM2NjI4IEM0My4zOTk3MSw3OC4xNDg5MjggNDQuOTY3MzEsNzQuNDc3MDI4IDQ2LjM5ODIxLDcwLjc2MjkyOCBDNDYuNDU1MDEsNzAuNjE2NTI4IDQ2LjU1NDcxLDcwLjQ5MDcyOCA0Ni42ODQyMSw3MC40MDE5MjggQzQ2LjgxMzgxLDcwLjMxMzIyOCA0Ni45NjcyMSw3MC4yNjU3MjggNDcuMTI0MjEsNzAuMjY1NzI4IEM0Ny4yODEyMSw3MC4yNjU3MjggNDcuNDM0NjEsNzAuMzEzMjI4IDQ3LjU2NDIxLDcwLjQwMTkyOCBDNDcuNjkzNzEsNzAuNDkwNzI4IDQ3Ljc5MzQxLDcwLjYxNjUyOCA0Ny44NTAyMSw3MC43NjI5MjggQzQ5LjI4MTExLDc0LjQ3NzAyOCA1MC44NDg3MSw3OC4xMjc4MjggNTIuNTMyMTEsODEuNzQ3MTI4IEw1My4wNjg3MSw4Mi44OTM5MjggQzUzLjE5ODgxLDgzLjIwMTEyOCA1My40MTUxMSw4My40NjM5MjggNTMuNjkxNTEsODMuNjUwNjI4IEM1My45Njc4MSw4My44MzczMjggNTQuMjkyNDEsODMuOTQwMDI4IDU0LjYyNTkxLDgzLjk0NjEyOCBDNTQuODMxMTEsODMuOTQ0NDI4IDU1LjAzNDQxLDgzLjkwNTIyOCA1NS4yMjU2MSw4My44MzAzMjggQzU1LjQ0MjYxLDgzLjc1NTAyOCA1NS42NDI0MSw4My42MzcyMjggNTUuODEzMjEsODMuNDgzNzI4IEM1NS45ODQxMSw4My4zMzAxMjggNTYuMTIyNjEsODMuMTQ0MDI4IDU2LjIyMDYxLDgyLjkzNjMyOCBDNTYuMzE4NjEsODIuNzI4NTI4IDU2LjM3NDExLDgyLjUwMzMyOCA1Ni4zODM5MSw4Mi4yNzM4MjggQzU2LjM5MzcxLDgyLjA0NDMyOCA1Ni4zNTc2MSw4MS44MTUyMjggNTYuMjc3NzEsODEuNTk5ODI4IEw1NC4xNzM0MSw3NS45NzEwMjggQzUyLjU5NDAxLDcxLjY2OTEyOCA1MS41MzQ0MSw2Ny4xOTM5MjggNTEuMDE3MTEsNjIuNjQwNTI4IEw1MC42OTA5MSw1OS43MjYyMjggQzUwLjY0NzMxLDU5LjM1NjIyOCA1MC42Nzk0MSw1OC45ODEzMjggNTAuNzg1MjEsNTguNjI0MTI4IEM1MC44OTExMSw1OC4yNjcwMjggNTEuMDY4NTEsNTcuOTM1MTI4IDUxLjMwNjcxLDU3LjY0ODcyOCBDNTEuNTQ0OTEsNTcuMzYyMzI4IDUxLjgzODgxLDU3LjEyNzQyOCA1Mi4xNzA3MSw1Ni45NTgyMjggQzUyLjUwMjUxLDU2Ljc4ODkyOCA1Mi44NjU0MSw1Ni42ODkwMjggNTMuMjM3MTEsNTYuNjY0NTI4IEM1Ny4wNTkyMSw1Ni40MjYxMjggNjAuODY0MDEsNTUuOTYyNDI4IDY0LjYzMTYxLDU1LjI3NTcyOCBDNjUuMDQ5MTEsNTUuMjA0ODI4IDY1LjQyODgxLDU0Ljk5MDUyOCA2NS43MDUzMSw1NC42Njk4MjggQzY1Ljk4MTgxLDU0LjM0OTEyOCA2Ni4xMzc5MSw1My45NDIwMjggNjYuMTQ2NjEwNSw1My41MTg2MjggQzY2LjE0NjYxMDUsNTMuMjYyMDI4IDY2LjA5MDExLDUzLjAwODUyOCA2NS45ODA2MSw1Mi43NzY0MjggQzY1Ljg3MTExLDUyLjU0NDMyOCA2NS43MTE1MSw1Mi4zMzk0MjggNjUuNTEzMzEsNTIuMTc2NDI4IEM2NS4zMTUwMSw1Mi4wMTM0MjggNjUuMDgzMTEsNTEuODk2MzI4IDY0LjgzNDIxLDUxLjgzMzcyOCBDNjQuNTg1NDEsNTEuNzcxMTI4IDY0LjMyNTcxLDUxLjc2NDQyOCA2NC4wNzM5MSw1MS44MTQyMjggWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuOTk0NzEsNjEuMTEwNjI4IEMxMi45OTQ3MSw4MC4yOTcxMjggMjguNTkxMjEsOTUuODkzMTI4IDQ3Ljc3ODMxLDk1Ljg5MzEyOCBDNjYuOTY1NDEsOTUuODkzMTI4IDgyLjU2MTkxLDgwLjI5NzEyOCA4Mi41NjE5MSw2MS4xMTA2MjggQzgyLjU2MTkxLDQxLjkyNDEyOCA2Ni45NjU0MSwyNi4zMjgxMjggNDcuNzc4MzEsMjYuMzI4MTI4IEMyOC41OTEyMSwyNi4zMjgxMjggMTIuOTk0NzEsNDEuOTI0MTI4IDEyLjk5NDcxLDYxLjExMDYyOCBaIE0xNS4yMzg5MSw2MS4xMTAyMjggQzE1LjIzODkxLDQzLjE1NzkyOCAyOS44MjU1MSwyOC41NzE3MjggNDcuNzc4MzEsMjguNTcxNzI4IEM2NS43MzExMSwyOC41NzE3MjggODAuMzE3ODEsNDMuMTU3OTI4IDgwLjMxNzgxLDYxLjExMDIyOCBDODAuMzE3ODEsNzkuMDYyNDI4IDY1LjczMTExLDkzLjY0ODYyOCA0Ny43NzgzMSw5My42NDg2MjggQzI5LjgyNTUxLDkzLjY0ODYyOCAxNS4yMzg5MSw3OS4wNjI0MjggMTUuMjM4OTEsNjEuMTEwMjI4IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNDcuNzc4MzEsOTUuNjE1MzI4IEMyOC43NDQ3MSw5NS42MTUzMjggMTMuMjcyNTEsODAuMTQzNzI4IDEzLjI3MjUxLDYxLjExMDYyOCBMMTIuNzE3MDEsNjEuMTEwNjI4IEMxMi43MTcwMSw4MC40NTA1MjggMjguNDM3ODEsOTYuMTcwOTI4IDQ3Ljc3ODMxLDk2LjE3MDkyOCBMNDcuNzc4MzEsOTUuNjE1MzI4IFogTTgyLjI4NDExLDYxLjExMDYyOCBDODIuMjg0MTEsODAuMTQzNzI4IDY2LjgxMjAxLDk1LjYxNTMyOCA0Ny43NzgzMSw5NS42MTUzMjggTDQ3Ljc3ODMxLDk2LjE3MDkyOCBDNjcuMTE4ODEsOTYuMTcwOTI4IDgyLjgzOTcxLDgwLjQ1MDUyOCA4Mi44Mzk3MSw2MS4xMTA2MjggTDgyLjI4NDExLDYxLjExMDYyOCBaIE00Ny43NzgzMSwyNi42MDU5MjggQzY2LjgxMjAxLDI2LjYwNTkyOCA4Mi4yODQxMSw0Mi4wNzc1MjggODIuMjg0MTEsNjEuMTEwNjI4IEw4Mi44Mzk3MSw2MS4xMTA2MjggQzgyLjgzOTcxLDQxLjc3MDcyOCA2Ny4xMTg4MSwyNi4wNTAzMjggNDcuNzc4MzEsMjYuMDUwMzI4IEw0Ny43NzgzMSwyNi42MDU5MjggWiBNMTMuMjcyNTEsNjEuMTEwNjI4IEMxMy4yNzI1MSw0Mi4wNzc1MjggMjguNzQ0NzEsMjYuNjA1OTI4IDQ3Ljc3ODMxLDI2LjYwNTkyOCBMNDcuNzc4MzEsMjYuMDUwMzI4IEMyOC40Mzc4MSwyNi4wNTAzMjggMTIuNzE3MDEsNDEuNzcwNzI4IDEyLjcxNzAxLDYxLjExMDYyOCBMMTMuMjcyNTEsNjEuMTEwNjI4IFogTTQ3Ljc3ODMxLDI4LjI5MzkyOCBDMjkuNjcyMTEsMjguMjkzOTI4IDE0Ljk2MTExLDQzLjAwNDUyOCAxNC45NjExMSw2MS4xMTAyMjggTDE1LjUxNjYxLDYxLjExMDIyOCBDMTUuNTE2NjEsNDMuMzExMzI4IDI5Ljk3ODkxLDI4Ljg0OTUyOCA0Ny43NzgzMSwyOC44NDk1MjggTDQ3Ljc3ODMxLDI4LjI5MzkyOCBaIE04MC41OTU2MSw2MS4xMTAyMjggQzgwLjU5NTYxLDQzLjAwNDUyOCA2NS44ODQ1MSwyOC4yOTM5MjggNDcuNzc4MzEsMjguMjkzOTI4IEw0Ny43NzgzMSwyOC44NDk1MjggQzY1LjU3NzcxLDI4Ljg0OTUyOCA4MC4wNDAwMSw0My4zMTEzMjggODAuMDQwMDEsNjEuMTEwMjI4IEw4MC41OTU2MSw2MS4xMTAyMjggWiBNNDcuNzc4MzEsOTMuOTI2NDI4IEM2NS44ODQ1MSw5My45MjY0MjggODAuNTk1NjEsNzkuMjE1ODI4IDgwLjU5NTYxLDYxLjExMDIyOCBMODAuMDQwMDEsNjEuMTEwMjI4IEM4MC4wNDAwMSw3OC45MDkwMjggNjUuNTc3NzEsOTMuMzcwOTI4IDQ3Ljc3ODMxLDkzLjM3MDkyOCBMNDcuNzc4MzEsOTMuOTI2NDI4IFogTTE0Ljk2MTExLDYxLjExMDIyOCBDMTQuOTYxMTEsNzkuMjE1ODI4IDI5LjY3MjExLDkzLjkyNjQyOCA0Ny43NzgzMSw5My45MjY0MjggTDQ3Ljc3ODMxLDkzLjM3MDkyOCBDMjkuOTc4OTEsOTMuMzcwOTI4IDE1LjUxNjYxLDc4LjkwOTAyOCAxNS41MTY2MSw2MS4xMTAyMjggTDE0Ljk2MTExLDYxLjExMDIyOCBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="Enable InClue Widget">\n  </div>\n  <div class="inclue-widget" x-show="open" x-transition @click.outside="open = false">\n    <div class="inclue-widget-header">\n      <h2>Accessibility Adjustments</h2>\n    </div>\n    <div class="inclue-widget-body" x-data="window.inclue.data">\n      <div x-data class="icl-section-card">\n        <h3 class="icl-section-title">Accessibility profile</h3>\n        <template x-for="option in options">\n            <div x-data class="access-option">\n              <div x-data>\n                <label class="switch">\n                  <input type="checkbox" x-on:click="window.inclue.handleOption(option.name, $event.target.checked)" :value="option.name" x-model="checkedOptions">\n                  <span class="slider round"></span>\n                </label>\n                <div x-data class="icl-option-title">\n                  <h4 x-text="option.title"></h4>\n                  <p x-text="option.subTitle"></p>\n                </div>\n              </div>\n              <div class="icl-option-description" x-data x-show="checkedOptions.includes(option.name)" x-transition>\n                <p x-text="option.description"></p>\n              </div>\n            </div>\n        </template>\n      </div>\n\n      <div x-data class="icl-section-card">\n        <h3 class="icl-section-title">Color Adjustments</h3>\n        <template x-for="colorOption in colorOptions">\n          <div x-data class="icl-button-options">\n            <button class="icl-option-button" x-text="colorOption.title">\n            </button>\n          </div>\n        </template>\n      </div>\n\n      <div x-data class="icl-section-card">\n        <h3 class="icl-section-title">Content Adjustments</h3>\n        <template x-for="contentOption in contentOptions">\n          <div x-data class="icl-button-options">\n            <button class="icl-option-button" x-text="contentOption.title">\n            </button>\n          </div>\n        </template>\n      </div>\n\n      <div x-data class="icl-section-card">\n        <h3 class="icl-section-title">Orientation Adjustments</h3>\n        <template x-for="orientationOption in orientationOptions">\n          <div x-data class="icl-button-options">\n            <button class="icl-option-button" x-text="orientationOption.title">\n            </button>\n          </div>\n        </template>\n      </div>\n    </div>\n  </span>\n</div>',this.dom.app.classList.add("inclue-app"),this.dom.magnifier.classList.add("icl-tooltip"),document.body.appendChild(this.dom.app),document.body.appendChild(this.dom.magnifier)}};