var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
if (width < height)
{
	document.body.style.background = "url(img/bg_portrait.jpg) no-repeat center fixed";
}