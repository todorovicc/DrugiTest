let dinos = [{
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let orders = []


addToDom = order => {
    const divItem = document.createElement('div')
    divItem.className = "item"
    divItem.innerHTML = `<p><span>Купац:</span> ${order.Kupac}</p>
    <p><span>Напомена:</span> ${order.Napomena}</p>
    <p><span>Диносаурус: </span> ${order.Dinosaurus}</p>
    <p><span>Цена: </span> ${order.Cena}</p>`

    divCon.append(divItem)
    const btnDLT = document.createElement("button")
    btnDLT.button = "DLT"
    btnDLT.textContent = "Обриши"
    divItem.append(btnDLT)
    btnDLT.addEventListener('click', () => {
        btnDLT.parentElement.remove()
        orders.splice(orders.indexOf(order), 1)
    })
}

// const price = dinos => {
//     let novacena = 0
//     if (select.value == dinos.id)
//         novacena = dinos.cena
//     return novacena
// }

const divCon = document.querySelector('#item-container')
const divForm = document.querySelector('.form-style-2')
const forma = document.querySelector('#forma')
const kupac = document.querySelector("#kupac")
const select = document.querySelector("#select-dino")
const napomena = document.querySelector(".textarea-field")
const btnNaruci = document.querySelector("#naruci")
const btnIspisi = document.querySelector("#btn-all")
btnIspisi.addEventListener('click', () => {
    console.log(orders)
})

const isValid = order =>
    kupac.value.length >= 4


btnNaruci.addEventListener('click', () => {


    let order = {
        Kupac: kupac.value.trim(),
        Napomena: napomena.value,
        Dinosaurus: select.value,
        Cena: 0
    }

    if (isValid(order)) {

        orders.push(order)
        addToDom(order)
        console.log(orders)
    } else {
        console.log('nije validan unos')
    }
})