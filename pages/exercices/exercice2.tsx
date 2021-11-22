import type { NextPage } from 'next'

const Exercise2: NextPage = () => {
  return (
    <div>
      <p>
        <h1> Exercice 2 </h1>

        <h3> Consignes </h3> :
        <ul>
          <li> Mettre en forme l&apos;exercice 2 </li>
          <li> Créer ci-dessous un formulaire d&apos; inscription contenant les champs: <br /> Prénom, nom, email, mot de passe, checkbox pour
            accepter un quelconque règlement et un bouton de validation.</li>
        </ul>
      </p>

      <p>
        <form >
          <div>
            <label htmlFor="firstname" > Prénom</label>
            <input type="text" id="firstname" name="firstname" placeholder="Benjamin" />
          </div>
          <div>
            <label htmlFor="surname" > Nom</label>
            <input type="text" id="surname" name="surname" placeholder="Zhu" />
          </div>
          <div>
            <label htmlFor="email" > Email</label>
            <input type="email" id="email" name="email" placeholder="prenom.nom@hotmail.fr" />
          </div>
          <div>
            <label htmlFor="password" > Password</label>
            <input type="password" id="password" name="password" placeholder="*********" />
          </div>
          <div>
            <label htmlFor="checkBox" > CGU</label>
            <input type="checkbox" id="checkBox" name="checkBox" />
          </div>
          <div>
            <button type="submit"> Envoyer </button>
          </div>

        </form>
      </p>
    </div >
  )
}

export default Exercise2
