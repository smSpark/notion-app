import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/contacts/action";
import { getPageMap } from "../../redux/contacts/selectors";
import { RootState } from "../../types/redux";
import { PaginationButton, PaginationContainer } from "./PaginationStyle";
// FIXME: Проблема решена очень частично и криво, нужно доделать
const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const pageMap = useSelector(getPageMap);
  const currentPage = useSelector((state: RootState) => state.contacts.currentPage);

  const setPrevPage = useCallback(() => {
    const prevPage = currentPage - 1 || 1;
    dispatch(setPage(prevPage));
  }, [currentPage, dispatch]);

  const setNextPage = useCallback(() => {
    const nextPage = currentPage === pageMap.length ? currentPage : currentPage + 1;
    dispatch(setPage(nextPage));
  }, [dispatch, currentPage, pageMap.length]);

  return (
    <PaginationContainer>
      <PaginationButton onClick={setPrevPage} disabled={currentPage === 1}>
        &lt;
      </PaginationButton>
      {pageMap.map((i, index) => {
        if (index === 0 || index === pageMap.length - 1) {
          return (
            <PaginationButton
              onClick={() => dispatch(setPage(i))}
              active={currentPage === i}
              key={i}
            >
              {i}
            </PaginationButton>
          );
        }

        if (i >= currentPage - 2 && i <= currentPage + 2) {
          return (
            <PaginationButton
              onClick={() => dispatch(setPage(i))}
              active={currentPage === i}
              key={i}
            >
              {i}
            </PaginationButton>
          );
        }

        if (i === currentPage - 3 || i === currentPage + 3) {
          return (
            <PaginationButton
              onClick={() => dispatch(setPage(i))}
              active={currentPage === i}
              key={i}
            >
              ...
            </PaginationButton>
          );
        }

        return null;
      })}
      <PaginationButton onClick={setNextPage} disabled={currentPage === pageMap.length}>
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
};

export { Pagination };
