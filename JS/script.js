const div = document.querySelector(".indexlar")

for (let i = 0; i < testlar.length; i++) {
    const span = document.createElement("span")
    div.appendChild(span)
    span.id = i + "index"


    const p = document.createElement("p")
    span.appendChild(p)

    p.innerText = i + 1
    span.classList = "savolIndexsi"
}

const savol = document.getElementById("savol")
const variant1 = document.getElementById("variant1")
const variant2 = document.getElementById("variant2")
const variant3 = document.getElementById("variant3")
const variant4 = document.getElementById("variant4")

// kalitlar => barcha test kalitlari
let kalitlar = []
for (i = 0; i < testlar.length; i++) {
    kalitlar.push(testlar[i].kalit)
}

// k => savol indeksi
let k = 0

savol.innerText = testlar[k].savol
variant1.innerText = testlar[k].variant1
variant2.innerText = testlar[k].variant2
variant3.innerText = testlar[k].variant3
variant4.innerText = testlar[k].variant4

document.getElementById(k + "index").style.background = "yellow"
document.getElementById(k + "index").style.color = "blue"


const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")

// javoblar => foydalanuvchi javoblari
let javoblar = []

for (let j = 0; j < testlar.length; j++) {
    javoblar.push(0)
}

A.addEventListener("click", function () {
    javoblar[k] = 1
})

B.addEventListener("click", function () {
    javoblar[k] = 2
})

C.addEventListener("click", function () {
    javoblar[k] = 3
})

D.addEventListener("click", function () {
    javoblar[k] = 4
})

const oldingi = document.getElementById("oldingi")
const keyingi = document.getElementById("keyingi")
const tugatish = document.getElementById("tugatish")

oldingi.addEventListener("click", function (evt) {
    evt.preventDefault()
    if (k !== 0) {
        k--
        savol.innerText = testlar[k].savol
        variant1.innerText = testlar[k].variant1
        variant2.innerText = testlar[k].variant2
        variant3.innerText = testlar[k].variant3
        variant4.innerText = testlar[k].variant4
        A.checked = false;
        B.checked = false;
        C.checked = false;
        D.checked = false;

        if (javoblar[k] > 0) {
            switch (javoblar[k]) {
                case 1:
                    A.checked = true;
                    break;
                case 2:
                    B.checked = true;
                    break;
                case 3:
                    C.checked = true;
                    break;
                case 4:
                    D.checked = true;
                    break;
            }
        }
    }

    for (let x = 0; x < testlar.length; x++) {
        document.getElementById(x + "index").style.background = "blue"
        document.getElementById(x + "index").style.color = "white"
    }

    document.getElementById(k + "index").style.background = "yellow"
    document.getElementById(k + "index").style.color = "blue"


})

keyingi.addEventListener("click", function (evt) {
    evt.preventDefault()
    if (k !== testlar.length - 1)
        k++
    savol.innerText = testlar[k].savol
    variant1.innerText = testlar[k].variant1
    variant2.innerText = testlar[k].variant2
    variant3.innerText = testlar[k].variant3
    variant4.innerText = testlar[k].variant4
    A.checked = false;
    B.checked = false;
    C.checked = false;
    D.checked = false;


    if (javoblar[k] > 0) {
        switch (javoblar[k]) {
            case 1:
                A.checked = true;
                break;
            case 2:
                B.checked = true;
                break;
            case 3:
                C.checked = true;
                break;
            case 4:
                D.checked = true;
                break;
        }
    }


    for (let x = 0; x < testlar.length; x++) {
        document.getElementById(x + "index").style.background = "blue"
        document.getElementById(x + "index").style.color = "white"
    }

    document.getElementById(k + "index").style.background = "yellow"
    document.getElementById(k + "index").style.color = "blue"

})

// yechimlarSoni => to`g`ri yechimlar soni
let yechimlarSoni = 0

tugatish.addEventListener("click", function (evt) {
    evt.preventDefault()
    yechimlarSoni = 0

    for (i = 0; i < testlar.length; i++) {
        if (kalitlar[i] == javoblar[i]) yechimlarSoni++
    }
    alert(yechimlarSoni)

    k = 0;

    savol.innerText = testlar[k].savol
    variant1.innerText = testlar[k].variant1
    variant2.innerText = testlar[k].variant2
    variant3.innerText = testlar[k].variant3
    variant4.innerText = testlar[k].variant4

    for (i = 0; i < testlar.length; i++) {
        javoblar[i] = 0
    }

    A.checked = false;
    B.checked = false;
    C.checked = false;
    D.checked = false;

    for (let x = 0; x < testlar.length; x++) {
        document.getElementById(x + "index").style.background = "blue"
        document.getElementById(x + "index").style.color = "white"
    }

    document.getElementById(k + "index").style.background = "yellow"
    document.getElementById(k + "index").style.color = "blue"

})


for (let i = 0; i < testlar.length; i++) {
    document.getElementById(i + "index").addEventListener("click", function (evt) {
        evt.preventDefault()

        for (let x = 0; x < testlar.length; x++) {
            document.getElementById(x + "index").style.background = "blue"
            document.getElementById(x + "index").style.color = "white"
        }

        document.getElementById(i + "index").style.background = "yellow"
        document.getElementById(i + "index").style.color = "blue"

        k = i


        savol.innerText = testlar[k].savol
        variant1.innerText = testlar[k].variant1
        variant2.innerText = testlar[k].variant2
        variant3.innerText = testlar[k].variant3
        variant4.innerText = testlar[k].variant4
        A.checked = false;
        B.checked = false;
        C.checked = false;
        D.checked = false;

        if (javoblar[k] > 0) {
            switch (javoblar[k]) {
                case 1:
                    A.checked = true;
                    break;
                case 2:
                    B.checked = true;
                    break;
                case 3:
                    C.checked = true;
                    break;
                case 4:
                    D.checked = true;
                    break;

            }
        }
    })
}