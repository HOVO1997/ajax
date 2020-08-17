const url = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method,url,body = null){

const headers = {
	'Content-Type':'application/json'
}

	return fetch(url,{
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		return response.json();
	});
	

}
//when Get
//sendRequest('GET',url)
//	.then(data => console.log(data))
//	.catch(err => console.log(err))

//when Post
	sendRequest('POST',url,{
	name: 'HOVO',
	age: 22
	})
	.then(data => console.log(data))
	.catch(err => console.log(err))
