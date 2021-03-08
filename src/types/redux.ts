import { AppActions } from "../redux/app/types";
import { ContactFilterActions } from "../redux/contactFilter/types";
import { ContactsActions } from "../redux/contacts/types";
import { rootReducer } from "../redux/rootReducer";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = AppActions | ContactsActions | ContactFilterActions;

export type RootState = ReturnType<typeof rootReducer>;
