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

console.log(matrix1[0]);

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
};

var determinant = 
	(initialData.m1_x11 * initialData.m1_x22 * initialData.m1_x33) + 
	(initialData.m1_x21 * initialData.m1_x32 * initialData.m1_x13) + 
	(initialData.m1_x31 * initialData.m1_x12 * initialData.m1_x23) - 
	(initialData.m1_x31 * initialData.m1_x22 * initialData.m1_x13) - 
	(initialData.m1_x21 * initialData.m1_x12 * initialData.m1_x33) - 
	(initialData.m1_x11 * initialData.m1_x32 * initialData.m1_x23);

$(".determinantValue").text(determinant);

var m1 = {
	x11: 0,
	x12: 0,
	x13: 0,
	x21: 0,
	x22: 0,
	x23: 0,
	x31: 0,
	x32: 0,
	x33: 0
}

for(var key in m1) {
	document.getElementById(key).innerHTML= m1[key]
}
console.log(m1);

arrM1 = [];
for(key1 in m1) {
	m1[key1] = Math.round(Math.random() * 10);
	$("#matrix1").find("td").eq(i).text(m1[key1])
	// arrM1[key1] = m1[key1];
}
console.log(m1);
console.log(arrM1);

for(ii = 0; ii < 19; ii++) {
	arrM1[ii] = m1[ii];
}

console.log(arrM1);