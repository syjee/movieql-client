import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
    border-radius:15px;
    box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-image:${props =>`url(${props.background})`};
    background-size:cover;
    background-position:center center;
    height:300px;
    width:200px;
    margin-bottom:40px;
    position:relative;
`;

const Title = styled.span`
    background-color:white;
    box-shadow:0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width:auto;
    padding:10px;
    position:absolute;
    bottom:25px;
    left:0;
    right:0;
    margin:auto;
`;

const Movie = ({id, title, rating, poster}) => (
    <Link to = {`/details/${id}/`}>
        <Card background={poster}>
            <Title>
                {title} / {rating}
            </Title>
        </Card>
    </Link>
);

Movie.PropTypes = {
    id : PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    poster:PropTypes.string.isRequired
};

export default Movie;