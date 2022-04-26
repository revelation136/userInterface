// When back arrow is clicked, show previous section
window.onpopstate = function(event) {
    console.log(event.state.section);
    showSection(event.state.section);
}

function showSection(x) {

//    Find section text from server
//    fetching sections from urlpatterns
    fetch(`/sections/${x}`)
        .then(response => response.text())
        .then(text => {
            console.log(text);
            document.querySelector('#content').innerHTML = text;
            document.querySelector('#content2').innerHTML = text;
        })
}

//    add button functionality
document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
        const section1 = this.dataset.xyz;

        // Add the current state to the history
        history.pushState({section: section1}, "", `section${section1}`);
        showSection(section1);
    };
});