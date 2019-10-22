function calculate_total() {
        var purchase_price = document.getElementById("purchase_price").value;
        var deposit_paid = document.getElementById("deposit_paid").value;
        var bond_term= document.getElementById("bond_term").value;
        var fixed_interest = document.getElementById("fixed_interest").value;
        var fixideInterest = parseFloat((fixed_interest/100/12)*(Math.pow(1+(fixed_interest/100/12),(bond_term*12))));
        var bondTerm = parseFloat(Math.pow((1+(fixed_interest/100/12)),(bond_term*12))-1);
        Math.pow((1+(fixed_interest/100/12)),(bond_term*12))
        var payment= parseFloat(purchase_price - deposit_paid);
        var monthly_payment  = payment * (fixideInterest /bondTerm );

        if (monthly_payment) {
          document.getElementById("output").innerHTML="The fixed rate mortgage is " + monthly_payment;
        }
      }
