import type { NextPage } from 'next'

const Exercise3: NextPage = () => {
  return (
    <div>
      <p>
        <h1>Exercice 3 </h1>

        <h3>Consignes : </h3>
        <ul>
          <li>
            Mettre en forme l&apos;exercice 3</li>
          <li>
            Recopier le formulaire d&apos; inscription précédent ci-dessous </li>
          <li>
            Grâce au fichier style.css, mettre le texte des labels en bleu, agrandir la police dans les input texte, placer un
            bloc en position absolue à droite du champ adresse email avec un texte de votre choix en police 10px rouge.
          </li>
        </ul>
      </p>

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
              <button id="adress-block" className="btn btn-primary"> Help </button>
            </div>
            <div>
              <label htmlFor="password" className="form-label" > Password</label>
              <input type="password" id="password" name="password" className="form-control" placeholder="*********" />
            </div>
            <div>
              <label htmlFor="checkBox" > CGU</label>
              <input type="checkbox" id="checkBox" name="checkBox" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary"> Envoyer </button>
            </div>

          </form>
        </p>
      </div >
    </div>
  )
}

export default Exercise3
