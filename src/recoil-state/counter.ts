import { atom, selector } from 'recoil';

export const counterState = atom<number>({
  key: 'counterState',
  default: 0
});

export const checkCountIfLowerThanTen = selector<boolean>({
  key: 'isCountLowerThanTen',
  get ({ get }) {
    const count = get(counterState);
    return count < 10;
  }
})
