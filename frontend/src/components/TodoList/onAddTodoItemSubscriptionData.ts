import { OnAddTodoItemSubscription } from './graphql/subscription.generated';
import { OnSubscriptionDataOptions, Reference } from '@apollo/client';

function onAddTodoItemSubscriptionData({
  client: { cache },
  subscriptionData,
}: OnSubscriptionDataOptions<OnAddTodoItemSubscription>): void {
  if (subscriptionData?.data?.onAddTodoItem?.id) {
    const { id } = subscriptionData.data.onAddTodoItem;
    cache.modify({
      fields: {
        getTodoItems(existingTodoItems = [], { readField }) {
          if (
            existingTodoItems.findIndex(
              (todoItemRef: Reference) => id === readField('id', todoItemRef)
            ) === -1
          ) {
            return [...existingTodoItems, subscriptionData?.data?.onAddTodoItem];
          }

          return existingTodoItems;
        },
      },
    });
  }
}

export default onAddTodoItemSubscriptionData;
