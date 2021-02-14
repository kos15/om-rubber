const url = 'https://om-rubber.herokuapp.com/';

function httpResq(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response);
        }
        data ? xhr.setRequestHeader('Content-Type', 'application/json') : null;
        data ? xhr.send(JSON.stringify(data)) : xhr.send();
    });
    return promise;
}


function getRecord() {
    httpResq('GET', url + 'inventry').then(responseData => {
        let bundels = Object.values(responseData);
        bundels.forEach(element => {
            document.getElementById('Tabel').innerHTML += `<div class="mx-auto card text-white bg-secondary mb-3 col-8">
            <div class="card-header">${element.bundel_name}</div>
            <div class="card-body text-primary">
                <table class="table table-striped table-dark">
                    <thead>
                    <th scope="col"><h5 class="card-title">Quantity: ${element.bundel_quantity}</h5></th>
                    <th scope="col"><img src="minus.png" width="25" height="25"></img></th>
                    <th scope="col"><img src="plus.png" width="30" height="30"></img></th>
                    </thead>
                </table>
            </div>
        </div><br>`;
        });
    });
}


{/* <div class="mx-auto card border-primary mb-3 col-8">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
    </div> */}