'use client';

import { useEffect } from 'react';

export const Comp = ({}) => {
  const COLLABORA_ORIGIN = 'https://collabora.acmi.direct';

  useEffect(() => {
    let loaded = false;
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== COLLABORA_ORIGIN) return;

      // Структура сообщений зависит от версии Collabora.
      // Часто встречаются поля вроде MessageId/MsgId/Type/Status.
      const msg = e.data;

      console.log('Collabora message', msg);

      // Примеры (псевдонимы — проверьте в вашей версии API):
      if (msg?.MessageId === 'App_Loaded' || msg?.Type === 'loaded') {
        loaded = true;
        // ...убрать лоадер, показать редактор
      }

      if (msg?.MessageId === 'Error' || msg?.Type === 'error') {
        // тут ваш обработчик: показать свою страницу/редирект
        // например: navigate('/wopi-error?code=' + (msg?.Code ?? 'unknown'));
      }
    };

    window.addEventListener('message', onMsg);
    const t = setTimeout(() => {
      if (!loaded) {
        // таймаут «не дождались ready» — считаем, что 4xx/сетевая/токен
        // показываем свой экран
        // navigate('/wopi-error?timeout=1');
      }
    }, 1500);

    return () => {
      window.removeEventListener('message', onMsg);
      clearTimeout(t);
    };
  }, []);
  return null;
};
