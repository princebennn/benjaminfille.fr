// Just for you I rotate the background on smartphone ;)

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
if (width < height)
{
	document.documentElement.style.background = "url(img/bg_portrait.jpg) no-repeat center fixed";
}
