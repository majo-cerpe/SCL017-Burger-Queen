import React from 'react';
import { Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import './waiterView.css'


const WaiterView = () => {

    return (
        <div>
            <div className='header'>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <Link to='/'>
                        <Button>Volver al home</Button>
                    </Link>
                </Card>
            </div>
         
                <div className='buttons'>
                    <Link to='/breakfastMenu'>
                        <Button>Desayuno</Button>
                    </Link>
                    <Link to='/lunchMenu'>
                        <Button>Almuerzos</Button>
                    </Link>
                    <div></div>
                </div> 

        </div>


    );
}

export default WaiterView