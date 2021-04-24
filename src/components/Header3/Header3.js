import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: lightblue;
    border: 1px solid gray;
`;

const Container = styled.div`
    margin: 10px;
    color: purple;
    border: 1px solid blue;
`;

const Header3 = () => {
    return (
        <div>
            <Title>This my styled Title</Title>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
        </div>
    );
};

export default Header3;