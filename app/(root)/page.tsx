import Hello from "../components/hello";

export default function Home() {
  console.log('client/server component')
  async function serverHit() {
    const response = await fetch('http://localhost:3000/api');
    if(response.ok){
      const json = await response.json();
      console.log(json.msg);
    }
  }
  serverHit();  
  return (
    <div className="h-screen ">
      <Hello />
    <div className="text-red-400 flex items-center justify-center h-full">
      Hello world
      </div>
      </div>
  );
}
