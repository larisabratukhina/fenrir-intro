/*
Get the current date, year, footer element, create a new paragraph element for the copyright text
Set the inner HTML of the copyright element to display my name and the current year
Unicode to insert a copyright symbol in front of the year('&#169;' or'&#xA9;' or '&copy;')
Append the copyright element to the footer
*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = '&#xA9; ' + thisYear + ' Larysa Bratukhina ';
footer.appendChild(copyright);

// Add my skills to the skills sections
const skills = ['JavaScript', 'Java', 'CSS', 'HTML'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

// Loop through the skills array and add each skill to the list
for (let skill of skills) {
    let li = document.createElement('li');
    li.innerText = skill;
    li.classList.add('skill-item');
    skillsList.appendChild(li);
}

// Handle Message Form Submit. Display Messages in List
const messageForm = document.querySelector("[name='leave_message']");

function toggleMessageSectionVisibility() {
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    if (messageList.childElementCount === 0) {
        messageSection.style.display = 'none';
    } else {
        messageSection.style.display = 'block';
    }
}

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    messageForm.reset();

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.className = "message-section";
    newMessage.innerHTML = `<a href="mailto:${usersEmail}" class="message-email">${usersName} </a><span>wrote: &nbsp${usersMessage} </span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.className = "remove-button";

    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();
        toggleMessageSectionVisibility();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // Function to hide the #messages section including its header when the list is empty
    toggleMessageSectionVisibility();
})

// AJAX
// let githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/larisabratukhina/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', function () {
//     let repositories = JSON.parse(githubRequest.response);

//     console.log(repositories);

//     let projectSection = document.getElementById('projects');
//     let projectList = projectSection.querySelector('ul');

//     for (let i = 0; i < repositories.length; i++) {
//         let project = document.createElement('li');
//         let projectLink = document.createElement('a');

//         projectLink.href = repositories[i].html_url;
//         projectLink.innerText = repositories[i].name;
//         project.appendChild(projectLink);

//         let description = document.createElement('p');
//         if (repositories[i].description == null) {
//             description.innerText = "";
//         } else {
//             description.innerText = "Description: " + repositories[i].description;
//         }
//         project.appendChild(description);

//         let createdAt = document.createElement('p');
//         createdAt.innerText = "Created date of a repository: "
//             + new Date(repositories[i].created_at)
//                 .toLocaleDateString();

//         project.appendChild(createdAt);
//         projectList.appendChild(project);
//     }
// });

// Fetch API
let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/larisabratukhina/repos')
    .then(response => response.json())
    .then(repositories => {
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li');
            let projectLink = document.createElement('a');

            projectLink.href = repositories[i].html_url;
            projectLink.innerText = repositories[i].name;
            project.appendChild(projectLink);

            let description = document.createElement('p');
            if (repositories[i].description == null) {
                description.innerText = "";
            } else {
                description.innerText = "Description: " + repositories[i].description;
            }
            project.appendChild(description);

            let createdAt = document.createElement('p');
            createdAt.innerText = "Created date of a repository: "
                + new Date(repositories[i].created_at)
                    .toLocaleDateString();

            project.appendChild(createdAt);
            projectList.appendChild(project);
        }
    })
    .catch(function (error) {
        console.error(error);
    });
