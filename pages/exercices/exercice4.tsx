import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div className="container">
      <p>
        <h1>Exercice 4</h1>

        <h3>Consignes :</h3>
        <ul>
          <li>Recopier les exercices 1 et 2 ci-dessous</li>
          <li>Les adapter pour que les 2 exercices soient sur 2 colonnes différentes sur Desktop, et sur une seule colonne sur
            Mobile </li>
          <li>Adapter le formulaire pour qu&apos;il respecte les guidelines Bootstrap sur les formulaires
          </li>
        </ul>
      </p>



      <div className="container">
        <div className="row">
          <div className="col-sm">

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
          </div>
          <div className="col-sm">
            <div>

              <p>
                <form >
                  <div>
                    <label htmlFor="firstname" className="form-label" > Prénom</label>
                    <input type="text" id="firstname" name="firstname" className="form-control" placeholder="Benjamin" />
                  </div>
                  <div>
                    <label htmlFor="surname" className="form-label" > Nom</label>
                    <input type="text" id="surname" name="surname" className="form-control" placeholder="Zhu" />
                  </div>
                  <div >
                    <label htmlFor="email" className="form-label" > Email</label>
                    <input type="email" id="email" name="email" placeholder="prenom.nom@hotmail.fr" className="form-control" />

                  </div>
                  <div>
                    <label htmlFor="password" className="form-label" > Password</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="*********" />
                  </div>
                  <div>
                    <label htmlFor="checkBox" > CGU</label>
                    <input type="checkbox" id="checkBox" name="checkBox" />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg btn-block"> Envoyer </button>
                  </div>

                </form>
              </p>
            </div >

          </div>
        </div >
      </div >
    </div >
  )


}

export default Exercise4
