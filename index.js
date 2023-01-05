// Add your code here
function submitData(firstName, email){
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
};
return fetch("http://localhost:3000/users", configurationObj)
.then(res => res.json())
.then(newUser => document.body.innerHTML = newUser['id'])

.catch(error => document.body.innerHTML = error.message)

}
