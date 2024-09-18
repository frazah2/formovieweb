import MovieShowItem from '../moviListItem/MoviListItem';
import './MoviList.css'


const MovieShowList = ({tVRecommendations, onClickItem}) => {
    // console.log(tVRecommendations)


    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
                {
                    tVRecommendations.map(recommendation => {
                        return(
                            <MovieShowItem key={recommendation.id} recommendation={recommendation} onClickItem={onClickItem}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MovieShowList;