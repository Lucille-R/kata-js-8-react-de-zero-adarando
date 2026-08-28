import CarteRando from "./CarteRando";

const ListeRandos = (props) => {
	const cartes = props.randonnees.map((randonnee) => {
		return <CarteRando key={randonnee.id} randonnee={randonnee} />;
	});

	return (
		<div className="liste-rando">
			{cartes}
		</div>
	);
};

export default ListeRandos;