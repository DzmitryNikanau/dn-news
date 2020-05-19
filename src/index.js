import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import TopNews from "./components/topNews/TopNews";
import LatestNewsList from "./components/latestNewsList/LatestNewsList";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Header/>

        <div className="content">
            <Search/>
            <TopNews/>
            <LatestNewsList/>
        </div>


    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
