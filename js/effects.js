var a = document.getElementById("korg");
a.addEventListener("mouseover", showvaru(), false);
a.addEventListener("mouseout", hidevaru(), false);
function show()
{
	$("#searchtext").fadeToggle(2000);
}
function showvaru()
{
	$("#varu").show(1000);
}
function hidevaru()
{
	$("#varu").hide(1000);
}