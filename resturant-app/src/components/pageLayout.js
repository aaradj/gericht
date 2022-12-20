import React from 'react';
import styled from "styled-components";

const pageLayout = ({children}) => {
    const Layout= styled.div`
    height:100%;
    padding:2rem 3rem;
    `
    return (
        <Layout>
            {children}
        </Layout>
    );
};

export default pageLayout;