// Создаём переменные, дающие доступ к к значению каждой ячейки матрицы
var matrix1 = $("#matrix1").find("td").text();
var matrix2 = $("#matrix2").find("td").text();

// Наполняем случайными числами ячейки
for(i = 0; i < 9; i++) {
	var random = Math.round(Math.random() * 10);
	matrix1[i] = $("#matrix1").find("td").eq(i).text(random);
}

for(i = 0; i < 9; i++) {
	var random = Math.round(Math.random() * 10);
	matrix2[i] = $("#matrix2").find("td").eq(i).text(random);
}

var determinant = 
	($("#matrix1_td1").text() * $("#matrix1_td5").text() * $("#matrix1_td9").text()) + 
	($("#matrix1_td4").text() * $("#matrix1_td8").text() * $("#matrix1_td3").text()) + 
	($("#matrix1_td7").text() * $("#matrix1_td2").text() * $("#matrix1_td6").text()) - 
	($("#matrix1_td7").text() * $("#matrix1_td5").text() * $("#matrix1_td3").text()) - 
	($("#matrix1_td4").text() * $("#matrix1_td2").text() * $("#matrix1_td9").text()) - 
	($("#matrix1_td1").text() * $("#matrix1_td8").text() * $("#matrix1_td6").text());

$(".determinantValue").text(determinant);

/*Придумать как уменьшить громоздкость формулы. Наверняка объекты и методы
смогут помочь*/