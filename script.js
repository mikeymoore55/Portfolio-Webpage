let winky = document.getElementById('animation-after');
let normal = document.getElementById('animation-pre');

let wink = () => {
    return winky.style.display = 'block';
}

let unwink = () => {
    return winky.style.display = 'none';
}

normal.onmouseover = wink;

winky.onmouseout = unwink;



