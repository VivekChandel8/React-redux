import { INCREMENT, DECREASE } from "./actionTypes";
import { toast } from "react-toastify";

export function incrementAction() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT
    });
    toast.success("Increased", { position: toast.POSITION.BOTTOM_CENTER }, { autoClose: 100 });
  };
}
export function decreaseAction() {
  return function(dispatch) {
    dispatch({
      type: DECREASE
    });
    toast.error("Decreased", { position: toast.POSITION.BOTTOM_CENTER}, { autoClose: 100 });
  };
}
