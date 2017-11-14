export default function feeds(state=null, action) {
  switch (action.type) {
    case "FEED_FETCHED":
      state = action.data;
      break;
  }
  return state;
}
