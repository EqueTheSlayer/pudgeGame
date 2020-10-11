const pudgeses = document.querySelectorAll('.pudge');
const lives = document.querySelectorAll('#life');
const ok = document.querySelector('.okay');
const gameEnds = document.querySelector('.gameOver');
const livesArr = Array.from(lives);
const parentDiv = document.querySelector('.pudgeses');
const retry = document.querySelector('#retryBtn');
const volume = document.querySelector('#volume');
const danceTop = document.querySelector('#danceTop');
const danceBot = document.querySelector('#danceBot');
const death = document.querySelector('#died');
const dancingPudge = document.querySelectorAll('.dancingPudge');
const deathScore = document.querySelector('span');
const leaderboard = document.querySelector('.leaderboard');
const objName = {};
const missed = new Audio();
const hit = new Audio();
const boom = new Audio();
const happyPudge = new Audio();
const rolling = new Audio();
const first = new Audio();
const deathSouls = new Audio();
const caBOOM = './sounds/explosion.mp3';
const missedArr = ['./sounds/missed.mp3', './sounds/missed2.mp3'];
const hitArr = ['./sounds/hit.mp3', './sounds/hit2.mp3', './sounds/hit3.mp3'];
const disappearTime = 800;
const happyPudgeArr = ['./sounds/tenthpudge.mp3', './sounds/freshmeat1.mp3', './sounds/freshmeat2.mp3', './sounds/freshmeat3.mp3'];
let count = document.querySelector('p');
let score = 0;
let health = 3;
let randomPudge = pudgeses[Math.floor((Math.random() * 25))];
let pudge = 0;
let screenWidth = document.documentElement.clientWidth - 50;

if (localStorage.getItem('name')) {
    objName.name = localStorage.getItem('name');
} else {
    objName.name = prompt("What's your name?");
    if(objName.name.length == 0) {
        objName.name === 'guest';

    } else {
        localStorage.setItem('name', `${objName.name}`);
    }
}

dancingPudge.forEach(pudge => {
    pudge.style.width = `${screenWidth / 10}px`;
})

hit.volume = volume.value / 10;
boom.volume = volume.value / 10;
deathSouls.volume = volume.value / 10;
happyPudge.volume = volume.value / 10;
rolling.volume = volume.value / 10;
first.volume = volume.value / 10;
missed.volume = volume.value / 10;

randomPudge.style.opacity = '1';
disappearPudge(randomPudge);
setInterval(() => {
    let randomSrc = Math.floor((Math.random() * 100));
    let visiblePudge = pudgeses[Math.floor((Math.random() * 25))];
    if (randomSrc < 26 && randomSrc >= 6) {
        visiblePudge.src = './pics/techies.png';
        visiblePudge.style.opacity = '1';
        disappearPudge(visiblePudge);
    } else {
        if (randomSrc < 6) {
            visiblePudge.src = './pics/heal.jpg';
            visiblePudge.style.opacity = '1';
            disappearPudge(visiblePudge);
        } else {
            visiblePudge.src = './pics/pudge.png';
            visiblePudge.style.opacity = '1';
            disappearPudge(visiblePudge);
        }
    }
}, disappearTime);

parentDiv.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    const targetSrc = e.target.src.split('/');

    if (e.target.style.opacity == '1' && targetSrc[targetSrc.length - 1] == 'pudge.png') {
        score++;
        pudge++;
        if (score % 25 === 0) {
                danceBot.style.opacity = '1';
                danceTop.style.opacity = '1';
                rolling.src = './sounds/rolling.mp3';
                first.src = './sounds/first.mp3';
                setTimeout(() => rolling.play(), 1100);
                setTimeout(() => {
                    first.play();
                }, 2800)
                setTimeout(() => {
                    danceBot.style.opacity = '0';
                    danceTop.style.opacity = '0';
                }, 12800);
        }
        hit.src = hitArr[Math.floor(Math.random() * 3)];
        if (score % 25 === 0) {
                happyPudge.src = happyPudgeArr[Math.floor(Math.random() * 4)];
                happyPudge.play();
            } else {
                hit.play();
        }
        count.textContent = `Pudges banned: ${score}`;
        e.target.style.opacity = '0';
    } else {
        if (targetSrc[targetSrc.length - 1] == 'heal.jpg' && e.target.style.opacity == '1') {
            hit.play();
            if (health !== 3) {
                if (health === 1) {
                    livesArr.push(lives[1]);
                }
                if (health === 2) {
                    livesArr.push(lives[2]);
                }
                livesArr.forEach(life => life.style.opacity = '1');
                health++;
            } else {
                score = score + 10;
                count.textContent = `Pudges banned: ${score}`;
            }
            e.target.style.opacity = '0';
        } else {
            if (targetSrc[targetSrc.length - 1] == 'techies.png' && e.target.style.opacity == '1') {
                health = 0;
                livesArr.forEach((life) => life.style.opacity = '0');
                boom.src = caBOOM;
                boom.play();
                gameOver();
            } else {
                pudge = 0;
                health--;
                livesArr[livesArr.length - 1].style.opacity = '0';
                livesArr.splice(livesArr.length - 1, 1);
                missed.src = missedArr[Math.floor(Math.random() * 2)];
                missed.play();
                gameOver();
            }
        }
    }
})

retry.addEventListener('click', () => {
    location.reload();
})

ok.addEventListener('click', () => {
    location.reload();
})

function volumeFunc() {
    hit.volume = volume.value / 10;
    boom.volume = volume.value / 10;
    deathSouls.volume = volume.value / 10;
    happyPudge.volume = volume.value / 10;
    rolling.volume = volume.value / 10;
    first.volume = volume.value / 10;
    missed.volume = volume.value / 10;
}

function disappearPudge(pudge) {
    setTimeout(() => pudge.style.opacity = '0', disappearTime);
}

function gameOver() {
    if (health === 0) {
        deathScore.style.opacity = '1';
        deathScore.textContent = `Pudges banned: ${score}`;
        gameEnds.style.visibility = 'visible';
        death.style.opacity = '1';
        ok.style.opacity = '1';
        leaderboard.style.opacity = '1';
        deathSouls.src = 'sounds/deathsouls.mp3';
        deathSouls.play();
        $.ajax({
            type: "POST",
            data: {'name': objName.name, 'score': score},
            url: "http://178.155.72.51/banPudge/saveRecord.php",
            dataType: 'html',
            success: function (data) {
                console.log(data);
            }
        })
    }
}

console.log('Денис дурак неумный');


