//This Script makes a fetch (essential a GET Http) request to the server

const contactList = document.querySelector('#contactList');
fetch('http://localhost:3000/api/getContact')
    .then(res => res.json())
    .then((contacts) => {
        //.map() is used to cycle through the array, and a template literal is used to return HTML for
        //each item in the array. InnerHTML is then used to parse the returned HTML to the contactList object
        let dataFeed = contacts.map((contact) => {
            return `
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <span class="card-title">${contact.name}</span>
                        <p>${contact.email}</p>
                        <p>${contact.number}</p>
                        </div>
                    </div>
                </div>
            `
        }).join('');
        contactList.innerHTML = dataFeed;
    })
    .catch(err => { throw err });
