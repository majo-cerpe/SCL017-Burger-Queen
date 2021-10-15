import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { collection, addDoc } from '@firebase/firestore';
import db from '../../firebase';
import nextId from "react-id-generator";

const SendButtonAndConfirmModal = (props) => {
    const { cartItems, removeAllItems, orderPrice} = props;


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

 

    const getTimeAndDate = () => {
        const today = new Date();
        const date = `${today.getDate()}/${(today.getMonth() + 1)}/${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const timeAndDate = `${time} ${date}`;
        return timeAndDate;
    }

    const saveInFirestore = async () => {
        const docRef = await addDoc(collection(db, 'orders'), {
            orderId: nextId('order-'),
            total: orderPrice,
            time: getTimeAndDate(),
            order: cartItems,
        });
        removeAllItems()
    };

    return (
        <div>
            <Button color="success" onClick={toggle}>Guardar Pedido</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Orden guardada</ModalHeader>
                <ModalBody>
                    <Button color="success" onClick={() => saveInFirestore()}>Aceptar</Button>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default SendButtonAndConfirmModal




