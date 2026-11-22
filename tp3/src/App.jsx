import { useState } from 'react';
import './App.css';
import studentImage from "./img.jpeg";
import SarraImage from "./sarra.jpeg";
import SlimImage from "./slim.jpeg";
import StudentCard from "./components/StudentCard.jsx";
function App() {
  const [etudiants, setEtudiants]=useState([
    {
      id:1,
      prenom :"Nawres",
      nom :"Yahyaoui",
      email :"yahyaouinawres006@gmail.com",
      telephone :"+216 99 999 999",
      filiere : "Genie logiciel et systemes d'information",
      anneeEtude : "2eme annee",
      groupe:"GLSI2",
      ville: "Mahdia",
      image : studentImage,
    },
    {
      id:2,
      prenom:"Slim",
      nom:"Boubaker",
      email:"slimboubaker@gmail.com",
      telephone:"+216 99 999 999",
      filiere:"Genie logiciel",
      anneeEtude:"2 eme annee",
      groupe:"GLSIB",
      ville:"Mahdia",
      image: SlimImage,
    }
  ]);
  const[recherche,setRecherche]=useState("");
  function ajouterEtudiant(){
    const nouvelEtudiant={
      id:Date.now(),
      prenom:"Sarra",
      nom:"Trabelsi",
      email:"sarra.trabelsi@gmail.com",
      telephone:"+216 22 345 678",
      filiere:"Genie Logiciel",
      anneeEtude:"2 eme annee",
      groupe:"grp B",
      ville:"Mahdia",
      image:SarraImage,
    };
    setEtudiants(anciensEtudiants =>
      [...anciensEtudiants,nouvelEtudiant]
    );
  }
  function supprimerEtudiant(id){
    setEtudiants((anciensEtudiants)=> 
      anciensEtudiants.filter((etudiant)=>
        etudiant.id !== id ));
  };
  function modifierEtudiant(id){
    const nouveauPrenom=prompt("Nouveau prenom:");
    if (nouveauPrenom === null) return;
    const prenom= nouveauPrenom.trim();
    if(prenom ==="") return;
    setEtudiants((anciensEtudiants)=> 
      anciensEtudiants.map((etudiant)=>
        etudiant.id === id
          ? {...etudiant,prenom: prenom}
          : etudiant ));
}
const etudiantFiltres =etudiants.filter((etudiant)=>
  etudiant.filiere.toLowerCase().includes(recherche.toLowerCase()));
  return(
    <div className='liste-etudiants'>
      <header/>
      <navbar />
      <input type="text" placeholder='Recherche par filiere'  className='bouton'value={recherche} onChange={(e)=> setRecherche(e.target.value)} />
      <button onClick={ajouterEtudiant} className='bouton'>+ Ajouter un etudiant</button>
      {etudiantFiltres.map((etudiant)=>(
        <StudentCard 
        key={etudiant.id} 
        {...etudiant}
        onSupprimer={supprimerEtudiant}
        onModifier={modifierEtudiant}
        />
        ))
      }
  </div>
  );
}
export default App;