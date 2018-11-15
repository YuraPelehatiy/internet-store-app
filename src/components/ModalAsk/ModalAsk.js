import React from 'react';
import Modal from 'react-responsive-modal';
import s from './ModalAsk.module.css';
import ActionButton from '../ActionButton/ActionButton';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

const ModalAsk = ({ 
    open,
    onClose,
    id,
    onSubmitAction,
}) => {
    const onSubmit = async () => {
        try {
            await onSubmitAction(id);

            onClose();
        } catch (err) {
            return {
                [FORM_ERROR]: "Error"
            }
        }
    }

    return(
        <Modal open={open} onClose={onClose}>
            <div className={s.Form}>
                <h3 className={s.Question}>Are you sure?</h3>
                <div>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit }) => (
                            <>
                                <ActionButton onClick={handleSubmit}>Yes</ActionButton>
                                <ActionButton onClick={onClose}>No</ActionButton>
                            </>
                        )}
                    />
                </div>
                
            </div>
        </Modal>
)};


export default ModalAsk;