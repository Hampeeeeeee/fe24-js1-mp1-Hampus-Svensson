// första prompten, där font-size går från 0.6 till 3 samtidigt som färgnyansen ändras från 145 till 189.
// Genom att loopa 5 gånger där font-size ökar med 0.6 efter varje loop. 

for(let i=0; i<5; i++){
    const firstDivEl = document.createElement('div');
    document.body.appendChild(firstDivEl);
    firstDivEl.innerText = `Rad ${i+1}`;

    const fontSizeFirstDiv = 0.6 + (i * 0.6);
    firstDivEl.style.fontSize = `${fontSizeFirstDiv}rem`

    firstDivEl.classList.add('firstDivEl-position');

    const firstDivElGradient = 145 + (i * (200-145) / 5);
    
    firstDivEl.style.backgroundColor = `hsl(${firstDivElGradient}, 80%, 80%)`;
    firstDivEl.style.color = 'hsl(245 100% 70%)';
    firstDivEl.style.fontWeight = '900';
}

const container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('secondDivEl-border')

// den for loop som skapar de tre columnerna som sedan läggs i containern genom container.appendChild(secondDivEl);

for(let i=0; i<3; i++){
    const secondDivEl = document.createElement('div');
    container.appendChild(secondDivEl);
    secondDivEl.classList.add('secondDivEl-position');
}

// lägger tripleDivs i containern så att det blir visat inom bordern
const tripleDivs = container.querySelectorAll('div');

// enskilda for loops.
// Första loopen räknar från 0 till att loopen är slut, dvs 9. Därav går den från 0-1-2-3-4-5-6-7-8-9.

for(let j=0; j<=9; j++){
    const tripleH5El = document.createElement('h5');
    tripleDivs[0].appendChild(tripleH5El);
    tripleH5El.innerText = 0+j;

    tripleH5El.classList.add('tripleH5El-position');
    tripleDivs[0].classList.add('tripleDiv-border');
    
    if(j === 4){
        tripleH5El.style.backgroundColor = `hsl(250 100% 85%)`;
        tripleH5El.style.color = `white`;
    }
    else if(j % 2 == 0){
        tripleH5El.style.backgroundColor = `black`
        tripleH5El.style.color = `white`;
    }
    else{
        tripleH5El.style.backgroundColor = `white`;
        tripleH5El.style.color = `black`;
    }
}

// Andra loopen räknar från 9 till att den loopat 10 gånger. Därav går den från 9-8-7-6-5-4-3-2-1-0.

for(let j=0; j<=9; j++){
    const tripleH5El = document.createElement('h5');
    tripleDivs[1].appendChild(tripleH5El);
    tripleH5El.innerText = 9-j;
    
    tripleH5El.classList.add('tripleH5El-position', 'text-center');
    tripleDivs[1].classList.add('tripleDiv-border');

    if(j === 1){
        tripleH5El.style.backgroundColor = `hsl(250 100% 85%)`;
        tripleH5El.style.color = `white`;
    }
    else if(j % 2 == 0){
        tripleH5El.style.backgroundColor = `white`;
        tripleH5El.style.color = `black`;
    }
    else{
        tripleH5El.style.backgroundColor = `black`
        tripleH5El.style.color = `white`;
    }
}

// Den tredje loopen består av en array som går från ett till tio genom att innerText = numbersInText[j]; 
// där index ökar med varje loop och "printar" ut nästa ord i array'n.

const numbersInText = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
for(let j=0; j<numbersInText.length; j++){
    const tripleH5El = document.createElement('h5');
    tripleDivs[2].appendChild(tripleH5El);
    tripleH5El.innerText = numbersInText[j];

    tripleH5El.classList.add('tripleH5El-position', 'text-end');
    tripleDivs[2].classList.add('tripleDiv-border');

    if(j === 5){
        tripleH5El.style.backgroundColor = `hsl(250 100% 85%)`;
    }
    else if(j % 2 == 0){
        tripleH5El.style.backgroundColor = `black`
        tripleH5El.style.color = `white`;
    }
    else{
        tripleH5El.style.backgroundColor = `white`;
        tripleH5El.style.color = `black`;
    }
}


