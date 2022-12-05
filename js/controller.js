'use strict'

function onLogin(ev) {
    ev.preventDefault()
    const elUsername = document.querySelector('input[name="username"]')
    const username = elUsername.value
    const elPassword = document.querySelector('input[name="password"]')
    const password = elPassword.value
    if (!username || !password) return
    const isLogin = doLogin(username, password)
    if (isLogin) {
        updateLastLogin(isLogin)
        saveToStorage('user', isLogin)
        if (isLogin.isAdmin) saveToStorage('users', getUsers())
        goToLoggedIn()
    } else {
        alert('Wrong password. Try again!')
    }
}