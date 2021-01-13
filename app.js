let arr = ['https://www.saniyaholidays.com/wp-content/uploads/2014/07/kerla1-700x400.jpg',
'https://www.gloucestercitynews.net/.a/6a00d8341bf7d953ef022ad3aab7ed200b-800wi',
'https://launchclinic.com/wp-content/uploads/2015/09/Week-3-700-x-400.png',
'https://www.rmwatch.com/wp-content/uploads/2015/11/141124_DSC_5658-Edit-700x400.jpg'
]
let body = document.body,count=0;;
let left = document.getElementById('left');
let right = document.getElementById('right');
let inner = document.getElementById('inner');

left.addEventListener('click',function(){
	if(count ===0){
		inner.style.backgroundImage=`url('${arr[count]}')`;
	}else{
		inner.style.backgroundImage=`url('${arr[count]}')`;
		count-=1;
		console.log(arr[count]);
	}
})
right.addEventListener('click',function(){
	if(count ===0){
		inner.style.backgroundImage=`url('${arr[count]}')`;
		count+=1;
	}else if(count<=3){
		inner.style.backgroundImage=`url('${arr[count]}')`;
		count+=1;
	}else if(count===4){
		count-=1;
		inner.style.backgroundImage=`url('${arr[count]}')`;
	}	
})