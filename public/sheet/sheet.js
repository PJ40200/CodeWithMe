document.addEventListener("DOMContentLoaded", () => {
    // Handle click event for problem rows
    const problemRows = document.querySelectorAll(".problem-row");

    problemRows.forEach(row => {
        row.addEventListener("click", () => {
            const url = row.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});
