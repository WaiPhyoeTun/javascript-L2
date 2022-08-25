var getmodalbox= document.getElementById("loginmodal");

var getbtnmodal=document.getElementById("btn-modal");

var getbtnclose= document.querySelector(".btn-close");

// getbtnmodal.addEventListener('click',function(){
// 	getmodalbox.style.display = 'block'
// });

getbtnmodal.addEventListener('click',openmodal);

// getbtnclose.addEventListener('click',function(){
// 	getmodalbox.style.display = 'none'
// });

getbtnclose.addEventListener('click',closemodal);

window.onclick = function(e){
	if(e.target === getmodalbox){
		getmodalbox.style.display = 'none'
	}
} 

function openmodal(){
	getmodalbox.style.display = 'block';
}

function closemodal(){
	getmodalbox.style.display = 'none';
}