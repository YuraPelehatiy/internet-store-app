import React from 'react';
import PaginatePanel from '../../../components/PaginatePanel/PaginatePanel';
import ProdutcListContainer from '../ProductList/ProductListContainer';

const ProdutcListPageComponent = ({
    handleOnPageChange,
    selectedPage,
}) => (
    <div>
        <ProdutcListContainer />
        <PaginatePanel
            onPageChange={handleOnPageChange}
            initialPage={selectedPage}
            pageCount={10}
            pageRangeDisplayed={5}
            marginRangeDisplayed={3}
        />
    </div>
);

export default ProdutcListPageComponent;