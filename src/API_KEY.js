const DEFAULT_API_KEY = "bbd3b5eea3c83c37e9305ab9b7d8d2f5";
export const API_KEY = {
  value: DEFAULT_API_KEY,
  set: (apiKey) => {
    API_KEY.value = apiKey;
  },
};
