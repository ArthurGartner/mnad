import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div>This is the index page</div>
    </>
  );
}
