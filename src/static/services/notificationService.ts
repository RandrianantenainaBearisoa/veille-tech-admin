import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { getToken, onMessage } from 'firebase/messaging';
import { getWebMessaging } from './firebase';

export async function initNotifications() {
  if (Capacitor.isNativePlatform()) {
    // ==========================================
    // BRANCHE 1 : MOBILE NATIF (ANDROID / iOS)
    // ==========================================
    try {
      // 1. Demander la permission à Android
      let permStatus = await PushNotifications.checkPermissions();
      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        console.warn('Permission Push refusée sur mobile.');
        return;
      }

      // 2. Écouter la réception du Token FCM natif
      await PushNotifications.addListener('registration', (token) => {
        console.log('✅ TOKEN FCM ANDROID :', token.value);
        // C'est ce token.value que vous copierez pour tester depuis la console Firebase
      });

      // 3. Écouter les erreurs éventuelles d'enregistrement
      await PushNotifications.addListener('registrationError', (err) => {
        console.error('❌ Erreur registration Android :', err.error);
      });

      // 4. Écouter les notifications reçues quand l'app est ouverte (premier plan)
      await PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log('📩 NOTIF REÇUE (App ouverte) :', notification);
      });

      // 5. Écouter le clic sur une notification (quand l'app était en arrière-plan/fermée)
      await PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
        console.log('👆 CLIC SUR NOTIF :', action.notification);
      });

      // 6. Lancer l'enregistrement auprès de Firebase
      await PushNotifications.register();
    } catch (err) {
      console.error('❌ Erreur globale Push Android :', err);
    }
  } else {
    // ==========================================
    // BRANCHE 2 : NAVIGATEUR WEB (Votre code qui marche déjà)
    // ==========================================
    try {
      const messaging = await getWebMessaging();
      if (!messaging) return null;
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') return;

      const token = await getToken(messaging, {
        vapidKey: import.meta.env.QCLI_FIREBASE_VAPID_KEY, // Adaptez le préfixe si besoin (VITE_ ou QCLI_)
      });
      console.log('✅ TOKEN FCM WEB :', token);

      onMessage(messaging, (payload) => {
        console.log('📩 MESSAGE WEB REÇU :', payload);
      });
    } catch (err) {
      console.error('❌ Erreur Push Web :', err);
    }
  }
}
