"use client"

import { TodoType } from "@/types/todo";

type TodoItemProps = {
  data: TodoType;
  onCheck(id: string, complete: boolean): void;
};

export default function TodoItem({ data, onCheck }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={data.id}
        type={"checkbox"}
        className="cursor-pointer peer"
        defaultChecked={data?.complete}
        onChange={(e) => onCheck(data.id, e.target.checked)}
      />
      <label
        htmlFor={data?.id}
        className="cursor-pointer peer-checked:line-through"
      >
        {data.title}
      </label>
    </li>
  );
}
