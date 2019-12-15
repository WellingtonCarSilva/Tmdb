import React, { Component } from 'react';
import './Movie.css';

export class Showcase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: {}, loading: true
        };

        var url = 'api/Movies/Upcoming';

        if (this.props.location !== undefined) {
            const params = new URLSearchParams(this.props.location.search);

            const pageNumber = params.get('pageNumber');

            url = `api/Movies/Upcoming?pageNumber=${pageNumber}`;
        }
        console.log(url);

        fetch(url)
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
                                                <li>{movie.release_date_format}</li>
                                                <li><span className="glyphicon glyphicon-star"> </span> {movie.vote_average}</li>
                                            </ul>
                                        </div>
                                        <div className='card_right__review'>
                                            <p>{movie.overview.substring(0, movie.overview.length > 140 ? 140 : movie.overview.length)}...</p>
                                            <a href={"../Details?id=" + movie.id}>Mais Informações</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="container-fluid text-center">
                    <a href={"/Showcase?pageNumber=" + movies.prev_page}>
                        <button className="page-item" disabled={movies.prev_page == 0} >Anterior</button>
                    </a>
                    <a href={"/Showcase?pageNumber=" + movies.next_page}>
                        <button className="page-item" disabled={movies.next_page > movies.total_pages}>Próxima</button>
                    </a>
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
