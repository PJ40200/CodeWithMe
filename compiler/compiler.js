// Switching between different languages in sidebar
const languageLinks = document.querySelectorAll('.sidebar a');
languageLinks.forEach(link => {
    link.addEventListener('click', function() {
        languageLinks.forEach(l => l.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Handle the "Run Code" button action
function runCode() {
    const language = document.querySelector('.sidebar a.selected').textContent.toLowerCase();
    const code = document.getElementById('codeInput').value;

    // Clear previous output
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    if (!code) {
        outputElement.innerHTML = "<pre>Please enter some code to run.</pre>";
        return;
    }

    // Send the code to the backend for execution
    fetch('http://localhost:5000/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code })
    })
    .then(response => response.json())
    .then(data => {
        if (data.output) {
            outputElement.innerHTML = `<pre>${data.output}</pre>`;
        } else {
            outputElement.innerHTML = `<pre>Error: ${data.error}</pre>`;
        }
    })
    .catch(error => {
        outputElement.innerHTML = `<pre>Error: ${error.message}</pre>`;
    });
}
