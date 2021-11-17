let heading = document.getElementById("heading");
let keyPara = document.getElementById("event-key");
let codePara = document.getElementById("event-code");
let whichPara = document.getElementById("event-which");

console.log(heading);

addEventListener("keypress", (e) =>{
    const myKey = e.key;
    const myCode = e.code;
    const myWhich = e.which;

    heading.innerHTML = myWhich;
    keyPara.innerHTML = `event.key<br>${myKey}`;
    codePara.innerHTML = `event.code<br>${myCode}`;
    whichPara.innerHTML = `event.which<br>${myWhich}`;
});