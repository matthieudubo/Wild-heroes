import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './card.css';

const CardsList = ({
  hero,
  isLoading,
  setCardsPerPage,
  totalCards,
  searchName,
}) => {
  if (searchName !== '') {
    setCardsPerPage(totalCards);
  } else {
    setCardsPerPage(30);
  }
  return (
    <div className="cards-list">
      {isLoading ? (
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/da734b28921021.55d95297d71f4.gif"
          alt="loader"
          className="loader-cardsList"
        />
      ) : (
        <div className="container-cards-button">
          <div className="container-cards">
            {hero
              .filter((el) => el.name.includes(searchName))
              .map((el) => (
                <Card
                  key={el.id}
                  name={el.name}
                  image={el.image.url}
                  alignment={el.biography.alignment}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
CardsList.propTypes = {
  hero: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCardsPerPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchName: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
};

export default CardsList;