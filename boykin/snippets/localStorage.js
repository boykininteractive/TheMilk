localStorage.setItem("user", this.records.data.user.id);

localStorage.setItem("mytime", Date.now());

var x = localStorage.getItem("mytime");

localStorage.removeItem("mytime");

localStorage.clear();

if (localStorage.name) this.name = localStorage.name;

// STORING OBJECTS IN LOCAL STORAGE //
// https://www.youtube.com/watch?v=AUOzvFzdIk4

// create javascript object
let myObj = {
  name: "Domenic",
  age: 56,
};

// OBJECT AS A STRING (Serialize)
let myObj_serialized = JSON.stringify(myObj);

// Deserialize
let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
