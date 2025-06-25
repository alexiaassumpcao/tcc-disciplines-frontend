import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function DisciplineList({ disciplines }) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {disciplines.map((discipline, pageIndex) => {
        const labelId = `checkbox-list-label-${discipline.code[0]}`;

        return (
          <ListItem
            key={`${discipline.code[0]}-${pageIndex}`}
            disablePadding
          >
            <ListItemButton  role={undefined} onClick={handleToggle(discipline.code[0])} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  name={discipline.code[0]}
                  value={discipline.code[0]}
                  checked={checked.includes(discipline.code[0])}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${discipline.code[0]} - ${discipline.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
