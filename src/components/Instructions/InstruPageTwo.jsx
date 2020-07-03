import React from 'react';
import { Link } from 'react-router-dom';
import RankStats from '../Divers/RankStats';

const InstruPageTwo = () => (
  <div className="bg_instruPageTwo">
    <p className="block_text_rank">
      Rejoins la communauté et monte dans le classement pour obtenir des courses gratuites
      chez tes marques préferées,et d'autres cadeaux !
    </p>

    <div className="block_podium">

      <div className="block_player">
        <img className="img_player img_second" src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">2</p>
        <p className="text_rank">Matthieu</p>
        <div className="bg_scoreBlock bg_scoreOne">
          <p>590</p>
        </div>
      </div>

      <div className="block_player">
        <img className="img_player img_first" src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">1</p>
        <p className="text_rank">Kylian Mbappé</p>
        <div className="bg_scoreBlock bg_scoreTwo">
          <p className="score_text">2420</p>
        </div>
      </div>

      <div className="block_player">
        <img className="img_player img_third" src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">3</p>
        <p className="text_rank">Mathilda R</p>
        <div className="bg_scoreBlock bg_scoreThree">
          <p className="score_text">309</p>
        </div>
      </div>
    </div>
    <div className="block_underPodium">
      <RankStats position="4" name="Jérome Niel" score="214" img="https://via.placeholder.com/50" />
      <RankStats position="5" name="Studio Danielle" score="189" img="https://via.placeholder.com/50" />
      <RankStats position="6" name="Le Professeur" score="78" img="https://via.placeholder.com/50" />
    </div>
    <div className="linkButton_block">
      <Link className="link_button" to="/register">C'est Parti</Link>
    </div>
  </div>
);

export default InstruPageTwo;
