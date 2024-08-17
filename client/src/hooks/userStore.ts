import { create } from 'zustand';
import Cookies from 'js-cookie';
import axios from 'axios';

interface User {
  avatar?: string;
  email: string;
  full_name: string;
  created_at: string;
  id: number;
  is_admin: number;
  password: string;
  phone: string;
  updated_at: string;
  username: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: (token: string | undefined) => Promise<void>;
  fetchRefresh: (refreshToken: string | undefined) => Promise<string>;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  fetchUser: async (token) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_AUTH}/me`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.status === 200) {
        set({ user: response.data.user });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },

  fetchRefresh: async (refreshToken) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_AUTH}/refresh`,
        {},
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${refreshToken}` },
        }
      );

      if (response.data.status === 200) {
        const newToken = response.data.data;
        const inOneHour = new Date(new Date().getTime() + 10 * 60 * 1000);
        Cookies.set('token', newToken, { expires: inOneHour });
        return newToken;
      } else {
        throw new Error('Unable to refresh token');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  },
}));

export default useUserStore;