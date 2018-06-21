function put(num) {
  myform.input.value += num;
}

function answer() {
  try {
    myform.input.value = eval(document.myform.input.value);
  }
  catch (e) {
    alert('error')
  }
}

function clearput() {
  myform.input.value = "";
}
