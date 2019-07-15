// Action Types

export const SHOW_DIALOG = "SHOW_DIALOG";
export const HIDE_DIALOG = "SHOW_DIALOG";

// Action Creators

export const showDialog = text => ({
  type: SHOW_DIALOG,
  text
});

export const hideDialog = () => ({
  type: HIDE_DIALOG
});

// Reducers

const initialState = {
  open: false,
  text: ""
};

export default function dialog(state = initialState, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return { ...state, open: true, text: action.text };
    case HIDE_DIALOG:
      return { ...state, open: false };

    default:
      return state;
  }
}
