import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {
    render() {
        return(
            <div className='Movie'>
                <h1>극한직업</h1>
                <img src='https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4e00e81f2b6f4d2eb65b3387240cc3c01547608409838'/>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src='https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4e00e81f2b6f4d2eb65b3387240cc3c01547608409838'/>
        );
    }
}
export default Movie;