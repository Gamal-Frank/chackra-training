import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em">
      <ListItem>
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
