function StudentCard(props) {
  return (
    <div className='card'>
        <img src={props.image} />
        <h1>
            fiche etudiant
        </h1>
        <p>
            Nom & Prenom:{props.prenom} {props.nom}
        </p>
        <p>
            Email:{props.email}
        </p>
        <p>
            Telephone:{props.telephone}
        </p>
        <p>
            Filiere:{props.filiere}
        </p>
        <p>
            AnneeEtude:{props.anneeEtude}
        </p>
        <p>
            Groupe:{props.groupe}
        </p>
        <p>
            Ville :{props.ville}
        </p>
    </div>
  );
}

export default StudentCard;