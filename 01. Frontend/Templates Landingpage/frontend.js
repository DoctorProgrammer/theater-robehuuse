function getRequest(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setMessage(data)
        })
}

function setMessage(data) {
    document.getElementById('section-1').innerText = data.message;
}

document.addEventListener('DOMContentLoaded', function () {
    getRequest("http://localhost:3000/message/", "GET");
});