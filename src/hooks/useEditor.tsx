import { editNote } from "@/actions/notes";
import { Styles, TableContent } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { useDebouncedCallback } from "use-debounce";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

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

export function useEditor(noteId: string, initialContent?: string | null) {
  const [blocks, setBlocks] = useLocalStorage<string>(`blocks-${noteId}`, "");
  const parsedContent =
    initialContent && isArrayOfBlocks(JSON.parse(initialContent))
      ? JSON.parse(initialContent)
      : null;

  const editor = useCreateBlockNote({
    initialContent: parsedContent,
  });

  const debounced = useDebouncedCallback(async () => {
    const currentBlocks = editor.document;
    setBlocks(JSON.stringify(currentBlocks));
  }, 300);

  useEffect(() => {
    const handleUnload = async (evt: BeforeUnloadEvent) => {
      evt.preventDefault();
      await editNote(noteId, blocks);
      setBlocks("");
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [blocks, noteId, setBlocks]);

  return { editor, debounced };
}
