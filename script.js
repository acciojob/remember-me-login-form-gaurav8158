//your JS code here. If required.
document.getElementById("submit").addEventListener("click", ()=>{
	let name=document.getElementById("username").value;
	let pass=document.getElementById("password").value;
	let data={
		name:name,
		password:pass,
	}
	localStorage.setItem("data", JSON.stringify(data));
	if(!existing(name)){
		
		alert(`Logged in as ${name}`);
	}
	else{
		alert(`Logged in as saved ${name}`);
		document.getElementById("existing").style.display="block";
	document.getElementById("existing").addEventListener("click", ()=>{
			
		alert(`Logged in as saved ${name}`);
		});	
	}

	function existing(nam){
		let sum = localStorage.getItem("data");
		name=`${JSON.parse(sum).name}`;
		if(name.includes(nam))
			return true;
		else return false;
	}
		
});



