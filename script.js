/**** This project is licensed under GPLv3, any brand names or logos used in this project belong to their respective owners. ****/

/**
 * Handle displaying an explanation of specific words
 */

// map the words to the corresponding definition here
const def_map = {
    "dolor": "definition of word 'dolor'",
};

document.querySelectorAll(".clickable").forEach(word => {
    word.addEventListener("click", () => {
        document.getElementById("definition").textContent = 
            def_map[word.textContent] || "no definition found";
    });
});
