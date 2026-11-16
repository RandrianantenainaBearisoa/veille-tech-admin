import { Dialog } from 'quasar';

const useConfirm = () => {
  const $q = Dialog;

  return function confirm(message: string) {
    return new Promise((resolve) => {
      $q.create({
        title: 'Confirmation',
        message,
        cancel: true,
        persistent: true,
      })
        .onOk(() => resolve(true))
        .onCancel(() => resolve(false));
    });
  };
};

export { useConfirm };
