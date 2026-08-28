const CarteRando = (props) => {
	return (
		<div className="carte">
			<h2>{props.randonnee.nom}</h2>
			<p>Difficulté : {props.randonnee.difficulte}</p>
			<p>Durée : {props.randonnee.duree_h} heures</p>
			<p>Dénivelé : {props.randonnee.denivele_m} mètres</p>
		</div>
	);
};

export default CarteRando;