import React, { Component } from 'react';
import './Movie.css';

export class Showcase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: {}, loading: true
        };

        fetch('api/Movies/Upcoming')
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data, loading: false });
            });
    }

    static renderMovies(movies) {
        return (
            <div>
                <div className="row no-gutter">
                    <div className="card-deck">
                        {movies.results.map(movie =>
                            <div className="col-xs-6 col-md-6">
                                <div>
                                    <div className='card_left'>
                                        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                                    </div>
                                    <div className='card_right'>
                                        <h1>{movie.title}</h1>
                                        <div className='card_right__details'>
                                            <ul>
                                                <li>{movie.releaseDate}</li>
                                                <li><span className="glyphicon glyphicon-star"> </span> {movie.voteAverage}</li>
                                            </ul>
                                        </div>
                                        <div className='card_right__review'>
                                            <p>{movie.overview.substring(0, movie.overview.length > 140 ? 140 : movie.overview.length)}...</p>
                                            <a href={"../Details/id=" + movie.id} target='_blank'>Mais Informações</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <a asp-page="" asp-route-pageNumber={movies.PrevPage} className="page-link">
                        <button className="page-item">Anterior</button>
                    </a>
                    <a asp-page="" asp-route-pageNumber={movies.nextPage} className="page-link">
                        <button className="page-item">Próxima</button>
                    </a >
                </div>
            </div>
        )
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Showcase.renderMovies(this.state.movies);

        return (
            <div>
                <h1>Lançamentos</h1>
                {contents}
            </div>
        );
    }
}
