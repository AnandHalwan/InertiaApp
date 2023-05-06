import * as SecureStore from "expo-secure-store";
import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'


const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://bmipszhyybndlbialzbr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtaXBzemh5eWJuZGxiaWFsemJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3NDUyNzIsImV4cCI6MTk5ODMyMTI3Mn0.81DkdbOCagsLDSdt7q6XddSniC7jyU5VLlCZtDN9OIQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

