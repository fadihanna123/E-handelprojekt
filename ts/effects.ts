const a = document.getElementById("korg")! as HTMLLinkElement;

a.addEventListener("mouseover", () => $("#searchtext").fadeToggle(2000), false);
a.addEventListener("mouseout", () => $("#varu").show(1000), false);
