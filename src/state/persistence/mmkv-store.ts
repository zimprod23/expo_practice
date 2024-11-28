import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

export const StorageService = {
  setItem<T>(key: string, value: T) {
    const json = JSON.stringify(value);
    storage.set(key, json);
  },
  getItem<T>(key: string): T | null {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  //   removeItem(key: string) {
  //     storage.delete(key);
  //   },
  removeItem(key: string) {
    storage.delete(key);
  },

  setJWTToken(token: string) {
    this.setItem(JWT_KEY, token);
  },

  getJWTToken(): string | null {
    return this.getItem<string>(JWT_KEY);
  },

  removeJWTToken() {
    this.removeItem(JWT_KEY);
  },
};

export const JWT_KEY = "jwt_token";
