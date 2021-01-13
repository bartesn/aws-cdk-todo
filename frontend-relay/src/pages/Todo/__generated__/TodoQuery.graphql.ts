/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoQueryVariables = {};
export type TodoQueryResponse = {
    readonly getTodoItems: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"TodoItem_todo">;
    }>;
};
export type TodoQuery = {
    readonly response: TodoQueryResponse;
    readonly variables: TodoQueryVariables;
};



/*
query TodoQuery {
  getTodoItems {
    id
    ...TodoItem_todo
  }
}

fragment TodoItem_todo on TodoItem {
  id
  content
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "getTodoItems",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItem_todo"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "getTodoItems",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2489beca28c6336e9fb55fb2498a2a78",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery {\n  getTodoItems {\n    id\n    ...TodoItem_todo\n  }\n}\n\nfragment TodoItem_todo on TodoItem {\n  id\n  content\n}\n"
  }
};
})();
(node as any).hash = '3dd3e92d6a49265fa6e8bff6c49ba906';
export default node;
