# Les questions de révisions
1. **Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?**  
- Une prop est une donnée.
- Elle est transmise d'un composant parent à un composant enfant.
- C'est toujours le parent qui décide de la valeur d'une prop car c'est une règle en React : les props descendent, elles ne remontent jamais.

2. **Pourquoi React a besoin d'une key sur les éléments d'une liste ?**  
Lorsqu'il affiche une liste, React a besoin d'en reconnaître les éléments car cette liste peut être amenée à changer (ajout d'élément, supression, etc.).
La key est alors une prop unique lui permettant de différencier les éléments de la liste.

3. **EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?**  
En en faisant un composant, EtiquetteDifficulte pourra alors être réutilisé n'importe où ailleurs dans l'appli (utile par exemple si l'on veut en faire un filtre).

4. **Pourquoi className et pas class ?**  
Le terme 'class' est réservé à JavaScript et sert à créer des classes JS.  
'className' est alors utilisé en React afin d'éviter tout conflit.

5. **En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?**  
La notion des composants m'est revenue légèrement mais je n'avais pas vraiment compris React. Ce TP était donc le bienvenu, même si j'ai encore besoin d'entrainement !
Les props par exemple : j'ai encore du mal à comprendre qui vient de qui, va où, et le sens d'importation...