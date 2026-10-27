import './App.css';
const etudiant ={
  prenom :"nawres",
  nom :"yahyaoui",
  email :"yahyaouinawres006@gmail.com",
  telephone :"+216 99 999 999",
  filiere : "Genie logiciel et systemes d'information",
  anneeEtude : "2eme annee",
  groupe:"GLSI2",
  ville: "Mahdia",
  image : "img.jpeg",
};
function App() {

  return (
        <div className='container'>
          <div className='card'>
            <img src="img.jpeg" alt="photo de l'etudiant" />
            <h1>
              fiche etudiant
            </h1>
            <p>
              <strong>Nom & Prenom:</strong> {etudiant.prenom} {etudiant.nom}
            </p>
            <p>
              <strong>Email:</strong> {etudiant.email}
            </p>
            <p>
              <strong>tel:</strong> {etudiant.telephone}
            </p>
            <p>
              <strong>filiere:</strong> {etudiant.filiere}
            </p>
            <p>
              <strong>anneeEtude:</strong>{etudiant.anneeEtude}
            </p>
            <p>
              <strong>groupe:</strong> {etudiant.groupe}
            </p>
            <p>
              <strong>ville :</strong> {etudiant.ville}
            </p>
          </div>
        </div>
  );
}

export default App;
