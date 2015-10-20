function call() {
    var msg   = $('#bottomFeedback').serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
        success: function(data) {
            // $.jGrowl("Заявка отправлена!", { sticky: false, life:1500 });
            OpenSuccessForm(this);
        },
        error:  function(xhr, str){
            // alert('Ошибка отправки: ' + xhr.responseCode);
            $.jGrowl("Ошибка отправки!", { sticky: false, life:1500 });
        }
    });

}

function call2() {
    var msg   = $('#topCallBackForm').serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
        success: function(data) {
            // $.jGrowl("Заявка отправлена!", { sticky: false, life:1500 });
            OpenSuccessForm(this);
            CloseCallbackForm(this);
        },

        error:  function(xhr, str){
            $.jGrowl("Ошибка отправки!", { sticky: false, life:1500 });
        }
    });

}

function call3() {
    var msg   = $('#header-form').serialize();
    $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: msg,
        success: function(data) {
            // $.jGrowl("Заявка отправлена!", { sticky: false, life:1500 });
            OpenSuccessForm(this);
            CloseCallbackForm(this);
        },
        error:  function(xhr, str){
            $.jGrowl("Ошибка отправки!", { sticky: false, life:1500 });

        }
    });

}