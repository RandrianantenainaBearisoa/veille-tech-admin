import { Notify } from 'quasar';

// const $q = useQuasar();

const notif_types = {
  simple: {
    color: 'grey',
    icon: 'lightbulb',
  },
  info: {
    color: 'blue',
    icon: 'info',
  },
  confirmation: {
    color: 'green',
    icon: 'check_circle',
  },
  warning: {
    color: 'deep-orange',
    icon: 'warning',
  },
  error: {
    color: 'negative',
    icon: 'error',
  },
} as const;

type NotifType = keyof typeof notif_types;

function showNotif(notif_type: NotifType, message: string) {
  Notify.create({
    color: notif_types[notif_type].color,
    icon: notif_types[notif_type].icon,
    message,
    position: 'top',
    timeout: Math.random() * 5000 + 3000,
  });
}

function showNotifSimple(message: string) {
  showNotif('simple', message);
}
function showNotifInfo(message: string) {
  showNotif('info', message);
}
function showNotifConfirmation(message: string) {
  showNotif('confirmation', message);
}
function showNotifWarning(message: string) {
  showNotif('warning', message);
}
function showNotifError(message: string) {
  showNotif('error', message);
}

export { showNotifSimple, showNotifInfo, showNotifConfirmation, showNotifWarning, showNotifError };
