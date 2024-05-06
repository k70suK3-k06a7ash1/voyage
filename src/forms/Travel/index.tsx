import { useActionState, useOptimistic, useRef } from "react";
import { useFormStatus } from "react-dom";

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
    "",
    "/finished/"
  );

  return (
    <>
      <dialog ref={initDialogRef}>
        <form ref={formRef} action={submitAction}>
          label : {isPending ? title : response}
          <div />
          <input name="title" type="text" />
          <SubmitButton />
          {isPending && <p>Submitting...</p>}
          <p className="custom-number">2024年5月5日</p>
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
