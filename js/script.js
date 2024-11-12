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

// const allFirstDivEl = document.querySelectorAll('div');
// for(let i=0; i<allFirstDivEl.length; i++){
    // const firstDivElGradient = 145 + (i * (200-145) / 5);
    
    // allFirstDivEl[i].style.backgroundColor = `hsl(${firstDivElGradient}, 80%, 80%)`;
    // allFirstDivEl[i].style.color = 'hsl(245 100% 70%)';
    // allFirstDivEl[i].style.fontWeight = '900';
// }

const container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('secondDivEl-border')

for(let i=0; i<3; i++){
    const secondDivEl = document.createElement('div');
    container.appendChild(secondDivEl);

    secondDivEl.classList.add('secondDivEl-position');
    
    // for(let j=0; j<9; j++){
    //     const tripleH5El = document.createElement('h5');
    //     secondDivEl.appendChild(tripleH5El);
    //     tripleH5El.innerText = j+1;

    //     tripleH5El.classList.add('tripleH5El-position');
    //     tripleH5El.style.backgroundColor = 'hsl(250 100% 85%)';
    // }
}


const tripleDivs = container.querySelectorAll('div');
console.log(tripleDivs);

for(let j=0; j<=9; j++){
    const tripleH5El = document.createElement('h5');
    tripleDivs[0].appendChild(tripleH5El);
    tripleH5El.innerText = 0+j;

    tripleH5El.classList.add('tripleH5El-position');
    tripleDivs[0].classList.add('tripleDiv-border');

    if(j === 4){
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

for(let j=0; j<10; j++){
    const tripleH5El = document.createElement('h5');
    tripleDivs[1].appendChild(tripleH5El);
    tripleH5El.innerText = 9-j;

    tripleH5El.classList.add('tripleH5El-position');
    tripleDivs[1].classList.add('tripleDiv-border');

    if(j === 1){
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
