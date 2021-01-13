/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoItem_todo = {
    readonly id: string;
    readonly content: string;
    readonly " $refType": "TodoItem_todo";
};
export type TodoItem_todo$data = TodoItem_todo;
export type TodoItem_todo$key = {
    readonly " $data"?: TodoItem_todo$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoItem_todo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "TodoItem",
  "abstractKey": null
};
(node as any).hash = '4380ba3470242445a2358fc6b6c76baf';
export default node;
