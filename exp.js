

function testInput() {
  let header = document.querySelector("p");
  var re = document.getElementById("testleft").value;
  var str = document.getElementById("testright").value;
  var regex = new RegExp(re);
  
  console.log(regex.test(str));

if (regex.test(str)){
  header.innerText = "True";
}  

else{
  header.innerText = "False";
}
  
}
