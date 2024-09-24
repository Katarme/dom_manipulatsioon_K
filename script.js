// getting elements

const playground = document.getElementById("playground");

// adding elements
playground.append(" 🚀 Spaceship");

const magicalStar = document.createElement("div");
magicalStar.textContent = "⭐";
playground.append(magicalStar);

// modifying text content

const scrollOfWisdom = document.createElement("p");
playground.append(scrollOfWisdom);

scrollOfWisdom.innerText = "Ancient wisdom";
console.log(scrollOfWisdom.innerText);

scrollOfWisdom.textContent = "Ancient wisdom";
console.log(scrollOfWisdom.textContent);

// kuvab konsoolis

console.log(playground.innerText);
console.log(playground.textContent);

// HTML elementidega töötamine

const spellbook = document.createElement("div");
spellbook.innerHTML = "<p>Spells include <strong>levitation!</strong></p>";
playground.append(spellbook);

// playground.innerHTML = '<p>inner html test</p>'

// console.log(playground.textContent)
// console.log(playground.innerHTML)

// const userInput = '<img src="x" onerror="alert(\'Hacked!\')">'

// playground.innerHTML = userInput

// kustutada elementi

const temporaryElement = document.createElement("p");
temporaryElement.textContent = "JÄNES";
playground.append(temporaryElement);

// kasutan siis, kui tahan kustutada ainult ühte divi või constiga loodud asja, see läheb sulgudesse
// playground.removeChild(scrollOfWisdom)

// kustutab kõik parent childi sees olevad asjad

while (playground.firstChild) {
  playground.removeChild(playground.firstChild);
}

// kui tahan kustutada ainult kindlat divi, siis kustutan nimeliselt

// kuidas lisada id ja class div konteinerile

const magicWand = document.createElement("div");
// saab ka         .setAttribute('id/class', 'wand1')         kasutada
magicWand.id = "wand1";
magicWand.className = "magical-item wand";
magicWand.textContent = "Magic Wand !!!";

playground.append(magicWand);
console.log("Div id: ", magicWand.id); // nii saan kätte konsoolist selle asja id
console.log("Div class: ", magicWand.className); // klassi

// console.log(magicWand.getAttribute('class))

// ----- DATA ATRIBUUDID

magicWand.dataset.spell = "invisibility";
magicWand.dataset.components = "moonlight, shadow essence";

console.log("Spell type: ", magicWand.dataset.spell);
console.log("Components", magicWand.dataset.components.split(","));

// ----- KLASSIDE MANIPULEERIMINE

magicWand.classList.add("test1", "test2");
console.log("Updated classes:", magicWand.className);

magicWand.classList.remove("test2"); // eemaldab
magicWand.classList.add("test3"); // lisab
console.log("Updated classes:", magicWand.className); // näitab konsoolis uuendatud listi, kuna eelmine tõmbamine ei toimi hetkel

// magicWand.classList.toggle('invisible', Math.random() > 0.5)
magicWand.classList.toggle("invisible", true);
magicWand.classList.replace("test3", "cool");

console.log("Third class", magicWand.classList.item(1)); //sulgudes näitab mitmenda koha klassi

// ----- INLINE STIILID / ignored by css?

magicWand.style.fontSize = "50px";
magicWand.style.fontWeight = "700";
magicWand.style.color = "blueviolet"; // võib ka rgb, hsla, hex kasutada
playground.style.backgroundColor = "#f9f9f9";

// ----- EVENT HANDLING

const mButton = document.createElement("button");
mButton.textContent = "Vajuta siia";
playground.append(mButton);

// mButton.addEventListener('click', () => {
//     alert('Suvaline tekst')
// })

mButton.addEventListener("mouseover", (event) => {
  event.target.style.cursor = "pointer";
});

// hover tekib sedasi

mButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
});

mButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "";
});

// kuidas teha funktsiooniga
function spellCast() {
  alert("Mingi alerti tekst");
}

mButton.addEventListener("click", spellCast);

//see rida eemaldab click listeneri ja funktsiooni sellelt asjalt, vajalik on kasutada sama eventlisteneri "click" mis add juhul
// mButton.removeEventListener('click', spellCast)

// ----- DÜNAAMILISELT ELEMENTIDE LISAMINE JA EEMALDAMINE

const spellList = document.createElement("ul"); // tekitan ul tagid nimega "spellList"
playground.append(spellList); // lisan need lehele

function addSpell(spellName) {
  const spell = document.createElement("li"); // tekitan li tagid
  spell.textContent = spellName; // li tagide sees on tekstiväärtus "spellName"
  const removeButton = document.createElement("button"); // tekitab lehele nupu
  removeButton.textContent = "Remove"; // nupul olev tekst
  removeButton.addEventListener("click", () => spell.remove()); // nupule vajutades toimub spell consti eemaldamine
  spell.append(removeButton); // lisab li elemendile remove nupu
  spellList.append(spell); // lisab varemloodud spellList ul tagidele funktsiooni ülaosas olevad li tagid
}

addSpell("🐱‍🐉 Dino"); // loob elemendi li tagide vahele, kasutades addSpell funktsiooni
addSpell("🌹 Roos");
addSpell("🎉 Pidu");
addSpell("🎶 Muusika");
addSpell("🎂 Tort");

// ----- TRAVERSING THE DOM / element relationships

