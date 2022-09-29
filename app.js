const input = document.querySelector('#title');
const button = document.querySelector('.btn');
const list = document.querySelector('.container ul');
button.addEventListener('click', (e) => {
    if (input.value != "") {
        e.preventDefault();
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        list.appendChild(newLi);
        const myspan = document.createElement('span');
        myspan.innerHTML = 'x';
        newLi.appendChild(myspan);
    }
    const cross = document.querySelectorAll('span');
    for (let i = 0; i < cross.length; i++) {
        cross[i].addEventListener('click', () => {
            cross[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                cross[i].parentElement.style.display = 'none';
                cross[i].parentElement.remove();
            }, 500)
        })
    }
    input.value = "";
})



