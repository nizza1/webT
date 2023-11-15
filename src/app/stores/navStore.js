import { create } from 'zustand';

const useStore = create(set => ({
  isActive: false,
  toggleIsActive: () => set(state => ({ isActive: !state.isActive }))
}));

export default useStore;