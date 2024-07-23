import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box, Button, Avatar, IconButton  } from '@material-ui/core';
//====
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//===

import Icon from '@material-ui/core/Icon';

 const useStyles = makeStyles({
  root: {
    height: '100%'
  },
   table: {
     minWidth: '100%',
     "& td ~ td, & th ~ th": {
      borderRigth: '1px solid rgb(200, 200, 200)'
     }
   },
 });

const DAYS_OF_WEEK = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']

export default function CalendarScreen() { 
  const classes = useStyles()

  return (
<Box display='flex' height='100%' alignContent='stretch'>

<Box width='200px' padding='10px'>
  <h2>Agenda React </h2>

  <Button variant="outlined" color="secondary">
NOVO EVENTO
</Button>


<Box marginTop='64px'>
<h3>Agendas</h3>
<FormControl component="fieldset">
        
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Pessoal"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Trabalho"
          />

        </FormGroup>
      
      </FormControl>
</Box>
</Box>

<TableContainer  className={classes.root} component={'div'}>

<Box display='flex' alignItems='center' padding='10px'>

<Box flex='1'>
<IconButton>
<Icon>chevron_left</Icon>
</IconButton>
<IconButton>
<Icon>chevron_right</Icon>
</IconButton>

<strong>Julho de 2024</strong>
</Box>



<Box>
<IconButton> 
<Icon>person</Icon>
</IconButton>

</Box>

</Box>



    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {DAYS_OF_WEEK.map(day => <TableCell align='center' key={day}>{day}</TableCell> )}
        </TableRow>
      </TableHead>
      <TableBody>
      
    
          <TableRow>
          {DAYS_OF_WEEK.map(day => <TableCell align='center' key={day}>X</TableCell> )}
        </TableRow>
        <TableRow>
          {DAYS_OF_WEEK.map(day => <TableCell align='center' key={day}>X</TableCell> )}
        </TableRow>
        <TableRow>
          {DAYS_OF_WEEK.map(day => <TableCell align='center' key={day}>X</TableCell> )}
        </TableRow>
      
 
      </TableBody>
    </Table>
  </TableContainer>
</Box>

  )
}




