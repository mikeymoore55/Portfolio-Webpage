let winkingMan = document.getElementById('animation-pre');

const wink = () => {
    return winkingMan.src = 'resources/images/winky.svg';
}

const unwink = () => {
    return winkingMan.src = 'resources/images/dancing-man.svg';
}

winkingMan.onmousedown = wink;
winkingMan.onmouseup = unwink;


