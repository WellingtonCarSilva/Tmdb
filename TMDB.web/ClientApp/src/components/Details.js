import React, { Component } from 'react';
import "./Details.css";

export class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: {}, loading: true
        };

        fetch("api/Movies/Details?id=19404")
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data, loading: false });
            });
    }

    static renderMovie(movie) {
        return (
            <div className="container-fluid">
                <div className="movie-card" >

                    <div className="container">
                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="cover" className="cover" />

                        <div className="details">
                            <h2>{movie.title}</h2>
                            <span className="glyphicon glyphicon-star"> </span> {movie.voteAverage - movie.releaseDate}
                            <div className="description">
                                <p>{movie.overview}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Details.renderMovie(this.state.movie);

        return (
            <div>
                {contents}
            </div>
        );
    }
}