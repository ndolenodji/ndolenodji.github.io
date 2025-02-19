document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const cardsContainer = document.getElementById('cardsContainer');
    const studentPhotoInput = document.getElementById('studentPhoto');
    let photoPreviewUrl = '';
  
    // Fonction pour prévisualiser la photo avant l'ajout
    studentPhotoInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoPreviewUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        photoPreviewUrl = '';
      }
    });
  
    // Gestion de la soumission du formulaire
    studentForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Récupération des valeurs du formulaire
      const name = document.getElementById('studentName').value;
      const dob = document.getElementById('studentDOB').value;
      const pob = document.getElementById('studentPOB').value;
      const studentClass = document.getElementById('studentClass').value;
      const id = document.getElementById('studentID').value;
      const schoolName = document.getElementById('schoolName').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const address = document.getElementById('studentAddress').value;
      const country = document.getElementById('country').value;
  
      // Création de la carte de l'élève
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-front">
          <h3>${name}</h3>
          <p><strong>Date de naissance :</strong> ${dob}</p>
          <p><strong>Lieu de naissance :</strong> ${pob}</p>
          <p><strong>Classe :</strong> ${studentClass}</p>
          <p><strong>ID :</strong> ${id}</p>
          <p><strong>Établissement :</strong> ${schoolName}</p>
          <p><strong>Date d'expiration :</strong> ${expiryDate}</p>
          <p><strong>Quartier :</strong> ${address}</p>
          <p><strong>République/Pays :</strong> ${country}</p>
        </div>
        <div class="card-back">
          ${photoPreviewUrl ? `<img src="${photoPreviewUrl}" alt="Photo de ${name}">` : ''}
        </div>
      `;
  
      // Ajout de la carte au conteneur
      cardsContainer.appendChild(card);
  
      // Réinitialisation du formulaire
      studentForm.reset();
      photoPreviewUrl = '';
    });
  });
  