// Monaco Editorの読み込み
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs' } });
require(['vs/editor/editor.main'], function() {
  // エディターを初期化
  const editor = monaco.editor.create(document.getElementById('editor'), {
    value: '',
    language: 'markdown',
    theme: 'vs-light',
    automaticLayout: true
  });
  const preview = document.getElementById('preview');

  editor.onDidChangeModelContent(async() => {
    const content = editor.getValue();
    
    await fetch('/markdown.php', {
      method : "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
    .then(response => response.json())
    .then((data) => {
      preview.innerHTML = data.html;
    });
    
  })
});
