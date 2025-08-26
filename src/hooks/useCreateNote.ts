import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../services/noteService";

export const useCreateNote = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onSuccess?.(); 
    },
  });
};