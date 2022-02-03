

function testInput() {
  var re = document.getElementById("testleft").innerHTML
  var str = document.getElementById("testright").innerHTML

  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
    console.log('true');
    return 'true'
  } else {
    midstring = 'does not contain';
    console.log('false');
    return 'false'
  }
  
  
}
