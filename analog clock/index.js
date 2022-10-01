
window.onload=tt();
		function tt()
		{
            mydate=new Date();
			secs=mydate.getSeconds();
			mins=mydate.getMinutes();
			hrs=mydate.getHours();
			sec.style.transform="rotate(" + (secs*6) + "deg)";
			min.style.transform="rotate(" + (mins*6) + "deg)";
			hr.style.transform="rotate(" + ((hrs*30) + (mins*.5)) + "deg)";
			setTimeout("tt()",1000);
		}