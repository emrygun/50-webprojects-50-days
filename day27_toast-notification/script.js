const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const status = [
    'info',
    'success',
    'error',
    'warning',
]

button.addEventListener('click', () => createNotification(getRandomMessage(), getRandomStatus()));

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomStatus() {
    return status[Math.floor(Math.random() * status.length)];
}

function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast', 'active');
    notif.classList.add(type);
    notif.innerText = message ? message : '';

    toasts.appendChild(notif);
    setTimeout(() => {
        notif.classList.remove('active');
    }, 10)

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
