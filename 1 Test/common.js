// Создаём переменные, дающие доступ к к значению каждой ячейки матрицы
var matrix1 = $("#matrix1").find("td").text();
var matrix2 = $("#matrix2").find("td").text();

// Наполняем случайными числами ячейки
for(i = 0; i < 9; i++) {
	var random = Math.round(Math.random() * 9);
	matrix1[i] = $("#matrix1").find("td").eq(i).text(random);
}

for(j = 0; j < 9; j++) {
	var random = Math.round(Math.random() * 9);
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

// -- 5. Умножение матриц
// Объект с умноженной матрицей
var mM = {
	x11: (m1.x11 * m2.x11) + (m1.x12 * m2.x21) + (m1.x13 * m2.x31),
	x12: (m1.x11 * m2.x12) + (m1.x12 * m2.x22) + (m1.x13 * m2.x32),
	x13: (m1.x11 * m2.x13) + (m1.x12 * m2.x23) + (m1.x13 * m2.x33),
	x21: (m1.x21 * m2.x11) + (m1.x22 * m2.x21) + (m1.x23 * m2.x31),
	x22: (m1.x21 * m2.x12) + (m1.x22 * m2.x22) + (m1.x23 * m2.x32),
	x23: (m1.x21 * m2.x13) + (m1.x22 * m2.x23) + (m1.x23 * m2.x33),
	x31: (m1.x31 * m2.x11) + (m1.x32 * m2.x21) + (m1.x33 * m2.x31),
	x32: (m1.x31 * m2.x12) + (m1.x32 * m2.x22) + (m1.x33 * m2.x32),
	x33: (m1.x31 * m2.x13) + (m1.x32 * m2.x23) + (m1.x33 * m2.x33)
}

$("#multMatrix_td1").text(mM.x11);
$("#multMatrix_td2").text(mM.x12);
$("#multMatrix_td3").text(mM.x13);
$("#multMatrix_td4").text(mM.x21);
$("#multMatrix_td5").text(mM.x22);
$("#multMatrix_td6").text(mM.x23);
$("#multMatrix_td7").text(mM.x31);
$("#multMatrix_td8").text(mM.x32);
$("#multMatrix_td9").text(mM.x33);

// -- 6. Обратная матрица
// Значение определителя в минус первой степени
var inverseDeterminant = 1 / determinant;

$(".inverseDeterminantValue").text(inverseDeterminant);

// Ищем алгебраическое дополнение
var mAC = {
	x11: (m1.x22 * m1.x33) - (m1.x32 * m1.x23),
	x12: -((m1.x21 * m1.x33) - (m1.x23 * m1.x31)),
	x13: (m1.x21 * m1.x32) - (m1.x22 * m1.x31),
	x21: -((m1.x12 * m1.x33) - (m1.x13 * m1.x32)),
	x22: (m1.x11 * m1.x33) - (m1.x13 * m1.x31),
	x23: -((m1.x11 * m1.x32) - (m1.x12 * m1.x31)),
	x31: (m1.x12 * m1.x23) - (m1.x13 * m1.x22),
	x32: -((m1.x11 * m1.x23) - (m1.x13 * m1.x21)),
	x33: (m1.x11 * m1.x22) - (m1.x12 * m1.x21)
}

$("#algebraicComplementMatrix_td1").text(mAC.x11);
$("#algebraicComplementMatrix_td2").text(mAC.x12);
$("#algebraicComplementMatrix_td3").text(mAC.x13);
$("#algebraicComplementMatrix_td4").text(mAC.x21);
$("#algebraicComplementMatrix_td5").text(mAC.x22);
$("#algebraicComplementMatrix_td6").text(mAC.x23);
$("#algebraicComplementMatrix_td7").text(mAC.x31);
$("#algebraicComplementMatrix_td8").text(mAC.x32);
$("#algebraicComplementMatrix_td9").text(mAC.x33);

// Транспонируем алгебраическое дополнение
var mACT = {	
	x11: mAC.x11,
	x12: mAC.x21,
	x13: mAC.x31,
	x21: mAC.x12,
	x22: mAC.x22,
	x23: mAC.x32,
	x31: mAC.x13,
	x32: mAC.x23,
	x33: mAC.x33
}

$("#algebraicComplementTranspormMatrix_td1").text(mACT.x11);
$("#algebraicComplementTranspormMatrix_td2").text(mACT.x12);
$("#algebraicComplementTranspormMatrix_td3").text(mACT.x13);
$("#algebraicComplementTranspormMatrix_td4").text(mACT.x21);
$("#algebraicComplementTranspormMatrix_td5").text(mACT.x22);
$("#algebraicComplementTranspormMatrix_td6").text(mACT.x23);
$("#algebraicComplementTranspormMatrix_td7").text(mACT.x31);
$("#algebraicComplementTranspormMatrix_td8").text(mACT.x32);
$("#algebraicComplementTranspormMatrix_td9").text(mACT.x33);

var mI = {
	x11: inverseDeterminant * mACT.x11,
	x12: inverseDeterminant * mACT.x12,
	x13: inverseDeterminant * mACT.x13,
	x21: inverseDeterminant * mACT.x21,
	x22: inverseDeterminant * mACT.x22,
	x23: inverseDeterminant * mACT.x23,
	x31: inverseDeterminant * mACT.x31,
	x32: inverseDeterminant * mACT.x32,
	x33: inverseDeterminant * mACT.x33
}

$("#inverseReultMatrix_td1").text(mI.x11);
$("#inverseReultMatrix_td2").text(mI.x12);
$("#inverseReultMatrix_td3").text(mI.x13);
$("#inverseReultMatrix_td4").text(mI.x21);
$("#inverseReultMatrix_td5").text(mI.x22);
$("#inverseReultMatrix_td6").text(mI.x23);
$("#inverseReultMatrix_td7").text(mI.x31);
$("#inverseReultMatrix_td8").text(mI.x32);
$("#inverseReultMatrix_td9").text(mI.x33)