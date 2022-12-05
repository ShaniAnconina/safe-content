'use strict'

function onInitLoggedIn() {
    greetUser()
}

function greetUser() {
    const user = loadFromStorage('user')
    if (user.isAdmin) {
        document.querySelector('.username-logged').innerText = `Admin`
        document.querySelector('.admin-btn').style.display = 'inline-block'
    } else {
        document.querySelector('.username-logged').innerText = `${user.username}`
    }
}
function onLogOut() {
    localStorageClear()
    goToLogin()
}

function onGoToAdmin() {
    goToAdmin()
}