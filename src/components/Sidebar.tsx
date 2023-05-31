import { CalendarIcon,EditIcon,AtSignIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
      <ListIcon as={EditIcon} color="white" />
        <NavLink to="/create">New Task</NavLink>
      </ListItem>
      <ListItem>
      <ListIcon as={AtSignIcon} color="white" />
        <NavLink to="/profile">profile</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
