import React from 'react';

class DialogBox extends React.Component {


}

export default DialogBox;
/*


notes de la nuit :

  // [ ] DialogBox affiche du texte à l'écran façon TypeWriting
  // [ ] DialogBox gère une vitesse variable dans l'affichage du texte
  // [ ] DialogBox dit quand il a fini son travail
  // [ ] DialogBox transmet les props à ses enfants (style)


Une DialogBox pilote l'enchaînement des TextBox
Une TextBox affiche du texte à l'écran façon TypeWriting




une séquence gère une vitesse d'affichage du texte variable
  - une séquence gère des pauses dans l'affichage (ça revient à gérer une vitesse variable)
  - une séquence gère un bouton CONTINUE pour chaîner les séquences
  - une séquence gère un bouton CLOSE pour clore une séquence qui n'a pas de séquence à suivre
  - une séquence gère les styles appliquées au texte (faut passer les props, les className à la méthode render() pour chaque <span>)
  - une séquence ignore ce qui la précède

- input :
  - un tableau d'objets, ex:
    const seq = [
      {
        text: 'Vous marchez dans les hautes herbes',
        velocity: '', // default 100
        newline: '', // default true
        pause: '' // default 100
        styl:''
      },
      {
        text: '...',
        velocity:'800',
        newline: '',
        pause:'800'
      },
      {
        text: 'Un',
        velocity:'',
        newline: 'false',
        pause:''
      },
      {
        text: 'GREMS',
        velocity:'400',
        newline: 'false',
        pause:'400'
      },
      {
        text: 'sauvage apparaît',
        velocity:'',
        newline: '',
        pause:'400'
      },
      {
        text: 'Que faites-vous ?',
        velocity:'',
        newline: '',
        pause:'400'
      },
    ];

- début de la séquence : (componentDidMount)
  - autostart : la séquence démarre automatiquement
  - start : (bool) gère le trig externe de la séquence
  - startDelay : la séquence démarre après un certain délai (si start/autostart = true)

- vie de la séquence :
  - ... ?

- fin d'une séquence : (componentWillUnmount)
  - il y a une séquence à suivre
    - liaison automatique
      - délai
    - bouton continue (pas de délai)
    - trigger externe
  - il n'y a pas de séquence à suivre
    - reste affiché
    - disparaît automatiquement
      - délai
    - bouton close
    - trigger externe

------------------------------------------------

class Dialog extends React.Component {

  componentDidMount() {

  }
}




*/