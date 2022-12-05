'use strict'

var gUsers
var gNextId = 101

_createUsers()

function doLogin(username, password) {
   return gUsers.find(user => user.username === username && user.password === password)
    // If the user successfully log-in, update his lastLoginDate
}

function updateLastLogin(user) {
    user.lastLoginTime = Date.now()
    _saveUsers()
}

function _createUsers() {
    var users = loadFromStorage('users')
    if (!users || !users.length) {
        gUsers = [
            _createUser('Puki', 'pass123'),
            _createUser('shani', '12345', true),
            _createUser('Muki', 'lalala')
        ]
        _saveUsers()
    }
    gUsers = users
}

function _createUser(username, password, isAdmin = false) {
    return {
        id: gNextId++,
        username,
        password,
        lastLoginTime: 0,
        isAdmin
    }
}

function getUsers() {
    return gUsers
}

function _saveUsers() {
    saveToStorage('users', gUsers)
}

//////////////////////////////ADMIN&LOGGD-IN//////////////////////////////

function setSort(sortBy){
    gUsers.sort((a, b) => {
        if (sortBy === 'name') {
            if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return -1
            if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return 1
            return 0
        }
        return a[sortBy] - b[sortBy]
    })
console.log('gUsers:', gUsers)}

function goToLogin() {
    window.location.replace(`/index.html`)
}

function goToLoggedIn() {
    window.location.replace(`/loggedin.html`)
}

function goToAdmin(){
    window.location.replace(`/admin.html`)
}