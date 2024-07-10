import React from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../Redux/movieSlice";

const AddMovie = () => {
  // movies in redux

  const dispatch = useDispatch();

  // states
  const [openModal, setOpenModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    popularity: 0,
    release_date: "",
    trailer: "",
  });

  const handleNewMovie = function (e) {
    e.preventDefault();
    dispatch(addMovieAction(newMovie));
    setOpenModal(false);
  };

  const onChangeMovie = function (e) {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // console.log(newMovie);

  return (
    <>
      <Button
        className=" bg-inherit rounded-md border border-white px-2 py-1"
        onClick={() => setOpenModal(true)}
      >
        Add Movie
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Movie details</Modal.Header>

        <Modal.Body>
          <form>
            <Label>Movie Title:</Label>
            <TextInput type="text" name="title" onChange={onChangeMovie} />

            <Label>Movie Overview:</Label>
            <TextInput type="text" name="overview" onChange={onChangeMovie} />

            <Label>Movie Image Url:</Label>
            <TextInput
              type="text"
              name="poster_path"
              onChange={onChangeMovie}
            />

            <Label>Movie Vote:</Label>
            <TextInput
              type="number"
              name="vote_average"
              min={0}
              max={10}
              onChange={onChangeMovie}
            />

            <Label>Movie Popularity:</Label>
            <TextInput
              type="number"
              name="popularity"
              min={0}
              onChange={onChangeMovie}
            />

            <Label>Movie Trailer:</Label>
            <TextInput type="text" name="trailer" onChange={onChangeMovie} />

            <Label>Movie Release Date:</Label>
            <TextInput
              type="date"
              name="release_date"
              onChange={onChangeMovie}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleNewMovie}>
            I accept
          </Button>

          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
