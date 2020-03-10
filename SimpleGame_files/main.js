var id;
var shapes = ['circle', 'square'];
var colors = ['red', 'orange', 'blue', 'green', 'purple', 'brown'];
var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;
var sec = 10;
var score = 0;

function startGame() {
    score = 0;
    sec = 60;
    document.getElementById('btn').disabled = true;
    document.getElementById('container').innerHTML = '';
    document.getElementById('score').innerHTML = 'Score: ' + score;
    timer();
    id = setInterval(drawShapes, 500);
}

function drawShapes() {
    var ind = Math.round(Math.random());
    var newShape = document.createElement('div');
    newShape.classList.add(shapes[ind]);

    var topOfShape = Math.round(Math.random() * (documentHeight - 150)) + 50;
    var leftOfShape = Math.round(Math.random() * (documentWidth - 150));

    ind = Math.floor(Math.random() * 6);
    newShape.style.backgroundColor = colors[ind];
    newShape.style.top = topOfShape + 'px';
    newShape.style.left = leftOfShape + 'px';

    newShape.addEventListener('click', removeShape);
    document.getElementById('container').appendChild(newShape);
}

function removeShape() {
    if (sec > 0) {
        this.remove();
        score++;
        document.getElementById('score').innerHTML = 'Score: ' + score;
    } else {
        alert('Game is already over!\nPlease start again');
    }
}

function stopGame() {
    clearInterval(id);
    alert('Game Over\n You Scored: ' + score);
    document.getElementById('btn').disabled = false;
}

function timer() {
    function oneSecond() {
        sec -= 1;
        document.getElementById('timer').innerHTML = 'Time Left: ' + sec;
        if (sec <= 0) {
            stopGame();
        } else {
            setTimeout(oneSecond, 1000);
        }
    }
    if (sec > 0) oneSecond();
    else return;
}
