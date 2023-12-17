"use strict;"

window.onload = () => {

    const definitionSet = {
        classDown: "down",
        classLong: "long",
    }; //definitionSet

    const elements = {
        english: document.querySelector("header > label:first-of-type > input"),
        russian: document.querySelector("header > label:last-of-type > input"),
        main: document.querySelector("main"),
        containerEnglish: document.querySelector("main section:first-of-type"),
        containerRussian: document.querySelector("main section:last-of-type"),
        output: document.querySelector("input[type=text"),
    }; //elements

    elements.english.onclick = event => {
        if (event.target.checked) {
            elements.containerRussian.style.display = "none";
            elements.containerEnglish.style.display = "block";
        }
    }; 
    elements.russian.onclick = event => {
        if (event.target.checked) {
            elements.containerEnglish.style.display = "none";
            elements.containerRussian.style.display = "block";
        }
    }; 



    const genCharacterArray = (charA, charZ) => {
        var result = [], indexFirst = charA.charCodeAt(0), indexLast = charZ.charCodeAt(0);
        for (; indexFirst <= indexLast; ++indexFirst)
            result.push(String.fromCharCode(indexFirst));
        return result;
    }
    const English = genCharacterArray('a', 'z');
    const Russian = genCharacterArray(String.fromCodePoint(0x410), String.fromCodePoint(0x42f));

    const addKey = (text, section) => {
        const key = document.createElement("div");
        key.textContent = text.toUpperCase();
        key.onpointerdown = event =>
            event.target.classList.add(definitionSet.classDown);
        key.onpointerup = event => {
            event.target.classList.remove(definitionSet.classDown);
            elements.output.value += event.target.id ? event.target.id : event.target.textContent;
        }; //key.onpointerup
        key.onpointerleave = event =>
            event.target.classList.remove(definitionSet.classDown);
        section.appendChild(key);
        return key;
    } //addKeyHandlers

    const addKeySet = (aSet, section) => {
        for (let character of aSet)
            addKey(character, section);
    }; //addKeySet
    
    addKeySet(English, elements.containerEnglish);
    addKeySet(Russian, elements.containerRussian);
    addKey(" ", elements.main).classList.add(definitionSet.classLong);

    elements.output.focus();

};
