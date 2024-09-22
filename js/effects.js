"use strict";
const a = document.getElementById("korg");
a.addEventListener("mouseover", () => $("#searchtext").fadeToggle(2000), false);
a.addEventListener("mouseout", () => $("#varu").show(1000), false);
