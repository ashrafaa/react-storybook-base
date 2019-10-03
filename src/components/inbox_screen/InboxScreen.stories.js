import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import { PureInboxScreen } from "../inbox_screen/InboxScreen";
import { defaultTasks } from "../task_list/TaskList.stories";

// simple mock of redux store to pass this story
const store = {
  getState: () => {
    return {
      tasks: defaultTasks
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch")
};

storiesOf("InboxScreen", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("default", () => <PureInboxScreen />)
  .add("error", () => <PureInboxScreen error="Something" />);
