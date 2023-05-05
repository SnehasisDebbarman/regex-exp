module.exports = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  url: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
  phone: {
    US: "^(\\+1)?[ -]?(\\([0-9]{3}\\)|[0-9]{3})[ -]?[0-9]{3}[ -]?[0-9]{4}$",
    CA: "^(\\+1)?[ -]?\\([0-9]{3}\\)[ -]?[0-9]{3}[ -]?[0-9]{4}$",
    GB: "^(\\+44|0)\\d{10}$",
    AU: "^\\+?61\\s?\\d{4}\\s?\\d{4}$",
    FR: "^\\+33[ -]?\\d{9}$",
    DE: "^(\\+49|0)\\d{10}$",
    JP: "^(\\+81|0)\\d{1,4}[ -]?\\d{1,4}[ -]?\\d{4}$",
    BR: "^(\\+55|0)\\d{2}[ -]?\\d{4,5}[ -]?\\d{4}$",
    MX: "^(\\+52|01)?\\d{10}$",
    IN: "^(\\+91|0)?[6789]\\d{9}$",
  },
  ssn: /^\d{3}-\d{2}-\d{4}$/,
  ip: {
    ipv4: "\bd{1,3}.d{1,3}.d{1,3}.d{1,3}\b",
    ipv6: "\b(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\b",
  },
  date: {
    iso8601: "\bd{4}-d{2}-d{2}Td{2}:d{2}:d{2}(?:.d+)?(?:Z|[+-]d{2}:d{2})\b",
    hyphen: "\bd{4}-d{2}-d{2}\b",
    slashes: "\bd{2}/d{2}/d{4}\b",
    dots: "\bd{2}.d{2}.d{4}\b",
    "mm/dd/yyyy": "\bd{2}/d{2}/d{4}\b",
    "dd/mm/yyyy": "\bd{2}/d{2}/d{4}\b",
    "dd-mm-yyyy": "\bd{2}-d{2}-d{4}\b",
    "yyyy-mm-dd": "\bd{4}-d{2}-d{2}\b",
    "mm/dd/yy": "\bd{2}/d{2}/d{2}\b",
    "dd/mm/yy": "\bd{2}/d{2}/d{2}\b",
    "dd-mm-yy": "\bd{2}-d{2}-d{2}\b",
  },
  creditCard: {
    visa: "\b4[0-9]{12}(?:[0-9]{3})?\b",
    mastercard: "\b5[1-5][0-9]{14}\b",
    amex: "\b3[47][0-9]{13}\b",
    discover: "\b6(?:011|5[0-9]{2})[0-9]{12}\b",
    diners_club: "\b3(?:0[0-5]|[68][0-9])[0-9]{11}\b",
    jcb: "\b(?:2131|1800|35d{3})d{11}\b",
    maestro: "\b(?:5[0678]dd|6304|6390|67dd)d{8,15}\b",
    rupay: "\b6(?:011|22|44)[0-9]{12}\b",
  },
  password: {
    "6_char": "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6}$",
    "8_char": "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8}$",
    "12_char": "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{12}$",
  },
};
