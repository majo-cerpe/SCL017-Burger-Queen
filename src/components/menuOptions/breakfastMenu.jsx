import './menuOptions.css'
import React from 'react';
import Item from './item';
import { Card, CardHeader } from 'reactstrap';

const BreakfastMenu = (props) => {
    const { menu, onAdd } = props
    return (
        <div className='menu'>
            <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                <div className='breakfastMenu'>
                    <CardHeader>
                        <div className='cardHeader'>Opciones Desayuno</div>
                    </CardHeader>
                    <div className='menuOptions'>
                        {menu.breakfast.map((item) => (
                            <Item key={item.id} item={item} onAdd={onAdd} />
                        ))}
                    </div>
                
                </div>
            </Card>
        </div>
    );
}

export default BreakfastMenu
