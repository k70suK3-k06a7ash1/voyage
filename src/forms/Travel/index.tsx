import { useActionState, useOptimistic, useRef } from "react";
import { useFormStatus } from "react-dom";
import { DateTime } from "ts-luxon";
const initDialogRef = (ref: HTMLDialogElement) => {
  ref.showModal();
  return () => {
    ref.close();
  };
};

const deliverTitle = async (title: string) => {
  await new Promise((res) => setTimeout(res, 1000));
  return title;
};
export const TravelForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [title, setTitle] = useOptimistic<string, string>(
    "",
    (_currentState, optimisticValue) => optimisticValue
  );

  const actionFn = async (_: unknown, formData: FormData) => {
    const requestTitle = formData.get("title") as string;
    setTitle(requestTitle);
    await deliverTitle(requestTitle);
    return requestTitle;
  };

  const [response, submitAction, isPending] = useActionState<string, FormData>(
    actionFn,
    ""
  );

  return (
    <>
      <dialog ref={initDialogRef}>
        <p className="custom-number">
          <span className="sp-block">
            {DateTime.now().toFormat("yyyy年MM月dd日")}
          </span>{" "}
          <span className="sp-block">~</span>{" "}
          <span className="sp-block">
            {DateTime.now().toFormat("yyyy年MM月dd日")}
          </span>
        </p>

        <form ref={formRef} action={submitAction}>
          Travel Title : {isPending ? title : response}
          {isPending && <p>Submitting...</p>}
          <div />
          <input name="title" type="text" />
          <div />
          <SubmitButton />
        </form>
      </dialog>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>{pending ? <>is pending</> : <button type="submit">Submit</button>}</>
  );
};
