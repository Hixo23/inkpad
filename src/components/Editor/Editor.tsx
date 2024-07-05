"use client";

import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useEditor } from "@/hooks/useEditor";

type EditorProps = {
  note: {
    id?: string;
    content?: string | null;
    title?: string | null;
    userEmail?: string | null;
  };
};

export function Editor({ note }: EditorProps) {
  const { debounced, editor } = useEditor(note.id ?? "", note.content ?? null);

  return (
    <BlockNoteView
      onChange={() => debounced()}
      className="w-3/4 py-12 px-4 mt-8 z-0 overflow-y-scroll"
      editor={editor}
    ></BlockNoteView>
  );
}
