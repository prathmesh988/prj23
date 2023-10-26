let a = fetch('http://localhost:3000/get_balance', {
    
    method: 'GET',
    headers: {
        'Authorization': 'Bearer JWT'
    }
})
.then(response => response.json())
.then(data => console.log(data));