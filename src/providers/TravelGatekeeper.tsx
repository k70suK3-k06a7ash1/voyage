// import { supabase } from "@/libs/supabase";
// import { PostgrestError } from "@supabase/supabase-js";
import { getCountriesProgram } from "@/effects/getCountiesProgram";
import { Effect } from "effect";
import { PropsWithChildren, use, useMemo } from "react";

export const TravelGatekeeper = ({ children }: PropsWithChildren) => {
  const travel = use(useMemo(() => Effect.runPromise(getCountriesProgram), []));
  console.log(travel);
  if (true)
    return <>{travel?.map((country) => <p>{JSON.stringify(country)}</p>)}</>;
  return <>{children}</>;
};
