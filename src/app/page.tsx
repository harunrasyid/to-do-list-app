import Link from "next/link";
import prisma from "@/db";
import { TodoType } from "@/types/todo";
import TodoItem from "@/components/to-do-item/TodoItem";

const HEADER: string = "Today To do List";
const ADD_NEW_TASK_BUTTON: string = "Add New Task";

const getTodos = () => {
  return prisma.todo.findMany();
};

export default async function Home() {
  const toDos: TodoType[] = await getTodos();

  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-2xl">{HEADER}</h1>
        <Link href={"/new"}>
          <button className="border border-slate-300 hover:border-slate-400 p-2 rounded-lg hover:text-slate-400">
            {ADD_NEW_TASK_BUTTON}
          </button>
        </Link>
      </div>
      <ul>
        {toDos.map((data) => {
          return <TodoItem key={data.id} data={data} />;
        })}
      </ul>
    </div>
  );
}
