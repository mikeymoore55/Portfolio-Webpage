let winkingMan = document.getElementById('animation-pre');

const wink = () => {
    return winkingMan.src = 'resources/images/winky.svg';
}

const unwink = () => {
    return winkingMan.src = 'resources/images/dancing-man.svg';
}

winkingMan.onmouseover = wink;
winkingMan.onmouseout = unwink;

let fishingMan = document.getElementById('fish');

const catchFish = () => {
    return fishingMan.src = 'resources/images/caught-fish.svg';
}

const release = () => {
    return fishingMan.src = 'resources/images/fishing-man.svg';
}

fishingMan.onmousedown = catchFish;
fishingMan.onmouseup = release;

let fishCount = 0
const fishCounter = () => {
    fishCount++;
    if(fishCount === 30) {
        window.alert('woah slow down there cowboy!');
    } else if (fishCount === 75) {
        window.alert('okay, this is the last time i bring you to my fishing hole!');
    } else if (fishCount === 200) {
        window.alert('you gotta stop...');
    }
    return document.getElementById('fish-count').innerHTML = `fish caught: ${fishCount}`;
}

fishingMan.addEventListener('click', fishCounter);

