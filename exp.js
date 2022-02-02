re = document.getElementById("testleft")
str = document.getElementById("testright")

function testInput(re, str) {
  
  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
    return 'true'
  } else {
    midstring = 'does not contain';
    return 'false'
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
