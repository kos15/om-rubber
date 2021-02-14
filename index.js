const url = 'https://om-rubber.herokuapp.com/';

function httpResq (method,url,data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload= () => {
        window.location.replace('inventry.html');
    }
    data ? xhr.setRequestHeader('Content-Type', 'application/json'): null;
    data ? xhr.send(JSON.stringify(data)) : xhr.send();
    });
    return promise;
}

function login() {
    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    httpResq('POST',url + 'login',data).then(responseData => {
        console.log(responseData);
    });
}