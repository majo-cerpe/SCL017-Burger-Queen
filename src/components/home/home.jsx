import React from "react";
import { Button, Card } from 'reactstrap';
import { Link } from "react-router-dom";
import './home.css'



const Home = () => {

    return (
        <div className='header'>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <div className='homeButtons'>
                    <Link to='/waiterView'>
                        <Button>Mesero</Button>
                    </Link>
                    <Link to='/kitchenView'>
                        <Button disabled>Cocina</Button>
                    </Link>
                    <div></div>
                </div>
            </Card>
        </div>

    )
}

export default Home