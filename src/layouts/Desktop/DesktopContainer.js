import { compose, lifecycle, mapProps, withProps } from 'recompose';
import App from './DesktopComponent';

let previousLocation;

const getPreviousLocation = () => previousLocation;
const setPreviousLocation = newPreviousLocation => {
  previousLocation = newPreviousLocation;
}

export default compose(
  withProps(
    props => {
      setPreviousLocation(props.location)
    }
  ),
  lifecycle({
    componentWillUpdate(nextProps){
      let { location } = this.props;

      // Set previousLocation if props.location is not modal
      if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
      ) {
        setPreviousLocation(this.props.location);
      }
    }
  }),
  mapProps(props => ({
    ...props,
    previousLocation: getPreviousLocation()
  }))
)(App);
