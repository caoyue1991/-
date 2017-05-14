window.onload=function(){
	let pre=document.getElementsByClassName("prespective");
	let after=document.getElementsByClassName("after");
	let ph=pre[0].offsetHeight,pw=pre[0].offsetWidth;
	let ah=after[0].offsetHeight,aw=after[0].offsetWidth;
	after[0].style.transform="rotateX(200px)"
	after[0].style.transform="rotateY(200px)"
	after[0].style.transform="rotateZ(200px)"
	alert(1)
}
