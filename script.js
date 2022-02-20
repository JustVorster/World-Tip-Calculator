


window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#calculate').onclick = calculateTip;
    }
 
function calculateTip() {
    /*assign values of ID : amount, person and service to
    variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
    let currency = document.querySelector('#currency').value;
 
    console.log(service);

    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
    
    // if (currency === '¥') {
    //     document.querySelector('#service-amount').style.display = 'none';
    // }
    

    if (persons === '1'){
        document.querySelector('#each').style.display = 'none';
    }
    else {
        document.querySelector('#each').style.display = 'block';
    }
 
    let numAmount = Number(amount);
    let numService = Number(service);


    let tipTotal = ((numAmount * numService) / persons);
    

    let tipPerPerson = tipTotal * persons;
    let finalBill = `${currency} ${numAmount + tipPerPerson}`;
   


    //finally displaying the tip value
    
    document.querySelector('.bill').style.display = 'inline-block';
    document.querySelector('#bill-total').innerHTML = finalBill;

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = currency + tipTotal;

    
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }