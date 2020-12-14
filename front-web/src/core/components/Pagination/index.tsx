import React from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import './styles.scss'

const Pagination = () => {
    return (
        <div className="pagination-container">
            <ArrowIcon  className="paginatio-previous"/>
            <div className="pagination-item active">
                1
            </div>
            <ArrowIcon className="paginatio-next"/>
        </div>
    );
}

export default Pagination;