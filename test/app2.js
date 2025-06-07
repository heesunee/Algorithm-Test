const arr = [4, 4, 6, 3, 4, 5];

const locked = [0, 5];

const account = Array(arr.length).fill(null);

for (const index of locked) {
  account[index] = arr[index];
  arr[index] = '';
}

const alarm = arr.filter((num) => num !== '').sort((a, b) => b - a);

account.forEach((num, index) => {
  if (num === null) {
    account[index] = alarm.shift();
  }
});

return account;

console.log(account);
