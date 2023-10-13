// Customer account object
const customerAccount = {
    name: "John Doe",
    balance: 1000,
};

// Function to update account balance when a deposit is made
const deposit = () => {
    const transactionAmount = parseFloat(document.getElementById("transactionAmount").value);
    
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
        customerAccount.balance += transactionAmount;
        updateAccountInfo();
    } else {
        alert("Please enter a valid deposit amount.");
    }
};

// Function to update account balance when a withdrawal is made
const withdraw = () => {
    const transactionAmount = parseFloat(document.getElementById("transactionAmount").value);
    
    if (!isNaN(transactionAmount) && transactionAmount > 0 && transactionAmount <= customerAccount.balance) {
        customerAccount.balance -= transactionAmount;
        updateAccountInfo();
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
};

// Function to update the displayed account information
const updateAccountInfo = () => {
    document.getElementById("customerName").textContent = customerAccount.name;
    document.getElementById("accountBalance").textContent = customerAccount.balance.toFixed(2);
};

// Initial account info display
updateAccountInfo();

