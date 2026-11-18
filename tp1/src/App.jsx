import './App.css'
import studentPhoto from "./assets/img.jpeg";
function App() {
  return (
    <div className="fiche">
      <img src={studentPhoto} alt="Photo de l'etudiant" className="photo"/>
      <h1>Fiche etudiant</h1>
      <p><strong>Nom & Prenom:</strong>Nawres Yahyaoui</p>
      <p><strong>Email:</strong>yahyaoui.nawres006@gmail.com</p>
      <p><strong>Telephone:</strong>+216 97 103 468</p>
      <p><strong>Filiere:</strong>Genie Logiciel et Systemes d'Information</p>
      <p><strong>Annee d'etude:</strong>2eme annee</p>
      <p><strong>Groupe:</strong>GLSI B</p>
      <p><strong>ville:</strong>Mahdia</p>
      <a href="mailto:yahyaoui.nawres006@gmail.com">
        <button className='bouton'>Contacter</button>
      </a>
    </div>
  );
}

export default App
