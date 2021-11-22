import type { NextPage } from 'next'

const Exercise4: NextPage = () => {
  return (
    <div id="forum-wrapper" className="d-flex flex-column">
      <div id="messages-container" className="flex-grow-1">

        <img className="image" src='https://sawakinome.com/img/images/difference-between-debate-and-discussion.png'
          height={300} width="auto" />
        <div className="textplacement1">
          <p> <b>Anonymous1 </b></p>
          <textarea name="Anonymous" rows={4} placeholder="Welcome"></textarea>
        </div>

        <div className="textplacement2">
          <p> <b>Anonymous2 </b></p>
          <textarea name="Anonymous" rows={4} placeholder="Hello"></textarea>
        </div>

        <div className="textplacement1">
          <p> <b>Anonymous1 </b></p>
          <textarea name="Anonymous" rows={4} placeholder="How are you ?"></textarea>
        </div>



      </div>

      <div id="new-message-container">

        <div className="container">
          <div className="row">
            <div className="col-sm">

              <textarea name="firstname" rows={9} className="form-control" placeholder="Write your message"></textarea>
            </div>
            <div className="col-sm">
              <div className="mb-3" >
                <label htmlFor="email" className="form-label" > Email</label>
                <input type="email" id="email" name="email" placeholder="prenom.nom@hotmail.fr" className="form-control" />

              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" > Password</label>
                <input type="password" id="password" name="password" className="form-control" placeholder="*********" />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg btn-block"> Envoyer </button>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div >
  )
}

export default Exercise4
