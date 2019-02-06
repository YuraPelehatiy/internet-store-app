import React from 'react';
import Modal from 'react-responsive-modal';
import { Form } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import s from './ModalAsk.module.css';
import ActionButton from '../ActionButton/ActionButton';

const ModalAsk = ({
    id,
    open,
    onClose,
    onSubmitAction,
}) => {
    const onSubmit = async () => { // eslint-disable-line
        try {
            await onSubmitAction(id);

            onClose();
        } catch (err) {
            return {
                [FORM_ERROR]: 'Something went wrong',
            };
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className={s.Form}>
                <h3 className={s.Question}>Are you sure?</h3>
                <div>
                    <Form
                        onSubmit={onSubmit}
                        render={({
                            handleSubmit, submitting, submitSucceeded,
                        }) => (
                            <>
                                <ActionButton onClick={handleSubmit}>Yes</ActionButton>
                                <ActionButton onClick={onClose}>No</ActionButton>
                                {submitting && <h2>Submiting...</h2>}
                                {submitSucceeded && <h2>Complete</h2>}
                            </>
                        )}
                    />
                </div>
            </div>
        </Modal>
    );
};


export default ModalAsk;