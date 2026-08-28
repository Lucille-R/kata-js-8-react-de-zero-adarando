import EtiquetteDifficulte from "./EtiquetteDifficulte";

const CarteRando = (props) => {
	return (
		<div className="carte">
			<h2>{props.randonnee.nom}</h2>
			<p>Durée : {props.randonnee.duree_h} heures</p>
			<p>Dénivelé : {props.randonnee.denivele_m} mètres</p>
			{props.randonnee.balisee && <p>Balisée</p>}
			<EtiquetteDifficulte difficulte={props.randonnee.difficulte} />
		</div>
	);
};

export default CarteRando;