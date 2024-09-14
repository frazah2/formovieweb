import MovieShowItem from '../moviListItem/MoviListItem';
import './MoviList.css'


const MovieShowList = () => {
    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
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
                <MovieShowItem />
            </div>

        </div>
    )
}

export default MovieShowList;