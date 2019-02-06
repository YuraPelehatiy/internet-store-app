import React from 'react';
import PaginatePanel from '../../../components/PaginatePanel/PaginatePanel';
import ProductListAdminContainer from '../ProductListAdmin/ProductListAdminContainer';

const ProdutcListPageAdminComponent = ({
    handleOnPageChange,
    selectedPage,
}) => (
    <div>
        <ProductListAdminContainer />
        <PaginatePanel
            onPageChange={handleOnPageChange}
            initialPage={selectedPage}
            pageCount={10}
            pageRangeDisplayed={5}
            marginRangeDisplayed={3}
        />
    </div>
);

export default ProdutcListPageAdminComponent;