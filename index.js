

const acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];

const balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

const Numbers = (filterByUser, sortBy, sortDirection) => {
  if (filterByUser) {
    return acctData
      .filter(acc => acc.user === filterByUser)
      .sort(sortByHelper(sortBy, sortDirection))
      .map(fa => fa.acctNum);
  }

  return acctData
    .sort(sortByHelper(sortBy, sortDirection))
    .map(fa => fa.acctNum);
};

const sortByHelper = (sortBy, sortDirection) => {
  return (a, b) => {
    if (sortBy === "balance") {
      return sortDirection !== "desc"
        ? balance[a.acctNum] - balance[b.acctNum]
        : balance[b.acctNum] - balance[a.acctNum];
    }

    return sortDirection !== "desc"
      ? a.acctNum.localeCompare(b.acctNum)
      : b.acctNum.localeCompare(a.acctNum);
  };
};

console.log(Numbers());
console.log(Numbers("Bob"));
console.log(Numbers("Charlie"));
console.log(Numbers("", "acctNum"));
console.log(Numbers("Alice", "balance", "desc"));

