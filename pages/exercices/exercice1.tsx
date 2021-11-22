import type { NextPage } from 'next'


const Exercise1: NextPage = () => {
  return (
    <div>

      <p>
        <h1> Exercice 1 </h1>

        <h3> Consignes : </h3>
        <ul>
          <li> Mettre en forme l&apos;exercice 1 </li>
          <li> En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un tableau avec en-têtes ayant pour colonnes : Balise,
            Contenu. Dans la colonne contenu spécifier la ou les balises qu&apos;il est possible d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot;
            (pour les titres par exemple). </li>
        </ul>
      </p>


      {
        // ATTENTION à ne pas mettre de chemin absolu !
      }
      <img src="E:/Benjamin/Mines Nancy/2A/WEB/Logo.png"
        width="300px" height="300px" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tcKMMngtjpqCxaIKyy5DeiqKgSUYxYW9IQ&usqp=CAU" />
      <p>
        <table className="table">
          <tr>
            <td> <b> Balise </b></td>
            <td> <b>Contenu </b></td>
          </tr>

          <tr>
            <td> ul </td>
            <td> Créer une liste  </td>
          </tr>
          <tr>
            <td> form method = "post" </td>
            <td> Créer un formulaire </td>
          </tr>

        </table>
      </p>


    </div >
  )
};

export default Exercise1;
