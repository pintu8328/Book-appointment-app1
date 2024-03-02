function getData(){
    axios
    .get("http://localhost:4000/")
    .then((res) => {
      console.log(res.data);
      displayUserOnScreen(res.data);
    })
    .catch((err) => {
      console.log("error is", err);
    });
}

function displayUserOnScreen(userDetails) {
  userDetails.map((e) => {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(`${e.username} - ${e.email} - ${e.phone}`)
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => deleteData(e.id));

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
    editBtn.addEventListener("click", () => populateFormForEdit(e.id, e.username, e.email, e.phone));
    document.getElementById("append").appendChild(userItem);
  });
}

function deleteData(id){
    axios.delete(`http://localhost:4000/${id}`)
    .then((res)=>{
      document.getElementById("append").innerHTML=null;
          getData();
        console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = {
      username: formData.get('username'),
      email: formData.get('email'),
      phone: formData.get('phone')
  };

  axios.post('http://localhost:4000/', userData) 
      .then((res) => {
        document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
        document.getElementById("append").innerHTML=null;
          getData();
          console.log('Data saved:', res.data);
      })
      .catch((err) => {
          console.error('Error saving data:', err);
      });
}

function populateFormForEdit(id, username, email, phone) {
  
  
  document.getElementById('username').value = username;
  document.getElementById('email').value = email;
  document.getElementById('phone').value = phone;
  deleteData(id)
  
}

getData();
