import useStore from '@/lib/zustand';

export default function useJoinForm() {
  return useStore().joinForm;
}
