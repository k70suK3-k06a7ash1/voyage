import { createActor, fromPromise } from "xstate";
const promiseLogic = fromPromise(() => {
  return fetch("https://syntax.fm/api/shows/latest").then((data) =>
    data.json()
  );
});

export const promiseActor = createActor(promiseLogic);

promiseActor.subscribe((snapshot) => {
  console.log(snapshot);
});
