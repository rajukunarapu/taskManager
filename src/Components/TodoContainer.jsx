import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";

const TodoContainer = ({filterTodos}) => {
  let dispatch = useDispatch();

  return (
    <>
      <Stack sx={{ mt: 4, gap: 2 }}>
        {filterTodos.map((item) => {
          return (
            <Stack
              key={item.id}
              direction={"column"}
              sx={{
                backgroundColor: "rgba(243, 240, 255, 1)",
                borderRadius: 2,
                width: "500px",
                padding: 2,
              }}
            >
              <Typography
                  variant="body1"
                  color="black"
                  sx={{ flexGrow: 1, width: "300px" }}
                >
                  <span style={{ fontWeight: "bold" }}>Id</span> :{" "}
                  {item.id}
                </Typography>

              <Stack direction={"row"} alignItems={"center"}>
                <Typography
                  variant="body1"
                  color="black"
                  sx={{ flexGrow: 1, width: "300px" }}
                >
                  <span style={{ fontWeight: "bold" }}>Title</span> :{" "}
                  {item.title}
                </Typography>
  
                <IconButton
                  onClick={() =>
                    dispatch({ type: "Delete", payload: { id: item.id } })
                  }
                >
                  <Delete color="error" />
                </IconButton>
              </Stack>
              <Typography
                variant="body1"
                color="black"
                sx={{ flexGrow: 1, width: "300px" }}
              >
                <span style={{ fontWeight: "bold" }}>Completed</span> :{" "}
                {item.complete ? "True" : "False"}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default TodoContainer;
