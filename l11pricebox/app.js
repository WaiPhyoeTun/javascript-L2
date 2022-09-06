// console.log('hi')

const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('profession');
const getmst = document.getElementById('master');

getchecklabel.addEventListener('click',function(){
	// console.log('i am working');

	if(getcheckbox.checked){
		// console.log(getcheckbox);
		// console.log(getcheckbox.checked);

		[getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30];
	}else{
		// console.log(getcheckbox);
		// console.log(getcheckbox.checked);

		getbasic.textContent = 120;
		getprof.textContent = 240;
		getmst.textContent = 360;
	}

});

// 5PX