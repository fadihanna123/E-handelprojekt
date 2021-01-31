"use strict";
const a = document.getElementById("korg");
const show = () => {
    $("#searchtext").fadeToggle(2000);
};
const showvaru = () => {
    $("#varu").show(1000);
};
const hidevaru = () => {
    $("#varu").hide(1000);
};
a.addEventListener("mouseover", showvaru(), false);
a.addEventListener("mouseout", hidevaru(), false);
