var buttonPlus = document.getElementById("buttonPlus");
var butonMinus = document.getElementById("butonMinus");
var liczba = document.getElementById("liczba");
var x = 1;
liczba.value = x;

buttonPlus.addEventListener("click", function() {
  liczba.value = ++x;
});

butonMinus.addEventListener("click", function() {
	if (x > 0)
  	liczba.value = --x;
});

