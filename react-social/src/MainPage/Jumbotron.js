import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import './Jumbotron.css';


class Jumbotron extends Component {
    state = {};
    constructor (props) {
        super(props);
        
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <React.Fragment>
            <section style={{position: 'relative', overflow: 'hidden'}}>
                <Grid className="container" container direction="row">
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        {this.props.children}
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </section>
            </React.Fragment>
        );
    }
}


export default (Jumbotron)