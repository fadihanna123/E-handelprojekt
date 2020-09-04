const a = document.getElementById("korg");
a.addEventListener("mouseover", showvaru(), false);
a.addEventListener("mouseout", hidevaru(), false);
const show = () =>
{
	$("#searchtext").fadeToggle(2000);
}
const showvaru => ()
{
	$("#varu").show(1000);
}
const hidevaru => ()
{
	$("#varu").hide(1000);
}
