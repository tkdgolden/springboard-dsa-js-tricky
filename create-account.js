function createAccount(pin, balance) {
    let currentPin = pin;
    let currentBalance = balance || 0;

    function checkBalance (attemptPin) {
        if (currentPin === attemptPin) {
            return `$${currentBalance}`;
        }
        return "Invalid PIN.";
    }

    function deposit (attemptPin, deposit) {
        if (currentPin === attemptPin) {
            currentBalance += deposit;
            return `Succesfully deposited $${deposit}. Current balance: $${currentBalance}.`;
        }
        return "Invalid PIN.";
    }

    function withdraw (attemptPin, withdraw) {
        if (currentPin === attemptPin) {
            if (withdraw <= currentBalance) {
                currentBalance -= withdraw;
                return `Succesfully withdrew $${withdraw}. Current balance: $${currentBalance}.`;
            }
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        return "Invalid PIN.";
    }
    function changePin (attemptPin, newPin) {
        if (currentPin === attemptPin) {
            currentPin = newPin;
            return "PIN successfully changed!";
        }
        return "Invalid PIN.";
    }
    return { checkBalance, deposit, withdraw, changePin };
}

module.exports = { createAccount };
