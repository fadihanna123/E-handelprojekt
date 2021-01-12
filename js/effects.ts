const a = document.getElementById("korg")! as HTMLLinkElement;

const show = () => {
  $("#searchtext").fadeToggle(2000);
};

const showvaru = (): any => {
  $("#varu").show(1000);
};

const hidevaru = (): any => {
  $("#varu").hide(1000);
};

a.addEventListener("mouseover", showvaru(), false);
a.addEventListener("mouseout", hidevaru(), false);
