function addRemoveActive(e) {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
}

function setRegNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const regNumber = urlParams.get('regNumber');
    console.log(regNumber);
    document.getElementById("reg-nummer").innerText = regNumber;
}
