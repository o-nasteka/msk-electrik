// Маска для ввода площади помещения
$('#Square').mask('99999');


// Калькулятор стоимости
function Calc(metr, build){ // metr - кв.м,  build - стоимость для разных помещений
    var m = metr;
    var building = build;
    var res = 1; // результат

    if(m != 0){
        res = m * building;
        document.getElementById('price').innerHTML = res + " &#8399;";
        if(building == 1100){
            document.getElementById('price').innerHTML = res + " &#8399;" + "<br><span class='office-text'> *ориентировочная цена</span>" ;
        }
    }

}

//Получаем значения выбраных select
function StatusSelect(element){
    var objWorkType = document.getElementById("WorkType").value;
    var objTypeBuilding = document.getElementById("TypeBuilding").value;
    var objSquare = document.getElementById("Square").value;
    // alert(objWorkType);
    //alert(TypeBuilding);


    // Если выбран пункт Тип работ
    if( objWorkType == '1' ){
        document.getElementById('price').innerHTML = "0 &#8399;"; // Сбрасываем значения в 0
        document.getElementById('order-text').className = "hidden"; // скрываем текст
        document.getElementById('TypeBuilding').options[0].selected = true; // ставим значение в 0
    }

    // Мелкий ремонт
    if(objWorkType == 'easy'){
        document.getElementById('order-text').className = "show text-center";
        document.getElementById("TypeBuilding").options[4] = new Option("---", "11"); // Создать новый option[4] == 11
        document.getElementById("TypeBuilding").options[4].selected = true;
        document.getElementById("Square").value = "";
        document.getElementById('price').innerHTML = "0 &#8399;";
    }

    // Если выбран Черновой электромонтаж
    if(objWorkType == 'black'){

        // Скрыть текст "Оставьте заявку для уточнения"
        document.getElementById('order-text').className = "hidden";

        var x = document.getElementById("TypeBuilding"); // получить option[4] == 11
        if(x != ""){ // если не пустая строка
            x.remove(4); // удалить его
        }

        // Если выбрали -Квартира
        if(objTypeBuilding == 'app'){
            // alert('app');\
            if(objSquare != 0){
                Calc(objSquare, 850);
            }
        }

        // Если выбрали -Офис
        if(objTypeBuilding == 'office'){
            // alert('office');
            if(objSquare != 0){
                Calc(objSquare, 1100);
            }
        }

        // Если выбрали -Загородный дом
        if(objTypeBuilding == 'house'){
            // alert('office');
            if(objSquare != 0){
                Calc(objSquare, 1000);
            }
        }
    }

    // Если выбран Чистовой электромонтаж
    if(objWorkType == 'clean'){
        document.getElementById('order-text').className = "hidden";

        var x = document.getElementById("TypeBuilding"); // получить option[4] == 11
        if(x != ""){ // если не пустая строка
            x.remove(4); // удалить его
        }

        // Если выбрали -Квартира
        if(objTypeBuilding == 'app'){
            // alert('app');\
            if(objSquare != 0){
                Calc(objSquare, 350);
            }
        }

        // Если выбрали -Офис
        if(objTypeBuilding == 'office'){
            // alert('office');
            if(objSquare != 0){
                Calc(objSquare, 550);
            }
        }

        // Если выбрали -Загородный дом
        if(objTypeBuilding == 'house'){
            // alert('office');
            if(objSquare != 0){
                Calc(objSquare, 400);
            }
        }
    }

    // Другое
    if(objWorkType == 'other'){
        document.getElementById('order-text').className = "show text-center";
        document.getElementById("TypeBuilding").options[4] = new Option("---", "11"); // Создать новый option[4] == 11
        document.getElementById("TypeBuilding").options[4].selected = true;
        document.getElementById("Square").value = "";
        document.getElementById('price').innerHTML = "0 &#8399;";
    }
}
