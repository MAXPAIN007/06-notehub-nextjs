export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteStatus;
  createdAt: string;
  updatedAt: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: NoteStatus;
}

export type NoteStatus = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
