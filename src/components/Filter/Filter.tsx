import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ClearButton,
  FilterWrapper,
  FilterForm,
  FilterInput,
  FilterSubmit,
  InputWrapper,
} from "./FilterStyle";
import { ReactComponent as SearchImg } from "../../assets/images/search.svg";
import { OptionSelect } from "../../componentsHelpers/OptionSelect/OptionSelect";
import { changeFilterValue, resetFilter } from "../../redux/contactFilter/action";
import { ContactFilterState } from "../../redux/contactFilter/types";
import { useDebounce } from "../../hooks/useDebounce";
import { INPUT_DEBOUNCE } from "../../assets/js/constants";
import { initialState as filterInitState } from "../../redux/contactFilter/reducer";

// TODO: Сделать варианты в text инпутах
const Filter: React.FC = () => {
  const dispatch = useDispatch();

  // FIXME: По хорошему следует разделить стейты каждого инпута, что-бы они рендерили друг друга
  const [filterState, setFilterState] = useState<ContactFilterState>(filterInitState);
  const debouncedFilterState = useDebounce(filterState, INPUT_DEBOUNCE);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = evt.currentTarget.value.toLowerCase();
    const inValue = evt.currentTarget.name;
    setFilterState((state) => ({
      ...state,
      [inValue]: value,
    }));
  };

  useEffect(() => {
    dispatch(changeFilterValue(debouncedFilterState));
  }, [debouncedFilterState, dispatch]);

  // FIXME: Не сбрасывает форму, пофиксить
  const resetForm = () => {
    dispatch(resetFilter());
  };

  return (
    <FilterWrapper>
      <FilterForm>
        <InputWrapper width="60%">
          <FilterInput
            value={filterState.name}
            onChange={onChangeHandler}
            placeholder="Search by full name"
            type="text"
            name="name"
          />
          <FilterSubmit disabled type="submit">
            <SearchImg />
          </FilterSubmit>
        </InputWrapper>
        <OptionSelect value={filterState.gender} onChange={onChangeHandler} name="gender" />
        <InputWrapper width="20%">
          <FilterInput
            value={filterState.nat}
            onChange={onChangeHandler}
            placeholder="Nationality"
            type="text"
            name="nat"
          />
        </InputWrapper>
      </FilterForm>
      <ClearButton onClick={resetForm}>Clear</ClearButton>
    </FilterWrapper>
  );
};

export { Filter };
