import T from 'prop-types';

export const productPropTypes = T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    description: T.string.isRequired,
    image: T.string.isRequired,
    price: T.number.isRequired,
}).isRequired;