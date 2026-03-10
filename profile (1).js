const users = [
  {
    name: "Salma",
    city: "Rabat",
    age: 24,
    bio: "Love books and deep talks.",
    img: "images/salma.jpg"
  },
  {
    name: "Omar",
    city: "Casablanca",
    age: 27,
    bio: "Traveler and football lover.",
    img: "images/omar.jpg"
  },
  {
    name: "Aya",
    city: "Marrakech",
    age: 22,
    bio: "Looking to meet new friends.",
    img: "images/aya.jpg"
  }
];

const container = document.getElementById("profileContainer");

users.forEach(user => {
  const card = document.createElement("div");
  card.className = "profile-card";

  card.innerHTML = `
    <img src="${user.img}" alt="${user.name}">
    <h3>${user.name}, ${user.age}</h3>
    <p><strong>${user.city}</strong></p>
    <p>${user.bio}</p>
    <button onclick="alert('Message sent to ${user.name}')">Message</button>
  `;

  container.appendChild(card);
});
