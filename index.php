<!doctype html>
<html lang="ru">

<head>
  <meta charset="utf-8" />
  <title>Ban the bucha</title>
  <link rel="stylesheet" href="pudge.css" />
  <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet">
  <script src="jquery.js"></script>
</head>

<body>
  <div class='page'>
    <div id="danceTop">
      <div class='dancingPudgeRow'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
      </div>
    </div>
    <div id="danceBot">
      <div class='dancingPudgeRow'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
        <img src='./pics/streak.gif' class='dancingPudge'>
      </div>
    </div>
    <div class="gameOver">
      <a href="leaderboard.php" class="leaderboard">Leaderboard</a>
      <span></span>
      <div id='died'>You Died</div>
      <div class="okay">Retry?</div>
    </div>
    <div id='score'>
      <p>Pudges banned: 0</p>
    </div>
    <div id='lives'>
      <img src='./pics/lives.png' id='life'>
      <img src='./pics/lives.png' id='life'>
      <img src='./pics/lives.png' id='life'>
    </div>
    <div class='pudgeses'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'><br>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'><br>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'><br>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'><br>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
      <img src="./pics/pudge.png" class='pudge'>
    </div>
    <input id="volume" type="range" min="0" max="10" value="4" step="0.1" oninput="volumeFunc()"/>
    <div id='retryBtn'>
      <p>Retry</p>
    </div>
  </div>
  <script src="pudge.js"></script>
</body>

</html>