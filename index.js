function put(num) {
  myform.input.value += num;
} //숫자 클릭시 value 값에 더한다

function answer() {
  try {
    myform.input.value = eval(document.myform.input.value);
  } 
  catch (e) {
    alert('error')
  } //잘못된 수식 입력 시 error를 출력한다
}

function clearput() {
  myform.input.value = "";
} //clear 버튼을 누를 시 값을 초기화 시킨다.
