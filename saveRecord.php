<?php
require_once 'db.php';
$score = $_POST['score'];
$date = date("d.m.Y");
$name = $_POST['name'];

$dbh = new PDO("mysql:host=localhost;dbname=pudge;charset=utf8;", "root", "");
$result = mysqli_query($GLOBALS['connection'], "SELECT * FROM `leaderboard` WHERE (name = '$name')");
$isRecord = mysqli_fetch_assoc($result);
if ($isRecord) {
    if ($isRecord['score'] * 1 < $score) {
        $stmt = $dbh->prepare("UPDATE `leaderboard` SET `score`=:score, `date`=:date WHERE `name`=:name");
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":score", $score);
        $stmt->bindParam(":date", $date);
        $stmt->execute();
    }
} else {
    $stmt = $dbh->prepare("INSERT INTO `leaderboard` VALUES (NULL, :name, :score, :date)");
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":score", $score);
    $stmt->bindParam(":date", $date);
    $stmt->execute();
}
