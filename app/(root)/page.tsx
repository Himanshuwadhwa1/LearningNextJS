import Hello from "../components/hello";

export default function Home() {
  console.log('client/server component')
  return (
    <div className="h-screen ">
      <Hello />
    <div className="text-red-400 flex items-center justify-center h-full">
      Hello world
      </div>
      </div>
  );
}
