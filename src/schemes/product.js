import T from 'prop-types';

export const productPropTypes = T.shape({
    id: T.number.isRequired,
    title: T.string.isRequired,
    description: T.string.isRequired,
    image: T.string.isRequired,
    price: T.string.isRequired,
}).isRequired;
