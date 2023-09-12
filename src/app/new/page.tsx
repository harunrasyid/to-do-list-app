import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";

const HEADER: string = "Add New To do List";

const createNewTask = async (data: FormData) => {
  "use server";
  const title = data.get("title")?.valueOf().toString();
  await prisma.todo.create({ data: { title: title ?? "", complete: false } });
  redirect("/");
};

export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-2xl">{HEADER}</h1>
      </div>
      <form action={createNewTask} className="flex flex-col gap-1">
        <div className="flex flex-col mb-8">
          <span className="mb-2">New task title</span>
          <input
            type={"text"}
            name={"title"}
            placeholder={"New task name..."}
            className="border border-slate-300 bg-transparent rounded p-2 focus-within:border-slate-100"
          />
        </div>
        <div className="flex flex-row gap-2 justify-end items-center">
          <Link href={".."}>
            <button className="border border-slate-300 hover:border-slate-400 p-2 rounded-lg hover:text-slate-400">
              Cancel
            </button>
          </Link>
          <button
            type={"submit"}
            className="border border-slate-300 hover:border-slate-400 p-2 rounded-lg hover:text-slate-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
