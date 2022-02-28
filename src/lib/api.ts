import { API_ENDPOINT, PAGE_SIZE } from "../utils/constants";

export const fetchPosts = async (lastPostId: string | undefined) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}?limit=${PAGE_SIZE}&after=${lastPostId}`
    );
    const { data } = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("Function not implemented.");
  }
};
