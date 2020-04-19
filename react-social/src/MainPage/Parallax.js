import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Parallax.css';

class Parallax extends Component {
    state = {};

    constructor (props) {
        super(props);
        
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <section>
                <div className="parallax-container">
                    <Grid container justify="center" alignItems="center" style={{height: 100+'%'}}>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={6}>
                            {this.props.children}
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>
                </div>  
            </section>
        );
    }
}


export default (Parallax)