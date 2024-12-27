<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/public/css/style.css">
  <title>Markdown to HTML</title>
</head>
<body>
  <div id="container">
    <div class="preview-config">
        <button class="preview-button">Preview</button>
        <button class="preview-button">HTML</button>
        <button class="preview-button">Highlight: ON</button>
        <button class="preview-button">Download</button>
    </div>
    <div class="content-container">
      <div id="editor"></div>
      <div id="preview-content"></div>
    </div>
  </div>
</body>
</html>
<script src="https://cdn.jsdelivr.net/npm/monaco-editor@0.40.0/min/vs/loader.js"></script>
<script src="/public/js/editor.js"></script>
