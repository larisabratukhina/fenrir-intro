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


