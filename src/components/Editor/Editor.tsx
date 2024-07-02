"use client";

import { Styles, TableContent } from "@blocknote/core";
import { useState } from "react";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { editNote } from "@/actions/notes";
import { useDebouncedCallback } from 'use-debounce';

type EditorProps = {
  noteId: string;
  initialContent?: string | null;
};

type Block = {
  id: string;
  type: string;
  props: Record<string, boolean | number | string>;
  content: InlineContent[] | TableContent<any> | undefined;
  children: Block[];
};

type Link = {
  type: "link";
  content: StyledText[];
  href: string;
};

type StyledText = {
  type: "text";
  text: string;
  styles: Styles<any>;
};

type InlineContent = Link | StyledText;

function isBlock(obj: any): obj is Block {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "string" &&
    typeof obj.type === "string" &&
    typeof obj.props === "object" &&
    Array.isArray(obj.children)
  );
}

function isArrayOfBlocks(arr: any): arr is Block[] {
  return Array.isArray(arr) && arr.every(isBlock) && arr.length >= 1;
}

export function Editor({ noteId, initialContent }: EditorProps) {
  const parsedContent =
    initialContent && isArrayOfBlocks(JSON.parse(initialContent))
      ? JSON.parse(initialContent)
      : null;

  const editor = useCreateBlockNote({
    initialContent: parsedContent,
  });

  const debounced = useDebouncedCallback(async () => {
    const currentBlocks = editor.document;
    await editNote(noteId, JSON.stringify(currentBlocks));
  }, 300);

  return (
    <BlockNoteView
      onChange={() => debounced()}
      className="w-full min-h-screen py-12 px-4 z-0"
      editor={editor}
    ></BlockNoteView>
  );
}
