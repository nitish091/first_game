function start(){
	var slide1 = document.querySelector('.welcome');
	var slide2 = document.querySelector('.loader-frame');
	setTimeout(function(){
		slide1.style.color = 'white';
			},6000);
	setTimeout(function(){
		slide1.style.display = 'none';
		slide2.style.display = 'block';
	},10000);
	setTimeout(function(){
		location.replace("avengers end game.html");
	},19000);

}


var imlife = 5;
var count =1;
var beamtime = 0;
var count1 = 1;
var moves = [];
var moveslist = [37,38,39,40,97,100,119,115,32,112];
var top1 = 60;
var left1 = 10;
document.addEventListener("keypress", function(event) {
    var p = event.keyCode;
    if(moveslist.indexOf(p)===-1)
    	return;
    moves.push(p);
    console.log(p);
    var im = document.querySelector('.im');

    if(moves[0]==115&&top1<460)
    {
    	im.style.top = "" + (top1 = top1 + 20) + "px";
    	console.log(top1);
    	moves.shift();
    }

    else if(moves[0]==119&&top1>60)
    {
    	im.style.top = "" + (top1 = top1 - 20)  + "px";
    	console.log(top1);
    	moves.shift();
    }

    else if(moves[0]==100&&left1<1050)
    {
    	im.style.left = "" + (left1 = left1 + 20)  + "px";
    	console.log(left1);
    	moves.shift();
    }


    else if(moves[0]==97&&left1>0)
    {
    	im.style.left = "" + (left1 = left1 - 20)  + "px";
    	console.log(left1);
    	moves.shift();
    }
    else if(moves[0]==112){
    	
    	alert("you just paused the game.\nClick ok to resume");
    	moves.shift();
    }
    else if (moves[0]==32&&beamtime==0){

    //.........................IRON MAN BEAM CREATION........
   

    console.log('you just pressed space');
	var newContent = document.createElement('div');
	count1++;
	var imgname = "imattackimg" + count1;
	var divname = "imattack"  + count1;
	newContent.innerHTML = '<div class="'+ divname+ '"><img class ="' + imgname + '" src=""></div>';
	document.querySelector('.into').appendChild(newContent.firstChild);
	var imattackimg = document.querySelector('.imattackimg' + count1);
	imattackimg.src = 'imattack.gif';

	var im_image = document.querySelector('.im_image');
	im_image.src="beamfocus1.png";

	setTimeout(function(){
		im_image.src="steerup.png"},100);

	imattackimg.classList.add('imattackimg');
	var theme = new Audio();
	theme.src = "laserbeam.mp3";
	theme.play();

	lefta = left1 + 100;
	var css = document.createElement('style');
	css.type = 'text/css';
	//console.log(lefta);
	css.innerHTML = '@keyframes beam {from{ left:'+ lefta +'px;} to{left:1250px;}}';
	document.body.appendChild(css);
	var imattack = document.querySelector('.imattack' + count1);
	imattack.classList.add('imattack');
	imattack.style.top = '' + (top1+35) + 'px'; 
	imattack.style.left = '' + (left1 + 200) + 'px'; 
	beamtime = 1;
	setTimeout(function(){
		beamtime = 0;
	},300);
	setTimeout(function(){
		imattack.remove();
	} ,4000);
	 moves.shift();
    }

    else moves.shift(); 
});



//...........................POSITIIONING GOKU...............................


var score = 0;
var top2 = 0;
var right1 = 0;
var gokutime = Math.random();
gokutime = gokutime + 1;
gokutime = gokutime * 2000;
setInterval(function(){
	 gokutime = Math.random();
	gokutime = gokutime + 1;
	gokutime = gokutime * 1000;

	supersayn();
	function supersayn(){
	var goku = document.querySelector('.goku');
	var pos1 = Math.random();


	top2 = 400 * (pos1 * 1.2);
	top2 = Math.floor(top2);
	if(count>10000)
		count = 1;
	if(top2 > 420)
		top2 = 420;
	goku.style.top = '' + top2 + 'px';

}	
}, gokutime);

//.....................BALL CREATION........


var gokupoet =	setInterval(function(){
	var gameover = document.querySelector('.gameover-msg');
	if(imlife < 1)
		{clearInterval(gokupoet);
		 gameover.style.display = 'block';}
	var newContent = document.createElement('div');
	count++;
	var imgname = "energyballimg" + count;
	var divname = "energyball"  + count;
	newContent.innerHTML = '<div class="'+ divname+ '"><img class ="' + imgname + '" src=""></div>';
	document.querySelector('.into').appendChild(newContent.firstChild);
	var eballimg = document.querySelector('.energyballimg' + count);
	eballimg.src = 'energyball.gif';
	eballimg.classList.add('energyballimg');
	var eball = document.querySelector('.energyball' + count);
	eball.classList.add('energyball');
	eball.style.top = '' + (top2 + 100) + 'px'; 
	eball.style.right = '' + 200 + 'px'; 
	
	setTimeout(function(){
		eball.remove();
	} ,2800);
},800);


//.........................CHECK IS ENERGY BALL HITS STARK...............


var poet = setInterval(function(){
	var showscore = document.querySelector('.showscore');
	var score1 = document.querySelector('.score');
	showscore.innerHTML = 'SCORE : '+ score;
	var gameover = document.querySelector('.gameover-msg');
	var eball = document.querySelectorAll('.energyball');
	var beam1 = document.querySelectorAll('.imattack');
	var im  = document.querySelector('.im');
	if(imlife<1)
		{clearInterval(poet);
		 gameover.style.display = 'block';
		 score1.innerHTML = 'your score : '+ score;}


	for(var j = 0; j<beam1.length;j++)
	{
		for(var k = 0;k<eball.length;k++)
		{
			if(beam1[j].offsetTop > eball[k].offsetTop -50 &&beam1[j].offsetTop < eball[k].offsetTop + 50 &&beam1[j].offsetLeft +100 > eball[k].offsetLeft &&beam1[j].offsetLeft + 100< eball[k].offsetLeft+50 )
			{	console.log('hiiii');
				score = score + 10;
				beam1[j].remove(); 
				eball[k].remove();
			}
		}
	}

	for(var i=0; i< eball.length; i++){
		if(eball[i].offsetLeft > im.offsetLeft && eball[i].offsetLeft < im.offsetLeft + 150 && eball[i].offsetTop > im.offsetTop - 60 &&eball[i].offsetTop < im.offsetTop + 150)
			{eball[i].remove();
			 console.log('It Hits STARK!!');
			 imlife--;
			var theme = new Audio();
			theme.src = "arrow.mp3";
			theme.play();
			 var imlifebar = document.querySelector('.fillimbar');
			 var im_width = imlifebar.offsetWidth;
			 console.log(im_width);
			 imlifebar.style.width = ''+(im_width - 60)+'px'; 
			 im.style.display = 'none';
			setTimeout(function(){
				im.style.display = 'block';},100);}
			//console.log(eball[i].offsetLeft);
	}
	
},0.5);