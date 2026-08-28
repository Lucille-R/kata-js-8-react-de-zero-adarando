const Entete = (props) => {
	return (
		<div className="entete">
			<h1>AdaRando</h1>
			<p>Le guide de vos randos !</p>
			<span className="nb-randos">Actuellement : {props.nbRandonnees} randonnées sur notre guide</span>
		</div>
	);
};

export default Entete;