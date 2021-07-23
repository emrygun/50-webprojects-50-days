const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const {data} = await axios(APIURL + username)
        createUserCard(data);
    } 
    catch(err) {
        createUserCard(null, true);
    }
}

async function getUserRepos(data) {
    reposHTML = '';
    try {
        const repos = await axios(data.repos_url);
        repos.data.forEach((repo) => {
            reposHTML += `<a class="repo" href="${repo.html_url}">${repo.name}</a>`
        });
        return reposHTML;
    } 
    catch(err) {
        return reposHTML;
    }
}

async function createUserCard(data, error = false) {
const repos = await getUserRepos(data);
const cardHTML = !error ?
    `
    <div class="card">

        <div>
            <img src="${data.avatar_url}" alt="" class="avatar">
        </div>

        <div class="user-info">
            <h2>${data.name}</h2>
            <p>
                ${data.bio ? data.bio : ''}
            </p>
            <ul>
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>Following</strong></li>
                <li>${data.public_repos} <strong>Public Repos</strong></li>
            </ul>

            <div id="repos">
                ${repos}
            </div>

        </div>
    </div>
    `
    :
    `
    <div class="card error">
        User Not Found
    </div>
    `
    ;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);
        search.value = '';
    }
})
