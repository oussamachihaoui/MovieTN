import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovieAction, updateMovie } from "../Redux/movieSlice";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const dispatch = useDispatch();

  // props
  const {
    poster_path,
    title,
    popularity,
    overview,
    vote_average,
    release_date,
    id,
    trailer,
  } = data;

  // states
  const [openModal, setOpenModal] = useState(false);
  const [editMovie, setEditMovie] = useState({
    id: id,
    title: title,
    overview: overview,
    vote_average: vote_average,
    poster_path: poster_path,
    popularity: popularity,
    release_date: release_date,
    trailer: trailer,
  });

  // handlers
  const handleChange = function (e) {
    setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
  };

  const editMovieAndUpdate = function (e) {
    e.preventDefault();
    dispatch(updateMovie({ id: id, updateMovie: editMovie }));
    setOpenModal(false);
  };

  return (
    <div className="  relative">
      <div className="flex max-w-sm w-full shadow-md rounded-lg overflow-hidden mx-auto relative">
        {/* delete movie button */}
        <button
          onClick={() => {
            dispatch(deleteMovieAction(id));
          }}
          className=" text-3xl absolute top-0 right-0 z-10 px-2  rounded-lg bg-inherit text-red-600 font-bold  hover:bg-red-700 transition-colors"
        >
          X
        </button>

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
          >
            {/* -------------------------------------------------------------------------------------------------------------- */}

            <div className="poster__info align-self-end w-full">
              <div className="h-32" />
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  <a
                    className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                    data-unsp-sanitized="clean"
                    // trailer link
                    href={trailer}
                    target="_blank"
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
                  </a>
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
                <div className="flex flex-row justify-between datos text-center">
                  {/* popularity------------------------------------------------------------------------ */}
                  <div className="flex flex-col datos_col">
                    <div className="popularity">{Math.floor(popularity)}</div>
                    <div className="text-sm text-gray-400">Popularity</div>
                  </div>
                  {/* ------------------------------------------------------------------------------------ */}

                  {/* release date -------------------------------------------------------------------------- */}
                  <div className="flex flex-col datos_col">
                    <div className="release">{release_date}</div>
                    <div className="text-sm text-gray-400">Release date</div>
                  </div>

                  {/* ------------------------------------------------------------------------------------------- */}

                  {/* vote average ------------------------------------------------------------------------------- */}
                  <div className="flex flex-col datos_col">
                    <div className="release">{vote_average}</div>
                    <div className="text-sm text-gray-400">Vote</div>
                  </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------ */}

                {/* overview-------------------------------------------------------------------------------- */}
                <div className="flex flex-col overview">
                  <div className="flex flex-col" />
                  <div className="text-xs text-gray-400 mb-2">Overview</div>
                  <p className="text-xs text-gray-100 mb-6">{overview}</p>
                </div>

                {/* ------------------------------------------------------------------------------------------------ */}
              </div>
            </div>
          </div>

          {/* image background -------------------------------------------------------------------------------- */}
          <img
            className="absolute inset-0 transform w-full -translate-y-4"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            style={{ filter: "grayscale(0)" }}

            // -----------------------------------------------------------------------------------------------------
          />

          {/* view details --------------------------------------------------------------------------------------- */}
          <div className="poster__footer flex flex-row relative pb-5   justify-around z-10">
            <Link
              className="flex items-center py-2 px-4 rounded-full border border-white text-white bg-inherit hover:bg-red-700"
              data-unsp-sanitized="clean"
              to={`/movie-detail/${id}`}
            >
              <div className="text-sm text-white  font-medium py-2 px-4 ">
                View Details
              </div>
            </Link>

            {/* EDIT MOVIE */}

            <Button
              className=" bg-inherit  border border-white py-2 px-4 rounded-full"
              onClick={() => setOpenModal(true)}
            >
              Edit Movie
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Movie details</Modal.Header>

              <Modal.Body>
                <form>
                  <Label>Movie Title:</Label>
                  <TextInput
                    type="text"
                    name="title"
                    onChange={handleChange}
                    defaultValue={title}
                  />

                  <Label>Movie Overview:</Label>
                  <TextInput
                    type="text"
                    name="overview"
                    onChange={handleChange}
                    defaultValue={overview}
                  />

                  <Label>Movie Image Url:</Label>
                  <TextInput
                    type="text"
                    name="poster_path"
                    onChange={handleChange}
                    defaultValue={poster_path}
                  />

                  <Label>Movie Vote:</Label>
                  <TextInput
                    type="number"
                    name="vote_average"
                    min={0}
                    max={10}
                    onChange={handleChange}
                    defaultValue={vote_average}
                  />

                  <Label>Movie Popularity:</Label>
                  <TextInput
                    type="number"
                    name="popularity"
                    min={0}
                    onChange={handleChange}
                    defaultValue={popularity}
                  />

                  <Label>Movie Trailer:</Label>
                  <TextInput
                    type="text"
                    name="trailer"
                    onChange={handleChange}
                    defaultValue={trailer}
                  />

                  <Label>Movie Release Date:</Label>
                  <TextInput
                    type="date"
                    name="release_date"
                    onChange={handleChange}
                    defaultValue={release_date}
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" onClick={editMovieAndUpdate}>
                  I accept
                </Button>

                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
