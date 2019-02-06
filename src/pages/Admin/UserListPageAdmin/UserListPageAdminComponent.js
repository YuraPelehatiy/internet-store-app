import React from 'react';
import PaginatePanel from '../../../components/PaginatePanel/PaginatePanel';
import UserListAdminContainer from '../UserListAdmin/UserListAdminContainer';

const UserListPageAdminComponent = ({
    handleOnPageChange,
    selectedPage,
}) => (
    <div>
        <UserListAdminContainer />
        <PaginatePanel
            onPageChange={handleOnPageChange}
            initialPage={selectedPage}
            pageCount={10}
            pageRangeDisplayed={5}
            marginRangeDisplayed={3}
        />
    </div>
);

export default UserListPageAdminComponent;