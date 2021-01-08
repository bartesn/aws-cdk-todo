import { OnDeleteTodoItemSubscription } from './graphql/subscription.generated';
import { OnSubscriptionDataOptions, Reference } from '@apollo/client';

function onDeleteTodoItemSubscriptionData({
  client: { cache },
  subscriptionData,
}: OnSubscriptionDataOptions<OnDeleteTodoItemSubscription>): void {
  if (subscriptionData?.data?.onDeleteTodoItem?.id) {
    const { id } = subscriptionData.data.onDeleteTodoItem;
    cache.modify({
      fields: {
        getTodoItems(existingTodoItems = [], { readField }) {
          return existingTodoItems.filter(
            (todoItemRef: Reference) => id !== readField('id', todoItemRef)
          );
        },
      },
    });
  }
}

export default onDeleteTodoItemSubscriptionData;
