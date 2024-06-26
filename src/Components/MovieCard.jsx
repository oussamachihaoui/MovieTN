import React from 'react'

const MovieCard = ({data}) => {

  const {poster_path:imageUrl,title,popularity,overview,vote_average:voteScore,release_date}=data

  return (
    <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
    <div className="w-2 bg-gray-800" />
    <div
      className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
      data-movie-id={438631}
    >
      <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent" />

      {/* trailer ---------------------------------------------------------------------------------------------------- */}
      <div
        className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
        data-lity=""
        href="https://www.youtube.com/embed/aSHs224Dge0"
      >
        {/* -------------------------------------------------------------------------------------------------------------- */}

        <div className="poster__info align-self-end w-full">
          <div className="h-32" />
          <div className="space-y-6 detail_info">
            <div className="flex flex-col space-y-2 inner">
              {/* <a
                className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                data-unsp-sanitized="clean"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                  Trailer
                </div>
              </a> */}
              {/* 
                MOVIE TITLE ----------------------------------------------------------------------------------------
              */}
              <h3
                className="text-2xl font-bold text-white"
                data-unsp-sanitized="clean"
              >
                {title}
              </h3>
              {/* ---------------------------------------------------------------------------------------------- */}
              
             
            </div>
            <div className="flex flex-row justify-between datos">
              {/* popularity------------------------------------------------------------------------ */}
              <div className="flex flex-col datos_col">
                <div className="popularity">{popularity.toFixed(2)}</div>
                <div className="text-sm text-gray-400">Popularity :</div>
              </div>
                {/* ------------------------------------------------------------------------------------ */}

                {/* release date -------------------------------------------------------------------------- */}
              <div className="flex flex-col datos_col">
                <div className="release">{release_date}</div>
                <div className="text-sm text-gray-400">Release date :</div>
              </div>

              {/* ------------------------------------------------------------------------------------------- */}

              {/* vote average ------------------------------------------------------------------------------- */}
              <div className="flex flex-col datos_col">
                <div className="release">{voteScore.toFixed(1)}</div>
                <div className="text-sm text-gray-400">Vote :</div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}


                {/* overview-------------------------------------------------------------------------------- */}
            <div className="flex flex-col overview">
              <div className="flex flex-col" />
              <div className="text-xs text-gray-400 mb-2">Overview:</div>
              <p className="text-xs text-gray-100 mb-6">
                {overview}
              </p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}
          </div>
          
        </div>
      </div>

      {/* image background -------------------------------------------------------------------------------- */}
      <img
        className="absolute inset-0 transform w-full -translate-y-4"
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        style={{ filter: "grayscale(0)" }}

        // -----------------------------------------------------------------------------------------------------
      />


      <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
        <a
          className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
          href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20210915T010000Z%2F20210915T010000Z&text=Dune%20%2D%20Movie%20Premiere&location=http%3A%2F%2Fmoviedates.info&details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
          target="_blank"
          data-unsp-sanitized="clean"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm text-white ml-2">View Details</div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default MovieCard