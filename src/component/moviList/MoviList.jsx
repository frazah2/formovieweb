import MovieShowItem from '../moviListItem/MoviListItem';
import './MoviList.css'


const MovieShowList = () => {
    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
                <MovieShowItem style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/dfX2UaHVE5c7kLBFbgmEZJuy4Ev.jpg`}}/>
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
                <MovieShowItem />
            </div>

        </div>
    )
}

export default MovieShowList;