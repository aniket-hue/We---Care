import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

const useStyles = (
  {
    table: {
      minWidth: 650,
    }
  }
);

function createData(Date, Message) {
  return { Date, Message };
}

const rows = [
  createData('23-july-10', 'You are healthy today',),
  createData('12-june-10', 'You are healthy today',),
  createData('02-juan-10', 'You are Unhealthy today',),
  createData('21-feb-10', 'You are Unhealthy today',),
  createData('23-sep-10', 'You are healthy today',),
];

class MessageReport extends Component {
  render() {
    const { classes } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                <TableCell >{row.Date}</TableCell>
                <TableCell >{row.Message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(MessageReport)