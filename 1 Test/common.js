/*У меня есть функция, которая может наполнять случайными числами массив.
У меня есть доступ к каждой из таблицы-матрицы. Как мне напонлнить мои таблицы
случайными числами?*/
var matrix1Text = $("#matrix1").find("td").text();
var matrix2Text = $("#matrix2").find("td").text();

for(i = 0; i < 9; i++) {
	var random2 = Math.round(Math.random() * 10);
	matrix1Text[i] = $("#matrix1").find("td").eq(i).text(random2);
	matrix2Text[i] = $("#matrix2").find("td").eq(i).text(random2);
}

for(i = 0; i < 9; i++) {
	var random2 = Math.round(Math.random() * 10);
	matrix2Text[i] = $("#matrix2").find("td").eq(i).text(random2);
}