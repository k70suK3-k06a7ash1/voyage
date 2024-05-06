import { setup } from "xstate";

export const machine = setup({
  types: {
    context: {} as {},
    events: {} as { type: "next" } | { type: "back" },
  },
  actions: {
    // @ts-ignore
    reset: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  guards: {
    // @ts-ignore
    "some condition": function ({ context, event }) {
      // Add your guard condition here
      return true;
    },
  },
  schemas: {
    events: {
      next: {
        type: "object",
        properties: {},
      },
      back: {
        type: "object",
        properties: {},
      },
    },
  },
}).createMachine({
  context: {},
  id: "Untitled",
  initial: "Initial state",
  states: {
    "Initial state": {
      on: {
        next: {
          target: "Another state",
        },
      },
    },
    "Another state": {
      on: {
        next: [
          {
            target: "Parent state",
            guard: {
              type: "some condition",
            },
          },
          {
            target: "Initial state",
          },
        ],
      },
    },
    "Parent state": {
      initial: "Child state",
      on: {
        back: {
          target: "Initial state",
          actions: {
            // @ts-ignore
            type: "reset",
          },
        },
      },
      states: {
        "Child state": {
          on: {
            next: {
              target: "Another child state",
            },
          },
        },
        "Another child state": {},
      },
    },
  },
});
