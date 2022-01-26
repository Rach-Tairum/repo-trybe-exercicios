import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon 
        return(
            <section className="pokes">
                <div className="texto">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
                </div>
                <img className="gif" src={image} alt="imagem de pokemon"/>
            </section>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        }),
        image: PropTypes.string.isRequired
    })
}

export default Pokemon