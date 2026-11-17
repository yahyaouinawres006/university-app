import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';
import StudentCard from "./components/StudentCard.jsx";
import studentImage from "./img.jpeg";
function App(){
  const etudiant = [
    {
      prenom :"nawres",
      nom :"yahyaoui",
      email :"yahyaouinawres006@gmail.com",
      telephone :"+216 99 999 999",
      filiere : "Genie logiciel et systemes d'information",
      anneeEtude : "2eme annee",
      groupe:"GLSI2",
      ville: "Mahdia",
      image : studentImage,
    },
    {
      prenom:"Slim",
      nom:"Boubaker",
      email:"slimboubaker@gmail.com",
      telephone:"+216 99 999 999",
      filiere:"Genie logiciel",
      anneeEtude:"2 eme annee",
      groupe:"grp B",
      ville:"Mahdia",
      image: studentImage,
    },
    {
      prenom:"Sarra",
      nom:"Trabelsi",
      email:"sarra.trabelsi@gmail.com",
      telephone:"+216 22 345 678",
      filiere:"Genie Logiciel",
      anneeEtude:"2 eme annee",
      groupe:"grp B",
      ville:"Mahdia",
      image:studentImage,
    },
    {
      prenom:"Mariem",
      nom:"Khalfallah",
      email:"mariem.khalfallah@gmail.com",
      telephone:"+216 27 567 890",
      filiere:"Genie logiciel",
      anneeEtude:"2 eme annee",
      groupe:"grp B",
      ville:"Mahdia",
      image:studentImage,
    }
];
return (
  <div >
    <Header />
    <Navbar />
    <main id="etudiants">
      <h2>Liste des etudiants</h2>
      <div className="liste-etudiants">
        {etudiants.map((etudiant)=>(
        <StudentCard 
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          anneeEtude={etudiant.anneeEtude}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image= {etudiant.image}
        />
      ))}
      </div>
    </main>
    <Footer />
  </div>
  );
}

export default App;
