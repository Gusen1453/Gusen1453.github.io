// Add copy buttons to code blocks and set language attributes
document.addEventListener('DOMContentLoaded', function () {
  // Get all the code blocks
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge, figure.highlight');
  
  // Process each code block
  codeBlocks.forEach(function (codeBlock) {
    // Set language attribute
    const codeBlockClass = codeBlock.className;
    let lang = 'code';
    
    // Extract language from class (like language-python, language-js, etc.)
    if (codeBlockClass.includes('language-')) {
      lang = codeBlockClass.match(/language-(\w+)/)[1];
    } else if (codeBlockClass.includes('highlight-')) {
      lang = codeBlockClass.match(/highlight-(\w+)/)[1];
    }
    
    // Set the data-lang attribute for CSS ::before content
    codeBlock.setAttribute('data-lang', lang);
    
    // Create the copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.title = '复制代码';
    copyButton.setAttribute('aria-label', '复制代码');
    
    // Append button to code block
    codeBlock.appendChild(copyButton);
    
    // Add click event
    copyButton.addEventListener('click', function () {
      // Get the code content
      const code = codeBlock.querySelector('pre').textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(code).then(function() {
        // Temporary change button text
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      }, function() {
        // Error handling
        copyButton.innerHTML = '<i class="fas fa-times"></i>';
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      });
    });
  });
}); 