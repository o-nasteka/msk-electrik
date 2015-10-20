/* Форма "Задать вопрос" */
document.getElementById('feedback-form').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "mail.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("inputName=" + this.inputName.value + "&inputPhone=" + this.inputPhone.value +"&inputEmail=" + this.inputEmail.value + "&inputQuestion=" + this.inputQuestion.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за проявленный интерес.');
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

/* Форма "вызов мастера бесплатно" */
document.getElementById('feedback-form-master').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "mail-master.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("inputNameMaster=" + this.inputNameMaster.value + "&inputPhoneMaster=" + this.inputPhoneMaster.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за проявленный интерес.');
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

/* Форма "Заказать обратный звонок" */
document.getElementById('callbackForm').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "callbackForm.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("callbackFormName=" + this.callbackFormName.value + "&callbackFormPhone=" + this.callbackFormPhone.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за проявленный интерес.');
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}
