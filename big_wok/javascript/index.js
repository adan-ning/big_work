var left = 0;
var timer;
function run() {
	if (left <= -2560) {
		left=0;
	}
	document.getElementById("imglist").style.marginLeft = left + 'px';
	var n = ( left % 640 == 0) ? n=1200 : n=10;
	left -= 10;
	timer = setTimeout(run,n);
}