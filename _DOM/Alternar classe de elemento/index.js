function capturaClick(){
    document.addEventListener('click', (e) => {
        const el = e.target;
        el.classList.add('ativo');
    })
}

capturaClick()
