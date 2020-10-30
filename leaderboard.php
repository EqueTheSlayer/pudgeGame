<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8"/>
    <title>Ban the bucha</title>
    <link rel="stylesheet" href="../../../Users/o_orl/PhpstormProjects/pudge.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet">
    <script src="jquery.js"></script>
    <script src="main.js"></script>
</head>

<body>
<div class='page'>
    <h1>Best Pudge banners:</h1>
    <div class="leadertable">
        <ol>
        <?php
        require_once 'db.php';
        $result = mysqli_query($GLOBALS['connection'], "SELECT * FROM `leaderboard` ORDER BY `score` DESC");
        while ($isRecord = mysqli_fetch_assoc($result)):?>
        <li>
            <div class="col">
                <div class="row"><?= $isRecord['name'] ?></div>
                <div class="row"><?= $isRecord['score'] ?> score</div>
                <div class="row"><?= $isRecord['date'] ?></div>
            </div>
        </li>
        <?php endwhile; ?>
        </ol>
        <a href="index.php" class="play">Play!</a>
    </div>
</div>
</body>
</html>