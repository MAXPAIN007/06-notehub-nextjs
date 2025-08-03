import axios, { AxiosResponse } from 'axios';
import type { NewNoteData, Note } from '../types/note';

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface Params {
  page: number;
  perPage: number;
  search?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const myKey = process.env.NEXT_PUBLIC_TMDB_TOKEN;

export async function fetchNotes(
  page: number = 1,
  searchValue: string = '',
  perPage: number = 12,
): Promise<FetchNotesResponse> {
  const params: Params = {
    page,
    perPage,
  };
  if (searchValue) {
    params.search = searchValue;
  }
  const response: AxiosResponse = await axios.get<FetchNotesResponse>(baseUrl, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
    params,
  });
  return response.data;
}

export const addNote = async (noteData: NewNoteData): Promise<Note> => {
  const response = await axios.post<Note>(`${baseUrl}`, noteData, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export const deleteNote = async (id: number): Promise<Note> => {
  const response = await axios.delete<Note>(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
};

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await axios.get<Note>(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data;
}
