import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChartIcon from '@material-ui/icons/InsertChart';

import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ItemSidebar from './ItemSidebar';

const data = [
    
    {
        title: "Usuarios",
        option:'kiosks',
        icon: <AccountCircleIcon/>,
    },
    {
        title: "Insumos",
        option:'products',
        icon: <PostAddIcon/>,
    },
    {
        title: "Recetas",
        option:'kiosks',
        icon: <PostAddIcon/>,
    },  {
        title: "Estadísticas",
        option:'kiosks',
        icon: <ChartIcon/>,
    }
];

  
export default function ListSidebar() {
    return (
        <div>
              <List component="nav" aria-label="">
                  {data.map((option) => <ItemSidebar option={option} key={option.title}/>)}
              </List>
            <Divider />
        </div>
    );
}