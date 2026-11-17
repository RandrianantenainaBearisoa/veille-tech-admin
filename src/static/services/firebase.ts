// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, isSupported, type Messaging } from 'firebase/messaging';
import { Capacitor } from '@capacitor/core';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID,
} from '../constants';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(FIREBASE_APIKEY ?? ''),
  authDomain: String(FIREBASE_AUTHDOMAIN ?? ''),
  projectId: String(FIREBASE_PROJECTID ?? ''),
  storageBucket: String(FIREBASE_STORAGEBUCKET ?? ''),
  messagingSenderId: String(FIREBASE_MESSAGINGSENDERID ?? ''),
  appId: String(FIREBASE_APPID ?? ''),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export async function getWebMessaging(): Promise<Messaging | null> {
  if (Capacitor.isNativePlatform()) {
    return null;
  }
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
}
