import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { submitFailure, submitStart, submitSuccess } from "./projectRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/signin", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const submit = async (dispatch, project) => {
  dispatch(submitStart());
  try {
    const res = await publicRequest.post("/project/submit", project);
    dispatch(submitSuccess(res.data));
  } catch (error) {
    dispatch(submitFailure());
  }
};
