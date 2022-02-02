re = document.getElementById("testleft")
str = document.getElementById("testright")

function testInput(re, str) {
  
  let midstring;
  if (re.test(str)) {
    midstring = 'contains';
  } else {
    midstring = 'does not contain';
  }
  console.log(`${str} ${midstring} ${re.source}`);
}
