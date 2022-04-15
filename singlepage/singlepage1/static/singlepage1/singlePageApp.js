//  show one page and hide the other two
// parameter 'x' will wait and serve as variable to the data in which the button is click
function showPage(x) {

    // Hide all the divs:
    document.querySelectorAll("div").forEach(div => {
        div.style.display = 'none';
    });

    // show the div provided in the argument
    document.querySelector(`#${x}`).style.display = 'block';
}

// wait for page to load
document.addEventListener('DOMContentLoaded', function() {

// Select all buttons
document.querySelectorAll("button").forEach(button => {

    // when a button is clicked, switch to that page
    button.onclick = function() {
        showPage(this.dataset.xyz);
    }
    })
});