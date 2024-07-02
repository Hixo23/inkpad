"use client";

import { Styles, TableContent } from "@blocknote/core";
import { useState } from "react";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { editNote } from "@/actions/notes";
import { useDebouncedCallback } from 'use-debounce';
import { useEditor } from "@/hooks/useEditor";

type EditorProps = {
    noteId: string;
    initialContent?: string | null;
  };

export function Editor({ noteId, initialContent }: EditorProps) {
  
  const { debounced, editor } = useEditor(noteId, initialContent ?? null);

  return (
    <BlockNoteView
      onChange={() => debounced()}
      className="w-full py-12 px-4 z-0 overflow-y-scroll"
      editor={editor}
    ></BlockNoteView>
  );
}
