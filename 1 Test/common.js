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

console.log(matrix1[0]);

var initialData = {
	m1_x11: matrix1[0],
	m1_x12: matrix1[1],
	m1_x13: matrix1[2],
	m1_x21: matrix1[3],
	m1_x22: matrix1[4],
	m1_x23: matrix1[5],
	m1_x31: matrix1[6],
	m1_x32: matrix1[7],
	m1_x33: matrix1[8],
};


var determinant = 
	(initialData.m1_x11 * initialData.m1_x22 * initialData.m1_x33) + 
	(initialData.m1_x21 * initialData.m1_x32 * initialData.m1_x13) + 
	(initialData.m1_x31 * initialData.m1_x12 * initialData.m1_x23) - 
	(initialData.m1_x31 * initialData.m1_x22 * initialData.m1_x13) - 
	(initialData.m1_x21 * initialData.m1_x12 * initialData.m1_x33) - 
	(initialData.m1_x11 * initialData.m1_x32 * initialData.m1_x23);

$(".determinantValue").text(determinant);

/*
var initialData = {
	m1_x11: $("#matrix1_td1").text(),
	m1_x12: $("#matrix1_td2").text(),
	m1_x13: $("#matrix1_td3").text(),
	m1_x21: $("#matrix1_td4").text(),
	m1_x22: $("#matrix1_td5").text(),
	m1_x23: $("#matrix1_td6").text(),
	m1_x31: $("#matrix1_td7").text(),
	m1_x32: $("#matrix1_td8").text(),
	m1_x33: $("#matrix1_td9").text(),
};*/

/*Какова логика текущего кода?
	1. Создаются массивы-доступы к пунктам матрицы;
	2. Циклом наполняем 

То есть matrix1 и matrix2 - это не массивы чисел, которыми потом
наполняется матрица. Наоборот - они те самые массивы-матрицы, которые
нужно наполнить.

Вижу, что лучшим, более оптимальным будет код, где
	1. Создаём массивы / объекты с разными случайными числами
	2. Наполняем матрицу в DOM данными из массивов / объектов
	3. Все рассчёты проводим на основе данных из массивов / объектов

	*/