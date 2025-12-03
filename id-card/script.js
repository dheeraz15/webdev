document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("formSection");
  const cardResult = document.getElementById("cardResult");
  const template = document.getElementById("cardTemplate").content;

  const fullNameInput = document.getElementById("fullName");
  const facultyInput = document.getElementById("faculty");
  const photoInput = document.getElementById("photo");

  let photoURL = "";

  photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) photoURL = URL.createObjectURL(file);
  });

  document.getElementById("generateBtn").addEventListener("click", () => {
    const name = fullNameInput.value.trim();
    const faculty = facultyInput.value.trim();

    if (!name || !faculty || !photoURL) {
      alert("Please fill all fields and upload a photo!");
      return;
    }

    const card = template.cloneNode(true);
    card.querySelector(".dynamic-name").textContent = name;
    card.querySelector(".dynamic-faculty").textContent = faculty;
    card.querySelector(".dynamic-photo").src = photoURL;

    cardResult.innerHTML = "";
    cardResult.appendChild(card);

    formSection.classList.add("hidden");
    cardResult.classList.remove("hidden");
  });
});