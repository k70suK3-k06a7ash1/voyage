// @ts-ignore
import { useActionState, useOptimistic, use, cache } from "react";
import { Effect } from "effect";
import {
  ApiResponse,
  getApiResponseProgram,
} from "../effects/getApiResponseProgram";

export const Podcast = () => {
  const podcast = use<ApiResponse>(Effect.runPromise(getApiResponseProgram));

  return (
    <>
      <h2>{podcast.title}</h2>
      <meta property="og:title" content={podcast.title} />
    </>
  );
};
