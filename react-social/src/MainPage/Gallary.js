import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './Gallary.css';


class Gallary extends Component {
    render() {
        return (
            <React.Fragment>
            <section style={{paddingBottom: 100+'px',position: 'relative', overflow: 'hidden'}}>
                <div className="gallery-container">
                    <div className="gallary-grid">
                        <div className="img one"></div>
                        <div className="img two"></div>
                        <div className="midd"></div>
                        <div className="gallary-txt-container">
                            <div className="primary-text">
                            <Typography gutterBottom variant="h2">
                                <span>Алғыс білдіреміз</span>
                            </Typography>
                            </div>  
                            <div className="main-txt">
                            <Typography paragraph gutterBottom variant="overline">
                            Осы курстың видеосын дайындаған  Құрбаналы Есенбеков, сондай-ақ Jdoodle компаниясының С++ компиляторын дайындағаны үшін алғысымызды білдіреміз.
               
                            </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );
    }
}


export default (Gallary)