import { createSelector } from "reselect";
import { NATIONAL_ABB } from "../../assets/js/national";
import { RootState } from "../../types/redux";
import { ContactsSortType } from "./types";

const getContacts = (state: RootState) => state.contacts.data;
const getSortType = (state: RootState) => state.contacts.sortType;
const getPageCapacity = (state: RootState) => state.contacts.pageCapacity;
const getCurrentPage = (state: RootState) => state.contacts.currentPage;
const getFilterValue = (state: RootState) => state.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) => {
    return contacts.filter((contact) => {
      const fullname = `${contact.name.first} ${contact.name.last}`.toLowerCase();
      const national = (NATIONAL_ABB[contact.nat] || "").toLowerCase();
      const isFullNameCoincidence = filterValue.name ? fullname.includes(filterValue.name) : true;
      const isNationalCoincidence = filterValue.nat ? national.includes(filterValue.nat) : true;
      const isGenderCoincidence = filterValue.gender ? contact.gender === filterValue.gender : true;
      return isFullNameCoincidence && isNationalCoincidence && isGenderCoincidence;
    });
  },
);

export const getSortedContacts = createSelector(
  [getFiltredContacts, getSortType],
  (contacts, sortType) => {
    switch (sortType) {
      case ContactsSortType.NOT_SORTED:
        return contacts;
      case ContactsSortType.BY_NAME_AZ:
        return [...contacts].sort((a, b) => a.name.first.localeCompare(b.name.first));
      case ContactsSortType.BY_NAME_ZA:
        return [...contacts].sort((a, b) => b.name.first.localeCompare(a.name.first));
      default:
        return contacts;
    }
  },
);

export const getContactParts = createSelector(
  [getSortedContacts, getPageCapacity, getCurrentPage],
  (contacts, pageCapacity, page) => {
    return contacts.slice((page - 1) * pageCapacity, page * pageCapacity);
  },
);

export const getPageMap = createSelector(
  [getSortedContacts, getPageCapacity],
  (contacts, pageCapacity) => {
    const pageCount = Math.ceil(contacts.length / pageCapacity);
    const pageArrForMap: number[] = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pageArrForMap.push(i);
    }

    return pageArrForMap;
  },
);

export const getContactStatistic = createSelector([getContacts], (contacts) => {
  return contacts.reduce(
    (acc, value) => {
      acc.collectionsize += 1;
      if (value.gender === "male") {
        acc.males += 1;
      } else if (value.gender === "female") {
        acc.females += 1;
      } else {
        acc.indeterminate += 1;
      }

      const fullNational = NATIONAL_ABB[value.nat] || value.nat;

      if (!acc.nationals[fullNational]) {
        acc.nationals[fullNational] = 1;
      } else {
        acc.nationals[fullNational] += 1;
      }

      return acc;
    },
    {
      collectionsize: 0,
      males: 0,
      females: 0,
      indeterminate: 0,
      nationals: {},
    },
  );
});
