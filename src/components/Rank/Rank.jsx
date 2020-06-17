/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Link } from 'react-router-dom';

import './Rank.css';

const Rank = () => (
  <div className="body_rank">
    <p className="text_rank">
      Rejoins la communauté et monte dans le classement pour obtenir des courses gratuites
      chez tes marques préferées,et d'autres cadeaux !
    </p>

    <div className="first_rank">

      <div className="round2">
        <img src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">2</p>
        <p className="text_rank">Matthieu</p>
        <div className="user2_score">
          <p className="score_text">590</p>
        </div>
      </div>

      <div className="round">
        <img src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">1</p>
        <p className="text_rank">Kylian Mbappé</p>
        <div className="user1_score">
          <p className="score_text">2420</p>
        </div>
      </div>

      <div className="round2">
        <img src="https://via.placeholder.com/150" alt=" user" />
        <p className="text_rank">3</p>
        <p className="text_rank">Mathilda R</p>
        <div className="user3_score">
          <p className="score_text">309</p>
        </div>
      </div>

    </div>

    <div className="other_ranks">
      4
      <div className="rank_info">
        <img src="https://via.placeholder.com/50" alt=" user" />
        Jerome Niel
        <div className="rank_score">
          214
        </div>
      </div>
    </div>

    <div className="other_ranks">
      5
      <div className="rank_info">
        <img src="https://via.placeholder.com/50" alt=" user" />
        Studio Danielle
        <div className="rank_score">
          189
        </div>
      </div>
    </div>

    <div className="other_ranks_3">
      4
      <div className="rank_info">
        <img src="https://via.placeholder.com/50" alt=" user" />
        Le Professeur
        <div className="rank_score">
          78
        </div>
      </div>
    </div>

    <Link className="button_rank" to="/register">C'est Parti</Link>

  </div>
);

export default Rank;
