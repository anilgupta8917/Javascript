// Function to highlight words longer than 8 characters
function highlightWords() {
    const paragraph = document.getElementById("paragraph");
    const words = paragraph.textContent.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 8) {
            // Create a span element to wrap the highlighted word
            const span = document.createElement("span");
            span.className = "highlight";
            span.textContent = words[i];
            
            // Replace the original word with the span
            words[i] = span.outerHTML;
        }
    }

    // Update the paragraph content with the highlighted words
    paragraph.innerHTML = words.join(" ");
}

// Call the highlightWords function when the page loads
window.onload = highlightWords;
