import { DISPATCH_ACTION, GlobalReducerActions } from "../types";

export const openModalFor = (movieId: string): GlobalReducerActions => ({
  type: DISPATCH_ACTION.OPEN_MODEL,
  value: movieId
})

export const closeModal = (): GlobalReducerActions => ({
  type: DISPATCH_ACTION.CLOSE_MODAL,
  value: null
})