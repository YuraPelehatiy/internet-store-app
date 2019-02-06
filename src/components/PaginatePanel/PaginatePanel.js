import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './PaginatePanel.module.css';

const PaginatePanel = props => (
    <div>
        <ReactPaginate
            {...props}
            nextLabel="Next"
            breakLabel="..."
            previousLabel="Previous"
            containerClassName={s.ReactPaginateContainer}
            pageClassName={s.ReactPaginatePage}
            activeClassName={s.Active}
            breakClassName={s.ReactPaginatePageBreak}
            nextClassName={s.ReactPaginatePage}
            previousClassName={s.ReactPaginatePage}
        />
    </div>
);

export default PaginatePanel;