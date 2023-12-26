"use client";

import { RefObject, useRef } from "react";
import { useSession } from "next-auth/react";
import { update, destroy } from "@/actions/answer";

export function AnswerAuthorSection({
  id,
  userId,
  content,
}: {
  id: string;
  userId: string;
  content: string;
}) {
  const session = useSession();
  const modal = useRef<HTMLDialogElement>(null);
  if (session?.data?.user?.id !== userId) return <></>;
  return (
    <section>
      <DeleteButton id={id} />
      <EditModal modal={modal} id={id} content={content} />
      <EditButton modal={modal} />
    </section>
  );
}

function DeleteButton({ id }: { id: string }) {
  return <button onClick={async () => await destroy(id)}>Delete</button>;
}

function EditModal({
  modal,
  id,
  content,
}: {
  modal: RefObject<HTMLDialogElement>;
  id: string;
  content: string;
}) {
  return (
    <dialog
      ref={modal}
      onBlur={(e) => {
        if (e.target === modal.current) modal.current?.close();
      }}
    >
      <form
        action={(form) => {
          const changed = form.get("content") !== content;
          if (changed) update(form).then(() => modal.current?.close());
        }}
      >
        <input type="hidden" name="id" value={id} />
        <textarea name="content" defaultValue={content} required />
        <button>Update</button>
      </form>
    </dialog>
  );
}

function EditButton({ modal }: { modal: RefObject<HTMLDialogElement> }) {
  return <button onClick={() => modal.current?.showModal()}>Edit</button>;
}
