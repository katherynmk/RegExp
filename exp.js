

function testInput() {

  var re = document.getElementById("testleft").value;
  var str = document.getElementById("testright").value;
  var regex = new RegExp(re);
  console.log(regex.test(str));

  
  
}
