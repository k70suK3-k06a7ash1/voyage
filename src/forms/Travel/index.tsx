import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useActionState,
  useOptimistic,
  useRef,
  useState,
} from "react";

const initDialogRef = (ref: HTMLDialogElement) => {
  ref.showModal();
  return () => {
    ref.close();
  };
};

function Thread({
  messages,
  sendMessage,
}: {
  messages: any;
  sendMessage: any;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef?.current?.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map(
        (
          message: {
            text:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
            sending: any;
          },
          index: Key | null | undefined
        ) => (
          <div key={index}>
            {message.text}
            {!!message.sending && <small> (Sending...)</small>}
          </div>
        )
      )}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

type Message = { text: string; sending: false; key: number };

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello there!", sending: false, key: 1 },
  ]);
  async function sendMessage(formData: FormData) {
    // @ts-ignore
    const sentMessage = await deliverMessage(formData.get("message") as string);
    // @ts-ignore
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}

async function deliverMessage(message: Message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export const TravelForm = () => {
  const [title, setTitle] = useOptimistic("");

  const [response, submitAction, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      console.log(formData.get("title"));
      setTitle("update"); //formData.get("title") as string);
      setTimeout(() => {
        console.log("done");
      }, 6000);
      // const result = await updateAction(formData.get("ttile"))
      return formData;
      // const response = await insertTravel()
      // const response.stateus.ok =>
      //     orElse()
    },
    null,
    "/finished"
  );

  console.log({ isPending });
  return (
    <>
      <dialog ref={initDialogRef}>
        <App />
        <form action={submitAction}>
          label : {title}
          <div />
          <input name="title" type="text" />
          <button type="submit">Submit</button>
          {isPending && <>Loading!!!!!!!!!!!</>}
          {response && <>{String(response)}</>}
        </form>
      </dialog>
    </>
  );
};
