// function random() {
	var arr = [];

	for(i = 0; i < 9; i++) {
		var random = Math.round(Math.random() * 10);
		arr[i] = random;
	}

	console.log(arr);
// }

// random();

/*Собрать весь массив td или, скорее, весь массив td внутри таблиц с определёнными
тегоми, и уже этот массив (то есть arr) наполнять случайными числами*/

// Находим таблицу, а в ней все ячейки, из них вычленяем текст
var matrix1Text = $("#matrix1").find("td").text();
var matrix2Text = $("#matrix2").find("td").text();
var arrMatrix1 = [];
var arrMatrix2 = [];

function setToArr(matrixText, arrMatrix) {
	for(i = 0; i < 9; i++) {
		arrMatrix[i] = matrixText[i];
	}
	console.log(arrMatrix);
}

setToArr(matrix1Text, arrMatrix1);
setToArr(matrix2Text, arrMatrix2);

/*У меня есть функция, которая может наполнять случайными числами массив.
У меня есть доступ к каждой из таблицы-матрицы. Как мне напонлнить мои таблицы
случайными числами?*/

for(i = 0; i < 9; i++) {
	// var random2 = Math.round(Math.random() * 10);
	matrix1Text[i] = $("#matrix1").find("td").eq(i).text(arr[i]);
}