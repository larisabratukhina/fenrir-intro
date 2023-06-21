// Get the current date
const today = new Date();

// Get the current year
const thisYear = today.getFullYear();

// Get the footer element
const footer = document.querySelector('footer');

// Create a new paragraph element for the copyright text
const copyright = document.createElement('p');

// Set the inner HTML of the copyright element to display your name and the current year
// Unicode to insert a copyright symbol in front of the year('&#169;' or'&#xA9;' or '&copy;')
copyright.innerHTML = 'Larysa Bratukhina ' + '&#xA9; ' + thisYear;

// Append the copyright element to the footer
footer.appendChild(copyright);

// List my technical skills
const skills = ['JavaScript', 'Java', 'CSS', 'HTML'];

// Get the skills section
const skillsSection = document.getElementById('skills');

// Get the unordered list element
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
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName} </a><span>wrote: &nbsp${usersMessage} </span>`;

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
