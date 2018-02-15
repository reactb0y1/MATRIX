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