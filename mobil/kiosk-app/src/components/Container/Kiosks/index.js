import React, {Component} from 'react';
import TableKiosks from './TableKiosks';
import { Grid } from '@material-ui/core';
import DialogCreateKiosk from './DialogCreateKiosk'
import {getUsers} from './../../../services/users'


class Kiosks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        }
    }
    
    

    componentDidMount() {
        this.getData();
    }
    
    async getData() {
        getUsers().then(({ clients }) => {
            console.log('CategoryListSidebar',clients);
              this.setState({ rows: clients })
              console.log('CategoryListSidebar',clients);
          })
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.getData();
        }
    }

    change=()=>{
        this.getData();
    }

    render(){
        return(
            <div>
                <Grid container >
                    <Grid item xs={12}>
                        <TableKiosks rows={this.state.rows}  change={this.change}/>
                    </Grid>
                    <DialogCreateKiosk change={this.change}/>
                </Grid>
            </div>
        );
    }
}

export default Kiosks;