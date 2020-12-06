import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from 'react-bootstrap'
import HomeScreen from "./screen/HomeScreen";


function App() {
    return (
        <>
            <Header/>
            <main className="py-3">
                <Container>
                    <HomeScreen />
                </Container>
            </main>
            <Footer/>
        </>
    );
}

export default App;