import { useActionState, useOptimistic } from "react";

type ReturnResponse = {
  ok: boolean;
  message?: string;
};

type FormYourNameProps = {
  name: string;
};

async function updateName(props: FormYourNameProps): Promise<ReturnResponse> {
  console.log(props);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (props.name.length < 3) {
    return {
      ok: false,
      message: "Name is too short",
    };
  }
  return {
    ok: true,
  };
}

const parseFormData = (formData: FormData) => {
  const name = formData.get("name") as string;
  return {
    name,
  };
};

export const UseOptimisticActionStateForm = () => {
  const [name, setName] = useOptimistic("name");
  const [response, submitAction, isPending] = useActionState<
    ReturnResponse | null,
    FormData
  >(
    async (_, formData) => {
      const props = parseFormData(formData);
      setName(props.name);
      const error = await updateName(props);
      if (!error.ok) {
        return error;
      }
      // redirect to /finished without 3rd argument
      // redirect("/finished", RedirectType.push);
      return null;
    },
    null,
    // redirect to /finished
    "/finished"
  );

  return (
    <div>
      <form action={submitAction}>
        <p>Current Name: {name}</p>
        <label>
          New Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
        {isPending && <p>Submitting...</p>}
        {response && <p>{response.message}</p>}
      </form>
    </div>
  );
};
