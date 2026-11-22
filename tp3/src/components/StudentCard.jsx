import {useState} from "react";
function StudentCard(props){
    const [coordonneesVisibles, setCoordonneesVisibles]= useState(false);
    function basculerInformations(){
        setCoordonneesVisibles(!coordonneesVisibles);
    }
    return(
    <div className="card">
        <img src={props.image} className="photo" alt={props.prenom}/>
        <h1>
            fiche etudiant
        </h1>
        <p>
            Nom & Prenom: {props.prenom} {props.nom}
        </p>
        <p>
            Filiere: {props.filiere}
        </p>
        <p>
            AnneeEtude: {props.anneeEtude}
        </p>
        <p>
            Groupe: {props.groupe}
        </p>
        <p>
            Ville : {props.ville}
        </p>
        <button onClick={basculerInformations}>
            {coordonneesVisibles
            ? "Masquer les coordonnees"
            : "Afficher les coordonnees"}
        </button>
        {coordonneesVisibles &&(
            <div>
                <p>Email: {props.email}</p>
                <p>Telephone: {props.telephone}</p>
            </div>
        )}
        <button onClick={()=> props.onSupprimer(props.id)}>Supprimer</button>
        <button onClick={() => props.onModifier(props.id)}>Modifier</button>
    </div>
    );
}
export default StudentCard;