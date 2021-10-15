import React from 'react'
import { Card, CardImg, CardHeader, CardText, CardBody, Button, CardFooter } from 'reactstrap'
import './menuOptions.css'

const Item = (props) => {
    const { item, onAdd } = props
    return (
        <div className='itemCard'>
            <Card style={{ backgroundColor: '#1111', borderColor: '#999' }}>
                <CardImg></CardImg>
                <CardHeader>{item.name}</CardHeader>
                <CardBody>
                    <CardText>precio: ${item.price}</CardText>
                    <Button onClick={() => onAdd(item)} color='success'>Agregar</Button>
                </CardBody>



            </Card>
        </div>
    )
}

export default Item;
