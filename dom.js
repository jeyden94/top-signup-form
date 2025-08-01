const abbasidOption = document.querySelector(".my-civ-abbasid");
const abbasidFlag = document.querySelector("#abbasid-flag");
const goldShadow = "2px 2px 25px gold";

abbasidOption.addEventListener('mouseup', addShadowAbbasid)

function addShadowAbbasid() {
    clearShadows();
    abbasidFlag.style.boxShadow = goldShadow;
};

const chinaOption = document.querySelector(".my-civ-china");
const chinaFlag = document.querySelector("#china-flag");

chinaOption.addEventListener('mouseup', addShadowChina)

function addShadowChina() {
    clearShadows();
    chinaFlag.style.boxShadow = goldShadow;
}

const delhiOption = document.querySelector(".my-civ-delhi");
const delhiFlag = document.querySelector("#delhi-flag");

delhiOption.addEventListener('mouseup', addShadowDelhi)

function addShadowDelhi() {
    clearShadows();
    delhiFlag.style.boxShadow = goldShadow;
};


const englishOption = document.querySelector(".my-civ-english");
const englishFlag = document.querySelector("#english-flag");

englishOption.addEventListener('mouseup', addShadowEnglish)

function addShadowEnglish() {
    clearShadows();
    englishFlag.style.boxShadow = goldShadow;
};


const frenchOption = document.querySelector(".my-civ-french");
const frenchFlag = document.querySelector("#french-flag");

frenchOption.addEventListener('mouseup', addShadowFrench)

function addShadowFrench() {
    clearShadows();
     frenchFlag.style.boxShadow = goldShadow;
};


const hreOption = document.querySelector(".my-civ-hre");
const hreFlag = document.querySelector("#hre-flag");

hreOption.addEventListener('mouseup', addShadowHRE)

function addShadowHRE() {
    clearShadows();
    hreFlag.style.boxShadow = goldShadow;
};


const mongolOption = document.querySelector(".my-civ-mongol");
const mongolFlag = document.querySelector("#mongol-flag");

mongolOption.addEventListener('mouseup', addShadowMongol)

function addShadowMongol() {
    clearShadows();
    mongolFlag.style.boxShadow = goldShadow;
};


const rusOption = document.querySelector(".my-civ-rus");
const rusFlag = document.querySelector("#rus-flag");

rusOption.addEventListener('mouseup', addShadowRus)

function addShadowRus() {
    clearShadows();
    rusFlag.style.boxShadow = goldShadow;
};


function clearShadows() {
    abbasidFlag.style.boxShadow = "none";
    chinaFlag.style.boxShadow = "none";
    delhiFlag.style.boxShadow = "none";
    englishFlag.style.boxShadow = "none";
    frenchFlag.style.boxShadow = "none";
    hreFlag.style.boxShadow = "none";
    mongolFlag.style.boxShadow = "none";
    rusFlag.style.boxShadow = "none";
};