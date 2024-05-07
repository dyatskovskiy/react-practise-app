//Employees selectors

export const selectEmployees = (state) => state.employees.list;

export const selectIsLoading = (state) => state.employees.isLoading;

export const selectError = (state) => state.employees.error;

// Filters selectors
export const selectInputValue = (state) => state.filters.inputValue;

export const selectFilter = (state) => state.filters.filter;

export const selectSortType = (state) => state.filters.sortType;
