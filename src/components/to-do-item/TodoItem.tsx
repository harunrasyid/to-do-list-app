import { TodoType } from "@/types/todo";

type TodoItemProps = {
  data: TodoType;
};

export default function TodoItem({ data }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={data.id} type={"checkbox"} className="cursor-pointer peer" />
      <label
        htmlFor={data.id}
        className="cursor-pointer peer-checked:line-through"
      >
        {data.title}
      </label>
    </li>
  );
}
