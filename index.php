<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown to HTML</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      font-family: Arial, sans-serif;
      margin: 0;
      height: 100vh;
    }
    #editor {
      flex: 1;
      border: 1px solid #ccc;
    }
    #preview {
      flex: 1;
      border: 1px solid #ccc;
      overflow-y: auto;
      padding: 10px;
    }
    .container {
      display: flex;
      flex: 1;
    }
     /* プレビュー全体のスタイル */
    #preview {
      flex: 1;
      padding: 16px;
      overflow: auto;
      background: #f9f9f9;
    }

    /* コードブロックのスタイル */
    #preview pre {
      background-color: #2d2d2d; /* 背景色を設定 */
      color: #f8f8f2; /* テキスト色を設定 */
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }

    /* コード内のハイライトスタイル（オプション） */
    #preview code {
      font-family: 'Courier New', Courier, monospace;
    }
  </style>
</head>
<body>
  <h1>Markdown Editor</h1>
    <div class="container">
      <div id="editor"></div>
      <div id="preview"></div>
    </div>
</body>
</html>
<script src="https://cdn.jsdelivr.net/npm/monaco-editor@0.40.0/min/vs/loader.js"></script>
<script src="/public/js/editor.js"></script>
