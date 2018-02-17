// Создаём переменные, дающие доступ к к значению каждой ячейки матрицы
var matrix1 = $("#matrix1").find("td").text();
var matrix2 = $("#matrix2").find("td").text();

// Наполняем случайными числами ячейки
for(i = 0; i < 9; i++) {
	var random = Math.round(Math.random() * 10);
	matrix1[i] = $("#matrix1").find("td").eq(i).text(random);
}

for(j = 0; j < 9; j++) {
	var random = Math.round(Math.random() * 10);
	matrix2[j] = $("#matrix2").find("td").eq(j).text(random);
}

// Наполнем объекты числами из матрицы
var m1 = {
	x11: $("#matrix1_td1").text(),
	x12: $("#matrix1_td2").text(),
	x13: $("#matrix1_td3").text(),
	x21: $("#matrix1_td4").text(),
	x22: $("#matrix1_td5").text(),
	x23: $("#matrix1_td6").text(),
	x31: $("#matrix1_td7").text(),
	x32: $("#matrix1_td8").text(),
	x33: $("#matrix1_td9").text(),
};

var m2 = {
	x11: $("#matrix2_td1").text(),
	x12: $("#matrix2_td2").text(),
	x13: $("#matrix2_td3").text(),
	x21: $("#matrix2_td4").text(),
	x22: $("#matrix2_td5").text(),
	x23: $("#matrix2_td6").text(),
	x31: $("#matrix2_td7").text(),
	x32: $("#matrix2_td8").text(),
	x33: $("#matrix2_td9").text(),
};

console.log(m1);
console.log(m2);

// -- 1. Рассчитываем определитель для первой матрицы
var determinant = 
	(m1.x11 * m1.x22 * m1.x33) + 
	(m1.x21 * m1.x32 * m1.x13) + 
	(m1.x31 * m1.x12 * m1.x23) - 
	(m1.x31 * m1.x22 * m1.x13) - 
	(m1.x21 * m1.x12 * m1.x33) - 
	(m1.x11 * m1.x32 * m1.x23);

$(".determinantValue").text(determinant);

// -- 2. Умножение на число
var randomNumber = Math.round(Math.random() * 10);
$("#randomNumber").text(randomNumber);

$("#matrixMultByNumber_td1").text(m1.x11 * randomNumber);
$("#matrixMultByNumber_td2").text(m1.x12 * randomNumber);
$("#matrixMultByNumber_td3").text(m1.x13 * randomNumber);
$("#matrixMultByNumber_td4").text(m1.x21 * randomNumber);
$("#matrixMultByNumber_td5").text(m1.x22 * randomNumber);
$("#matrixMultByNumber_td6").text(m1.x23 * randomNumber);
$("#matrixMultByNumber_td7").text(m1.x31 * randomNumber);
$("#matrixMultByNumber_td8").text(m1.x32 * randomNumber);
$("#matrixMultByNumber_td9").text(m1.x33 * randomNumber);