const parentElement = document.createElement("div"); // loob parent elemendi div
const childElement1 = document.createElement("p"); // mille sees on p
const childElement2 = document.createElement("span"); // ja p sees on span

parentElement.append(childElement1, childElement2); // lisab parent elemendi sisse lapsed
playground.append(parentElement); // lisab selle parent elemendi lehele (const "playground" eelnevalt loodud)

console.log(parentElement.firstChild); // annab konsoolis, mis on parentelemendi esimene laps
console.log(parentElement.lastChild); // viimane laps
console.log(childElement1.nextSibling); // lapselemendist järgmine
console.log(childElement2.previousSibling); // eelmine
console.log(childElement1.parentNode); // mis on parent container

// ----- DOKUMENTIDE FRAGMENDID
/* not part of active dom tree
can improve performance
doesn't cause page reflow
*/

const fragment = document.createDocumentFragment();

// loop

for (let i = 0; i < 10; i++) {
  // number tähistab, et mitu järgnevalt loodud li tagi lisatakse
  const magicalItem = document.createElement("li"); // li tagid
  magicalItem.textContent = `${i + 1}. 👀 Maagilised silmad`; // li sisutekst - siin peab kasutama neid teistmoodi ülakomasid, muidu ei tööta? i+1 tähistab, et teksti järel lisatakse ka number, mis suureneb igal real ühe võrra
  fragment.append(magicalItem); // lisab fragmendile selle li asja
}

const spellList2 = document.createElement("ul");
playground.append(spellList2);

spellList2.append(fragment); // lisab fragmenti nende ul elementide vahele

// ----- USING TEMPLATES
/* võtab kasutusele HTMLis loodud template, ning loob selle põhjal div-h2-p containerid lehele */

const template = document.getElementById("wizard-template"); // võtab htmlist <template id="wizard-template"> sisu

function createWizard(name, speciality) {
  const wizardElement = template.content.cloneNode(true); // võtab const template, cloneNode kloonib templiidi
  wizardElement.querySelector(".wizard-name").textContent = name; // name ühildub funktsioonis (name) ja toimib htmlis määratud h2-na
  wizardElement.querySelector(".wizard-speciality").textContent = speciality; // htmlis p class
  playground.append(wizardElement);
}

createWizard("Merlin", "Time Magic"); // vastavalt funktsiooni ülesehitusele, esimene sulgudes olev sõna on name (h2) ja teine speciality(p)
createWizard("Gandalf", "Fireballs");

let displayElement = document.getElementById("display");
let incrementButtonElement = document.getElementById("increment");
let decrementButtonElement = document.getElementById("decrement");
let resetButtonElement = document.getElementById("reset");

let count = 0;

incrementButtonElement.onclick = function () {
  count++;
  displayElement.textContent = count;
};

decrementButtonElement.onclick = function () {
  // count--;
  // displayElement.textContent = count;

  if (count >= 0) {
    count--;
    numberCount.innerHTML = count;
  }
};

resetButtonElement.onclick = function () {
  count = 0;
  displayElement.textContent = count;
};

let count2 = 0;

const numberCount2 = document.getElementById("number2");

const liitmiseNupp = document.getElementById("liida");
const lahutamiseNupp = document.getElementById("lahuta");
const tühistamiseNupp = document.getElementById("tühista");

liitmiseNupp.onclick = () => {
  count2++;
  numberCount2.innerHTML = count;
};

lahutamiseNupp.onclick = () => {
  count2--;
  numberCount.innerHTML = count;
};

tühistamiseNupp.onclick = () => {
  count2 = 0;
  numberCount2.innerHTML = count;
};

//window.onclick = function(klikka) {
// let element = klikka.target;
// while (element !== document) {
//    if (element.nodeName === 'DIV') {
//       alert('Div-i peale on klikitud!')
//    }
//    element = element.parentNode;
//   }
// }

document.body.addEventListener("click", (event) => {
  console.log(event, event.target);
  if (
    event.target.nodeName === "DIV" ||
    event.target.parentNode.nodeName === "DIV"
  ) {
    alert("DIV clicked");
  }
});

const data = [
{
    nimi: "Pirn",
    hind: 2,
},
{
    nimi: "Õun",
    hind: 1.5,
},
{
    nimi: "Ananass",
    hind: 2.2,
},
{
    nimi: "Banaan",
    hind: 2,
},
{
    nimi: "Melon",
    hind: 2,
},
{
    nimi: "Virsik",
    hind: 2,
},
];

const tabeligenereerimine = () => {
    //const tabel = document.createElement("table");
    const tabeliKeha = document.querySelector("tbody");

    for (let i = 0; i < data.length; i++) {
        //create a table row
        const row = document.createElement("tr");

        for(let j = 0; j < 2; j++) {
            //create cells
            const cell = document.createElement("td");
            if (j === 0) {
                cell.append(data[i].nimi);
            } else {
                cell.append(data[i].hind);
            }
            row.append(cell);
        }

        tabeliKeha.append(row);
    }
};

tabeligenereerimine();

// order an array of names (sort alphabetically)
// order an array of objects with name
//dataNames.sort(function (a, b)) => (a.name < b.name) {
//    if (a.name < b.name) {
//        return -1;
//    }
//    if (a.name > b.name) {
//        return 1;
//    }
//    return 0;
//};