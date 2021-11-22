import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

function ProjectTable() {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/project/projects"
        );
        setTask(res.data);
      } catch (err) {}
    };
    getProjects();
  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              Source Code Url
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Deployment Url
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Task.map((row) => (
            <TableRow key={row._id}>
              <TableCell align="right">{row.sourceUrl}</TableCell>
              <TableCell align="right">{row.deploymentUrl}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectTable;
