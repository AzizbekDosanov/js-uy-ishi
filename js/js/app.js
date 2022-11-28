let name = prompt("Ismingizni kiriting")
let surname = prompt("Familiyangizni  kiriting")
let age = prompt("Yoshingizni kiriting")

let obj = {
    name: "name",
    surname: "surname",
    age: "age",
}

if (age > 16) {
    alert("institutda o'qiydi")
} else if (age >= 16) {
    alert("maktabni tugatgan")
} else {
    alert("maktabga bor!")
}

let color = prompt("svetafor rangini kiriting")

if (color === "yashil") {
    alert("qizil")
} else if (color === "qizil") {
    alert("sariq")
} else if (color === "sariq") {
    alert("yashil")
} else {
    alert("Noto'g'ri rang kiritildi")
}

let number = 10;
while (number <= 7) {
    if (number % 2 === 0) console.log(number);
    number++;
}
