function calculate_total() {
  var purchase_price = document.getElementById("purchase_price").value;
  var deposit_paid = document.getElementById("deposit_paid").value;
  var bond_term= document.getElementById("bond_term").value;
  var fixed_interest = document.getElementById("fixed_interest").value;


 var result = (parseFloat(purchase_price - deposit_paid)) * parseFloat(bond_term*12) * parseFloat(fixed_interest/100);
  if (result) {
    document.getElementById("output").innerHTML="The fixed rate mortgage is " +" " + "R" + result;
  }
}
