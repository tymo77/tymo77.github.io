function getFooter()
{
	d = new Date();
	
document.getElementById("footer").innerHTML ="Copyright &copy; "+d.getFullYear()+" Tyler Morrison. <br>\
 The content of this website is updated when I get the chance. However I am fairly busy\
 so it may lag behind. If you need more up-to-date information, please contact me.";
}