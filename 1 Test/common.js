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

// Объект с матрицей, умноженной на число
var m1Mult = {
	x11: m1.x11 * randomNumber,
	x12: m1.x12 * randomNumber,
	x13: m1.x13 * randomNumber,
	x21: m1.x21 * randomNumber,
	x22: m1.x22 * randomNumber,
	x23: m1.x23 * randomNumber,
	x31: m1.x31 * randomNumber,
	x32: m1.x32 * randomNumber,
	x33: m1.x33 * randomNumber,
}

$("#matrixMultByNumber_td1").text(m1Mult.x11);
$("#matrixMultByNumber_td2").text(m1Mult.x12);
$("#matrixMultByNumber_td3").text(m1Mult.x13);
$("#matrixMultByNumber_td4").text(m1Mult.x21);
$("#matrixMultByNumber_td5").text(m1Mult.x22);
$("#matrixMultByNumber_td6").text(m1Mult.x23);
$("#matrixMultByNumber_td7").text(m1Mult.x31);
$("#matrixMultByNumber_td8").text(m1Mult.x32);
$("#matrixMultByNumber_td9").text(m1Mult.x33);

// -- 3. Транспонирование матрицы

// Объект с транспонированной матрицей
var m1T = {
	x11: m1.x11,
	x12: m1.x21,
	x13: m1.x31,
	x21: m1.x12,
	x22: m1.x22,
	x23: m1.x32,
	x31: m1.x13,
	x32: m1.x23,
	x33: m1.x33
}

$("#transposeMatrix_td1").text(m1T.x11);
$("#transposeMatrix_td2").text(m1T.x12);
$("#transposeMatrix_td3").text(m1T.x13);
$("#transposeMatrix_td4").text(m1T.x21);
$("#transposeMatrix_td5").text(m1T.x22);
$("#transposeMatrix_td6").text(m1T.x23);
$("#transposeMatrix_td7").text(m1T.x31);
$("#transposeMatrix_td8").text(m1T.x32);
$("#transposeMatrix_td9").text(m1T.x33);

// -- 4. Сумма матриц

// Объект с суммой матриц
var mS = {
	x11: +m1.x11 + +m2.x11,
	x12: +m1.x12 + +m2.x12,
	x13: +m1.x13 + +m2.x13,
	x21: +m1.x21 + +m2.x21,
	x22: +m1.x22 + +m2.x22,
	x23: +m1.x23 + +m2.x23,
	x31: +m1.x31 + +m2.x31,
	x32: +m1.x32 + +m2.x32,
	x33: +m1.x33 + +m2.x33
}

$("#sumMatrix_td1").text(mS.x11);
$("#sumMatrix_td2").text(mS.x12);
$("#sumMatrix_td3").text(mS.x13);
$("#sumMatrix_td4").text(mS.x21);
$("#sumMatrix_td5").text(mS.x22);
$("#sumMatrix_td6").text(mS.x23);
$("#sumMatrix_td7").text(mS.x31);
$("#sumMatrix_td8").text(mS.x32);
$("#sumMatrix_td9").text(mS.x33);