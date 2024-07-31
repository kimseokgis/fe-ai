document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll("#typing-effect span");
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('typing-span');
            const text = span.textContent;
            span.textContent = '';
            let i = 0;
            const interval = setInterval(() => {
                span.textContent += text.charAt(i);
                i++;
                if (i > text.length) clearInterval(interval);
            }, 100); // Adjust speed here
        }, index * 2000); // Delay between lines
    });
});