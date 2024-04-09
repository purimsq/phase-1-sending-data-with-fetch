// Add your code here
function submitData(userName, userEmail){
    const url = "http://localhost:3000/users";
  
    const append = {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json", 
        "Accept" : "application/json"
      }, 
      body : JSON.stringify({
        name : `${userName}`, 
        email : `${userEmail}`
      })
    };
  
    return fetch(url, append)
      .then(res => res.json())
      .then(data => document.body.innerHTML = data.id)
      .catch(error => document.body.innerHTML = error.message)
  };
  
  submitData("Dan Lee", "danlee@gmail.com");