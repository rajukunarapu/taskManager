import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import TodoContainer from "./Components/TodoContainer";
import AddButton from "./Components/Add Button";
import { useSelector } from "react-redux";

const App = () => {
  let [filter, setFilter] = useState("all");
  let todos = useSelector((state) => state);

  let filterTodos = todos.filter((item) => {
    if (filter === "completed") return item.complete;
    return true;
  });

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          mt: 4,
          borderRadius: 2,
          backgroundColor: "white",
          padding: 2,
          paddingBottom: 10,
          position: "relative"
        }}
      >
        <Typography variant="h4" fontWeight={"bolder"} mb={2} >Task Manager</Typography>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "rgba(243, 240, 255, 1)",
            color: "rgba(85, 59, 179, 1)",
            borderRadius: 2,
          }}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant="outlined"
          sx={{
            ml: 2,
            backgroundColor: "rgba(243, 240, 255, 1)",
            color: "rgba(85, 59, 179, 1)",
            borderRadius: 2,
          }}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>

        <TodoContainer filterTodos={filterTodos} />
        <AddButton />
      </Container>
    </>
  );
};

export default App;
