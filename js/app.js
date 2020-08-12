const addListForm = document.getElementById('addListForm');
const asideList = document.getElementById('asideList');


//save data

addListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let listName = addListForm.listName.value;

    db.collection('worklist').doc(listName).set({
        name: listName
    }).then(() => {
        // asideList.innerHTML += `<li><a>${listName}</a></li>`
        console.log('success');
    }).catch((err) => {
        console.log(err);
    })
    listName = '';

})


//get data

db.collection('worklist').onSnapshot((snapshot) => {

    let changes = snapshot.docChanges();
    changes.forEach(change => {
        asideList.innerHTML += `<li><a>${change.doc.id}</a></li>`;
    })

})