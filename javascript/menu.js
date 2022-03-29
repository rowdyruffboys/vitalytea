var binding = 0, laminating = 0, cutting = 0, printing = 0;
var sandwich = 0, warmdrinks = 0, colddrinks;
var totalamount = 0, totalamount2 = 0;
var grandtotal = 0;


function Total(){
	binding = saddle_t + heated_t + wire_t;
	laminating =  a4_t + signage_t + cards_t ;
	cutting =  five_t + ten_t + twenty_t ;
	printing = glossy_t + matte_t + textured_t;
	totalamount = binding + laminating + cutting + printing;
   document.getElementById('totalbill').value = totalamount;
   document.getElementById('servicetotal').value = totalamount;
   grandtotal = totalamount + totalamount2;
   document.getElementById('grandtotal').value = grandtotal;
   
}


function Total2(){
	 sandwich = sand1_t + sand2_t + sand3_t + sand4_t + sand5_t + sand6_t + sand7_t + sand8_t + sand9_t + sand10_t;
	 warmdrinks =  warm1_t + warm2_t + warm3_t + warm4_t + warm5_t;
	 colddrinks = cold1_t + cold2_t +  cold3_t +  cold4_t +  cold5_t + cold6_t + cold7_t;
	 totalamount2 = sandwich + warmdrinks + colddrinks;
	document.getElementById('totalbill2').value = totalamount2;
	document.getElementById('menutotal').value = totalamount2;
	   grandtotal = totalamount + totalamount2;
   document.getElementById('grandtotal').value = grandtotal;
}



function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}

function findTotal2(){
    var arr = document.getElementsByName('qty2');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total2').value = tot;
}


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

