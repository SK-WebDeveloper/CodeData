function tax(amount) {
     let saving = 0
     if (amount >= 1000000) saving = amount - (amount * (30 / 100));
     if (amount < 1000000 && amount > 500000) saving = amount - (amount * (20 / 100));
     if (amount < 500000 && amount > 250000) saving = amount - (amount * (10 / 100));
     if (amount < 250000) saving = amount;
     return saving;
}

export default tax;