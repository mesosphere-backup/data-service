import "symbol-observable";
import {
  componentFromStreamWithConfig,
  createEventHandlerWithConfig,
  Subscribable
} from "recompose";
import { from } from "rxjs";

const rxjsConfig = {
  fromESObservable: from as (<T>(observable: Subscribable<T>) => any),
  toESObservable: stream => stream
};

export const createEventHandler = createEventHandlerWithConfig(rxjsConfig);
export const componentFromStream = componentFromStreamWithConfig(rxjsConfig);
