import './menuOptions.css'
import React from 'react';
import Item from './item';
import { Card, CardHeader } from 'reactstrap';

const LunchMenu = (props) => {
    const { menu, onAdd } = props;
    return (
        <div className='menu'>
            <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                <div className='lunchMenu'>
                    <CardHeader>
                        <div className='cardHeader'>Opciones Almuerzo</div>
                    </CardHeader>
                    <div className='menuOptions'>
                        {menu.lunch.map((item) => (
                            <Item key={item.id} item={item} onAdd={onAdd} />
                        ))}
                    </div>
                 
                </div>
            </Card>
        </div>
    );
}

export default LunchMenu


