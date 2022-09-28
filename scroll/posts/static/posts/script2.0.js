let counter = 1;
let quantity = 20;

document.addEventListener('DOMContentLoaded', load_content);
window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load_content();
    }
};

// if hide button is clicked, delete the post
document.addEventListener('click', event => {
    //find what click on
    const element = event.target;
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
        })
    }


})

async function load_content() {
    const start = counter;
    const end = start + quantity - 1;
    counter = end + 1;

    const res = await fetch(`/posts?start=${start}&end=${end}`);
    const data = await res.json();

    console.log(data.xyz);

    data.xyz.forEach(add_post);
}

function add_post(content) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${content} <button class="hide">Hide</button>`;
    document.querySelector('#posts').append(post);
};