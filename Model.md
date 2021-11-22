Message :
- Pseudo
- Date de création
- contenu

// C'est le message qui revient (du serveur à nous)
type Message {
    username : string,
    date : Date,
    body : string
}

//C'est ce qu'on envoie au serveur
type newMessage {
    username : string,
    body : string
}
