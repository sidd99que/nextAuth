import { Button } from "@/components/ui/button";

export default function Home() {
  return (
       <main className="flex h-full items-center justify-center flex-col bg-sky-500">
 
           <div className="space-y-8">
            <h1 className="text-6xl text-white  font-semibold  drop-shadow-md text-center">Auth </h1>
            <p className="text-white text-lg ">AND  FINALLY  HERE WE DO</p>
            <div className="text-center">
            <Button variant={"secondary"} size={"lg"}  className="">Click</Button>
            </div>
            </div>
        </main>
  );
}
