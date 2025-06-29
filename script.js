
function generateNote() {
    const input = document.getElementById("inputNote").value;
    const output = document.getElementById("outputNote");
    if (input.trim()) {
        output.innerText = "Generated Note: " + input.trim();
    } else {
        output.innerText = "Please enter a note to generate.";
    }
}
