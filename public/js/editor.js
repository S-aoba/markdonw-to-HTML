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
  })
  const updateEditor = () => {
    editor.onDidChangeModelContent(async() => {
      const mode = localStorage.getItem('mode');
      
      if(mode === 'highlight') {
        console.log("Highlight");
      }
      else if(mode === 'download') {
        console.log("download");
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
