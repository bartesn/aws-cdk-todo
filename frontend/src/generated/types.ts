export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodoItem?: Maybe<TodoItem>;
  deleteTodoItem?: Maybe<TodoItem>;
};

export type MutationAddTodoItemArgs = {
  input: TodoItemInput;
};

export type MutationDeleteTodoItemArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getTodoItems: Array<TodoItem>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onAddTodoItem?: Maybe<TodoItem>;
  onDeleteTodoItem?: Maybe<TodoItem>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  id: Scalars['ID'];
  content: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type TodoItemInput = {
  content: Scalars['String'];
  completed: Scalars['Boolean'];
};
