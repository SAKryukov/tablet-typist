"use strict;"

window.onload = () => {

    const elements = {
        english: document.querySelector("footer > label > input:first-of-type"),
        russian: document.querySelector("footer > label > input:last-of-type"),
        container: document.querySelector("main"),
        output: document.querySelector("input[type=text"),
    }; //elements

    const genCharacterArray = (charA, charZ) => {
        var result = [], indexFirst = charA.charCodeAt(0), indexLast = charZ.charCodeAt(0);
        for (; indexFirst <= indexLast; ++indexFirst)
            result.push(String.fromCharCode(indexFirst));
        return result;
    }
    const English = genCharacterArray('a', 'z');
    const Russian = genCharacterArray(String.fromCodePoint(0x410), String.fromCodePoint(0x42f));

    const addKeySet = aSet => {
        for (let character of aSet) {
            const key = document.createElement("div");
            key.textContent = character.toUpperCase();
            key.onpointerdown = () => {
                elements.output.value += event.target.textContent;

            };
            key.onpointerup = event => {
            };
            elements.container.appendChild(key);
        } //loop    
    }; //addKeySet
    
    addKeySet(English);
    elements.container.appendChild(document.createElement("p"));
    addKeySet(Russian);

};
