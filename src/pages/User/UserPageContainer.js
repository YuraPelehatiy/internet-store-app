import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import ProductPageComponent from './UserPageComponent';

const mapStateToProps = state => ({
    user: state.app.user
})


export default compose(
    connect(
        mapStateToProps, 
    ),
    mapProps(props => ({
        ...props.user
    }))
)(ProductPageComponent);