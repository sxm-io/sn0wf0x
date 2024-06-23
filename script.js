document.addEventListener("DOMContentLoaded", function() {
    const footerText = "© GPCSSI' 2024. Made with ❤️ by Samridh Gaur (CW-396). Under the Guidence of my Chief Mentor, Shri Rakshit Tandon.";
    const mainHeadingText = "SN0WFOX OSINT";
    let i = 0;
    const speed = 100; // typing speed in milliseconds

    function typeWriter(text, elementId) {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, elementId), speed);
        } else {
            i = 0;
        }
    }

    typeWriter(mainHeadingText, "main-heading");
    setTimeout(() => typeWriter(footerText, "footer-text"), 2000); // Delay the footer typing effect slightly
});
