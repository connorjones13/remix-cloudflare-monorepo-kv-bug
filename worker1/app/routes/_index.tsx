import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/server-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "New Worker 1 App" },
    { name: "description", content: "Welcome to Worker 1!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const kvdata = await args.context.cloudflare.env.WORKER1_KV.get('key1');
  return json({kvdata});
}

export default function Index() {
  const { kvdata } = useLoaderData<typeof loader>();
  console.log(`🥳 kvdata`, kvdata);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Remix</span>
          </h1>
          <div className="h-[144px] w-[434px]">
            <img
              src="/logo-light.png"
              alt="Remix"
              className="block w-full dark:hidden"
            />
            <img
              src="/logo-dark.png"
              alt="Remix"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        {kvdata || 'failed to load KV data'}
      </div>
    </div>
  );
}
