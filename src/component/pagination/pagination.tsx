import React from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';

export interface IJhiPaginationProps extends PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

export const JhiPagination = ({totalItems, itemsPerPage, ...props}: IJhiPaginationProps) => {
  const getMaxPage = () => {
    const division = Math.floor(totalItems / itemsPerPage);
    const modulo = totalItems % itemsPerPage;
    return division + (modulo !== 0 ? 1 : 0);
  };

  return (
    <Pagination count={getMaxPage()} {...props} />
  );
}
