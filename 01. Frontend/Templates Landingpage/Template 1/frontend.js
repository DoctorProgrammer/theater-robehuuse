function getRequest(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const section1 = document.getElementById("section-1");
    const section2 = document.getElementById("section-2");

    getRequest("http://localhost:3000/message").then((data) => {
        // console.log(data.vorname);
        section1.innerText = data.vorname;
    });
});