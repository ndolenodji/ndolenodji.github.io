// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner le formulaire et l'élément d'affichage
    const form = document.getElementById('studentForm');
    const studentInfo = document.getElementById('studentInfo');
    const editButton = document.getElementById('editButton');
  
    // Ajouter un écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêcher le rechargement de la page
  
      // Récupérer les valeurs des champs du formulaire
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const dob = document.getElementById('dob').value;
      const birthPlace = document.getElementById('birthPlace').value;
      const address = document.getElementById('address').value;
      const course = document.getElementById('course').value;
      const photoInput = document.getElementById('photo');
      const photo = photoInput.files[0];
  
      // Validation des champs requis
      if (!firstName || !lastName || !email || !phone || !dob || !birthPlace || !address || !course || !photo) {
        alert('Veuillez remplir tous les champs.');
        return;
      }
  
      // Afficher les informations de l'étudiant
      document.getElementById('displayFirstName').textContent = firstName;
      document.getElementById('displayLastName').textContent = lastName;
      document.getElementById('displayEmail').textContent = email;
      document.getElementById('displayPhone').textContent = phone;
      document.getElementById('displayDob').textContent = dob;
      document.getElementById('displayBirthPlace').textContent = birthPlace;
      document.getElementById('displayAddress').textContent = address;
      document.getElementById('displayCourse').textContent = course;
  
      // Afficher la photo
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('displayPhoto').src = e.target.result;
      };
      reader.readAsDataURL(photo);
  
      // Masquer le formulaire et afficher les informations
      form.style.display = 'none';
      studentInfo.style.display = 'block';
    });
  
    // Ajouter un écouteur d'événement pour le bouton de modification
    editButton.addEventListener('click', function () {
      // Réafficher le formulaire et masquer les informations
      form.style.display = 'block';
      studentInfo.style.display = 'none';
  
      // Réinitialiser le formulaire
      form.reset();
    });
  });
  