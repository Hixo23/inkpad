import { Button } from "@nextui-org/react";

export function Hero() {
  return (
    <section className="min-h-[50vh] w-screen flex gap-6 flex-col text-white items-center justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-semibold">Note app you'll love</h1>
        <p className="text-gray-300 text-center">
          All your notes, synced on all your devices!
        </p>
      </div>
      <Button color="primary">Sign up now!</Button>
    </section>
  );
}
