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
        showSection(this.dataset.xyz);
    };
});