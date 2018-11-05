import React from 'react';
import ModalFormComponent from './ModalFormComponent';

class ModalFormContainer extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
            openModal: false
        };

        this.onActionFormSubmit = this.onActionFormSubmit.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.afrerOpenModal = this.afrerOpenModal.bind(this);
    }

    onActionFormSubmit(e){
        e.preventDefault();
        let newProduct = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price
        }

        this.props.createProduct(newProduct);
        
        this.setState({
            title: '',
            description: '',
            image: '',
            price: '',
        });

        this.onCloseModal();
    }

    onChangeField(name){ 
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

    onOpenModal(){
        this.setState({ openModal: true })
    }

    onCloseModal(){
        this.setState({ openModal: false })
    }

    afrerOpenModal(){
        const { porductData } = this.props;
        if(porductData){
            this.setState({
                ...porductData
            });
        }
    }

    render(){
        return(
            <ModalFormComponent 
                {...this.state} 
                onChangeField = {this.onChangeField}
                onActionFormSubmit = {this.onActionFormSubmit}
                actionButtonTitle = {this.props.actionButtonTitle}
                onClose = {this.onCloseModal}
                onOpen = {this.onOpenModal}
                openModal = {this.state.openModal}
                afrerOpenModal = {this.afrerOpenModal}
            />          
        );
    }
}

export default ModalFormContainer;