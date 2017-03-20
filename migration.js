// ==UserScript==
// @name         KissMALMigration
// @namespace    https://github.com/WindWalk12/KissMALMigration
// @version      1.0
// @description  try to take over the world!
// @author       WindWalk
// ==/UserScript==

//determen URL
const url = window.location.href;

//Check if they are on kissanime
const url1 = /^http:\/\/+kissanime\.ru\/[A-Z]*/g;
const url2 = /Episode-+[0-9]*\?+id=+[0-9]*$/g;

if (url1.test(url) && url2.test(url) ) {
	
	//Enable Jquery
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.2.0.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);

	var malUser = prompt("Please enter your MAL Username");

	document.getElementById('adsIfrme11').remove();
	document.getElementById('divFloatRight').remove();

	$('#container .bigBarContainer .divCloseBut').remove();

	$('#container .bigBarContainer #centerDivVideo').after('<div id="mal-iframe" style="display: inline-block; width: 920px; height: 300px; right: 12px; top: 10px; position: relative;"> </div)');
		console.log("Div works!");
	
	$('#mal-iframe').append('<iframe src="https://myanimelist.net/animelist/'+malUser+'?status=1&tag=" style="display:inline-block; width: 920px; height: 300px"></iframe>');
		console.log("Iframe works!");
}
