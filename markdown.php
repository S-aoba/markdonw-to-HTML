<?php

require 'vendor/autoload.php'; // Composerを使う場合

use Parsedown;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true); // デコードして連想配列に変換

    
    $parsedown = new Parsedown();
    $html = $parsedown->text($data); // MarkdownをHTMLに変換

    echo json_encode(['html' => $html]);
    exit;
}

?>
