function CalculateEMI(){
  let amount = document.getElementById('amount').value;
  let interest = document.getElementById('interest').value;
  let tenure = document.getElementById('tenure').value;

  interest = (amount * (interest * 0.01)) / tenure;

  let total = ((amount / tenure) + interest).toFixed(2);
  
  document.querySelector("#total")
            .innerHTML = "EMI : (₹)" + total;


}