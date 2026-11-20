export const THEME_INIT_SCRIPT = `((attribute,storageKey,defaultTheme,forcedTheme,themes,value,enableSystem,enableColorScheme)=>{
let documentElement=document.documentElement,scheme=["light","dark"];
function applyTheme(theme){
(Array.isArray(attribute)?attribute:[attribute]).forEach((attr)=>{
const isClass=attr==="class",classList=isClass&&value?themes.map((name)=>value[name]||name):themes;
isClass?(documentElement.classList.remove(...classList),theme&&documentElement.classList.add(value&&value[theme]?value[theme]:theme)):documentElement.setAttribute(attr,theme);
});
setColorScheme(theme);
}
function setColorScheme(theme){
enableColorScheme&&scheme.includes(theme)&&(documentElement.style.colorScheme=theme);
}
function systemTheme(){
return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
}
if(forcedTheme)applyTheme(forcedTheme);
else try{
const stored=localStorage.getItem(storageKey)||defaultTheme;
const resolved=enableSystem&&stored==="system"?systemTheme():stored;
applyTheme(resolved);
}catch{}
})("class","theme","system",void 0,["light","dark"],void 0,true,true);`;
