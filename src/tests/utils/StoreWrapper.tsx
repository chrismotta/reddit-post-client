import { createStore, Store } from "redux";

import reducer from "../../store/reducer";
import { Provider } from "react-redux";

const store: Store<PostState, PostAction> & { dispatch: Dispatch } =
  createStore(reducer);

type Props = {
  children: React.ReactNode;
};
function StoreWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreWrapper;
