require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.40.0/min/vs' } });
require(['vs/editor/editor.main'], function () {
    monaco.editor.create(document.getElementById('editor'), {
        value: `function hello() {\n\tconsole.log("Hello, world!");\n}`,
        language: 'javascript'
    });
});
