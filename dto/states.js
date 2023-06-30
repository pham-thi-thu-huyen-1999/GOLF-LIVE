import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    login: '',
    modal: false,
    data: null,
    loading: false,
    modalComp: null,
    totalFavorites: 0,
    media: "desktop",
    sidebarDisplay:true
});

export const setOverflowState = (value) => {
    setGlobalState('login', value);
};

export const setData = (value) => {
    setGlobalState('data', value);
};

export const setOverflowModalState = (value) => {
    setGlobalState('modal', value);
};

export const setOverflowModalComp = (value) => {
    setGlobalState('modalComp', value);
};

export const setOverflowModalLoading = (value) => {
    setGlobalState('loading', value);
};

export const setTotalFavorites = (value) => {
    setGlobalState('totalFavorites', value);
};

export const setMedia = (value) => {
    setGlobalState('media', value);
};

export const setSidebarDisplay = (value) => {
    setGlobalState('sidebarDisplay', value);
};

export { useGlobalState };
