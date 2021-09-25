var a, b, c, d, e, f, g, h, i, j=0;
$('#b1').click(function(){
	if(a==0){
		$('#d1').css('transform','translateY(0%)');
		$('#b1').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');

		a=1;
	}
	else{
        $('#d1').css('transform','translateY(-102%)');
        $('#b1').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        a=0;
	}
});




$('#b2').click(function(){
	if(b==0){
		$('#d2').css('transform','translateY(0%)');
		$('#b2').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		b=1;
	}
	else{
        $('#d2').css('transform','translateY(-102%)');
         $('#b2').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        b=0;
	}
});



$('#b3').click(function(){
	if(c==0){
		$('#d3').css('transform','translateY(0%)');
		$('#b3').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		c=1;
	}
	else{
        $('#d3').css('transform','translateY(-102%)');
         $('#b3').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        c=0;
	}
});




$('#b4').click(function(){
	if(d==0){
		$('#d4').css('transform','translateY(0%)');
		$('#b4').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		d=1;
	}
	else{
        $('#d4').css('transform','translateY(-102%)');
         $('#b4').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        d=0;
	}
});



$('#b5').click(function(){
	if(e==0){
		$('#d5').css('transform','translateY(0%)');
		$('#b5').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		e=1;
	}
	else{
        $('#d5').css('transform','translateY(-102%)');
         $('#b5').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        e=0;
	}
});




$('#b6').click(function(){
	if(f==0){
		$('#d6').css('transform','translateY(0%)');
		$('#b6').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		f=1;
	}
	else{
        $('#d6').css('transform','translateY(-102%)');
         $('#b6').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        f=0;
	}
});




$('#b7').click(function(){
	if(g==0){
		$('#d7').css('transform','translateY(0%)');
		$('#b7').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		g=1;
	}
	else{
        $('#d7').css('transform','translateY(-102%)');
         $('#b7').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        g=0;
	}
});




$('#b8').click(function(){
	if(h==0){
		$('#d8').css('transform','translateY(0%)');
		$('#b8').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		h=1;
	}
	else{
        $('#d8').css('transform','translateY(-102%)');
         $('#b8').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        h=0;
	}
});




$('#b9').click(function(){
	if(i==0){
		$('#d9').css('transform','translateY(0%)');
		$('#b9').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		i=1;
	}
	else{
        $('#d9').css('transform','translateY(-102%)');
         $('#b9').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        i=0;
	}
});




$('#b10').click(function(){
	if(j==0){
		$('#d10').css('transform','translateY(0%)');
		$('#b10').css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)');
		j=1;
	}
	else{
        $('#d10').css('transform','translateY(-102%)');
         $('#b10').css('box-shadow','10px 10px 20px 0px rgba(0,0,0,0.3)');
        j=0;
	}
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.height = "10vh";
    document.getElementById("titolo").style.fontSize = "5vh";
    document.getElementById("ul").style.top = "0vh";
    document.getElementById("titolo").style.transition = "0.5s";
    document.getElementById("ul").style.transition = "0.5s";
    document.getElementById("navbar").style.transition = "0.5s";
  } else {
    document.getElementById("navbar").style.height = "5vh";
    document.getElementById("titolo").style.fontSize = "4vh";
    document.getElementById("ul").style.top = "-20vh";
    document.getElementById("titolo").style.transition = "0.5s";
    document.getElementById("ul").style.transition = "0.5s";
    document.getElementById("navbar").style.transition = "0.5s";
  }
  prevScrollpos = currentScrollPos;
}