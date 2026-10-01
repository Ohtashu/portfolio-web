const userName = 'ohtashu';

const getAndDisplayGithub = () => false;
const getGithubRepoName = async () => {
    try {

            const repos = await fetch(`https://api.github.com/users/${userName}/repos`);
            const myProject = await repos.json();
            const featuredProject = ['Paw-Active', 'mhacto_official', 'WinLix-Util','Mythspire'];

            const indexHTML = document.getElementById('projects-container');

            indexHTML.innerHTML = '';

            myProject.forEach((repos) => {
                if(repos.fork) return;
                if(!featuredProject.includes(repos.name)) return;

                const cardHTML =
                    `
                <div class="projects-grid">
                <h3>${repos.name}</h3>
                <p>${repos.description || 'No description provided. '}</p>
                <span class="language-badge">${repos.language, repos.language || 'Code'}</span>
                <a class="link" href="${repos.html_url}" target="_blank">View Code</a>
                </div>
                    `;

                indexHTML.innerHTML += cardHTML;
            })

    } catch (error) {
        console.error('Failed to fetch repos.', error);
        document.getElementById('projects-container').innerHTML = '<p>Unable to load Repositories</p>';
    }
};
getGithubRepoName();