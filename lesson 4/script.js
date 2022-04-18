// const blocks = document.getElementsByClassName('block');
// const block = document.getElementById('blockhz')
//
// block.onclick = () => {
//     block.classList.toggle('active');
//     console.log(block);
// }
let button = document.getElementById('button');
let input = document.getElementById('input');

button.onclick = () => {
    let div = document.createElement('div')
    div.setAttribute('class', 'block');
    div.innerText = input.value;
    let deleteText = document.createElement('button');
    deleteText.setAttribute('class', 'delete')
    deleteText.innerText = 'delete';
    document.body.append(deleteText)
    document.body.append(div);
    input.value = "";
    deleteText.onclick = () => {
        div.remove();
        deleteText.remove()
    }
}
