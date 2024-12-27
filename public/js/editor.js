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

  const preview = document.getElementById('preview-content');

  // Preview, HTML, Highlight, Downloadのボタンのどれが選択されているかで挙動を変えたい 
  // 画面初期化時の挙動
  window.onload = () => {
    const mode = localStorage.getItem('mode');

    if(!mode || mode != 'preview') localStorage.setItem('mode', 'preview');
  }

  const previewButton = document.getElementById('preview-button');
  previewButton.addEventListener('click', () => {
    localStorage.setItem('mode', 'preview');
  })

  const htmlButtun = document.getElementById('html-button');
  htmlButtun.addEventListener('click', () => {
    localStorage.setItem('mode', 'html')
  })
  const highlighButton = document.getElementById('highlight-button');
  highlighButton.addEventListener('click', () => {
    localStorage.setItem('mode', 'highlight')
  })
  const downloadButton = document.getElementById('download-button');
  downloadButton.addEventListener('click', () => {
    localStorage.setItem('mode', 'download')
    const previewContent = document.getElementById('preview-content');
    
    const data = previewContent.innerHTML;
    const blob = new Blob([data], { type: 'text/html' });  // HTMLファイルとしてBlobを作成
    const url = URL.createObjectURL(blob);  // Blob URLを作成

    // ダウンロード用リンクを作成してクリックイベントを発火
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.html';  // ダウンロードするファイル名
    a.click();  // 自動的にクリックしてダウンロードを開始
    URL.revokeObjectURL(url);  // ダウンロード後、Blob URLを解放
  })
  const updateEditor = () => {
    editor.onDidChangeModelContent(async() => {
      const mode = localStorage.getItem('mode');
      
      if(mode === 'highlight') {
        // TODO: Add Code highlight function
        console.log("Highlight");
      }
      else {
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
          if(mode === "preview") {
            preview.innerHTML = data.html;
          }
          else if(mode === "html") {
            preview.innerText = data.html;
          }
        });
      }
    })
  }

   updateEditor();
});
