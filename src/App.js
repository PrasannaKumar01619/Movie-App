import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css"
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/movie/:imdbID" element={<MovieDetails></MovieDetails>} />
                        <Route element={<PageNotFound></PageNotFound>}></Route>
                    </Routes>
                </div>


                <Footer></Footer>

            </BrowserRouter>

        </div>
    )
}

export default App;