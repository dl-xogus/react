import { create } from 'zustand'

const useStore = create((set) => ({
    data: 'hello zustand',
    update: () => {
        set({data: '값 변경'});     // set()으로 값을 변경하면 재 렌더링 발생
    }
}))

export default useStore;