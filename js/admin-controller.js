'use strict'

var gUsers = loadFromStorage('users')
var gUser = loadFromStorage('user')

function onInitAdmin() {
    if (!gUser || !gUser.isAdmin) onNotAdmin()
    else renderTable()
}

function onNotAdmin() {
    localStorageClear()
    goToLogin()
}

function renderTable() {
    var strHTML = `<tr class="bold">
    <td>Username</td>
    <td>Password</td>
    <td>Last Login Time</td>
    <td>isAdmin</td>
    </tr>`
    strHTML += gUsers.map(user => `<tr>
    <td>${user.username}</td>
    <td>${user.password}</td>
    <td>${user.lastLoginTime}</td>
    <td>${user.isAdmin}</td>
    </tr>`).join('')

    document.querySelector('.users-table').innerHTML = strHTML
}

function onGoToLoggedIn() {
    goToLoggedIn()
}

function onSetSort(sortBy) {
    setSort(sortBy)
    renderTable()
}