import React from 'react'
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const Wrapper = (props) => {
    return (

        <main className="content">
            <Header />
            <Content />
            <Footer />
        </main>

    )

}

export default Wrapper