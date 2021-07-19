const inser = document.getElementById('insert');
insert.innerHTML = `
    <div class="key">
        ${'Null'}
        <small>event.key</small>
    </div>
    <div class="key">
        ${'Null'}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${'Null'}
        <small>event.code</small>
    </div>
`
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key">
            ${e.key == ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `
})
