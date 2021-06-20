import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper'; //like card but not card
import { Container } from "@material-ui/core"
import NotesCards from "../components/NotesCards"
import Masonry from "react-masonry-css"

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes);

    // If they are not equal,then it is true and we'll keep that array.
    //  If they are equal,then it is false and we'll filter that array.
  }

  {/* Actual(max) size - 12,
    lg- large sized screen
    md- medium sized screen, 
    sm- small sized screen,
    xs- xtra small sized screen
  */}

  {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}> 
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
     
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
      >
        {notes.map((note) => (
          <div item key={note.id} >
            <NotesCards note={note} handleDelete={handleDelete}/>
          </div>
        ))}
      </Masonry>

    </Container>
  )
}
