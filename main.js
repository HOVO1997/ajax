const url = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method,url,body = null){

	return new Promise((resolve,reject)=>{

	const xhr = new XMLHttpRequest ();

	xhr.open(method,url);

	xhr.responseType = 'json';
	//when POST
	xhr.setRequestHeader('Content-Type','application/json');

	xhr.onload = () => {
		if (xhr.status >= 400) {
			reject(xhr.response);
		}else{
			resolve(xhr.response);
		}
	}

	xhr.onerror = () => {
		console.log(xhr.response);
	}
//when POST
	xhr.send(JSON.stringify(body));

	});

}
//when Get
//sendRequest('GET',url)
//	.then(data => console.log(data))
//	.catch(err => console.log(err))

//when Post
	sendRequest('GET',url,{
	name: 'HOVO',
	age: 22
	})
	.then(data => console.log(data))
	.catch(err => console.log(err))
