function addRemoveActive(e) {
    let activeEl = document.querySelector('.active');
    activeEl.setAttribute('aria-selected', 'false');
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    e.target.setAttribute('aria-selected', 'true');
}

function setRegNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const regNumber = urlParams.get('regNumber');
    document.getElementById("reg-nummer").innerText = regNumber;
}
