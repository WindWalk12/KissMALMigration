
//Author: WindWalk

//Enable Jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//determen URL
const url = window.location.href;

//Begning of figure out where they are
const url1 = /^http:\/\/+kissanime\.ru\/[A-Z]*/g;
const url2 = /Episode-+[0-9]*\?+id=+[0-9]*$/g;

if (url1.test(url) && url2.test(url) ) {

	document.getElementById('adsIfrme11').remove();
	document.getElementById('divFloatRight').remove();

	document.body.onload = addiframe;

	function addiframe () {
	$('#containerRoot #divFloatLeft').after('<div id="mal-iframe" style="position: absolute; top: 750px; right: 12.5px;"> </div)');
	%('#mal-iframe').append('')
	}
}