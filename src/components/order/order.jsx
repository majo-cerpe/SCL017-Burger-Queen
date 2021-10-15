import './order.css'
import React, { useEffect } from 'react';
import { Button, Card, CardHeader } from 'reactstrap';
import ClientAndTableForm from './clientAndTable';
import SendButtonAndConfirmModal from './sendButtonAndConfirmModal';


const Order = (props) => {
    const { cartItems, onAdd, onRemove, removeAllItems } = props;
    
    const orderPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0); /* a=acumulator / c=currentItem  */


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <aside className='orderDetail'>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardHeader id='orderCardHeader'>Detalle de la Orden</CardHeader>
                
                <ClientAndTableForm />

                <div className='orderDetailHeader'>
                    <h6>Ítem</h6>
                    <h6>Cantidad/Precio Unitario</h6>
                </div>
                <div>{cartItems.length === 0 && <div>Orden Vacia</div>}</div>
                {cartItems.map((item) => (
                    <div key={item.id} className='orderDetailColumns'>
                        <div>{item.name}</div>
                        <div className='buttonsDiv'>
                            <Button onClick={() => onRemove(item)} >-</Button>
                            <Button onClick={() => onAdd(item)} >+</Button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <div>
                        <hr></hr>
                        <div>
                            <strong>Total</strong>
                            <strong>${orderPrice.toFixed(2)}</strong>
                        </div>
                        <hr></hr>
                        <div className='buttonsDiv'>
                            <div><Button onClick={() => removeAllItems()} color="danger">Borrar pedido</Button></div>
                            {<SendButtonAndConfirmModal removeAllItems={removeAllItems} cartItems={cartItems} orderPrice={orderPrice} > </SendButtonAndConfirmModal>}
                        </div>
                    </div>
                )}
            </Card>
        </aside>
    );
}

export default Order