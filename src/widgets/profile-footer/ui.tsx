import { FC } from "react";

export const ProfileFooter: FC = () => {
  return (
    <div className="mt-8 flex flex-col gap-6 text-sm text-gray-700">
      <section>
        <p className="leading-relaxed">
          Я профессиональный скуф, обожаю сидеть дома, страдать, 
          слушать грустный хип-хоп и иногда выбираться на игрумы.
        </p>
        <p className="text-blue-500 mt-2 break-all">@ribakit3</p>
      </section>

      <section className="bg-white shadow rounded-xl divide-y divide-gray-200 overflow-hidden">
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">История встреч</button>
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Мои подписки</button>
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Закладки</button>
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Чёрный список</button>
      </section>

      <section className="bg-white shadow rounded-xl divide-y divide-gray-200 overflow-hidden">
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Правила и гарантии</button>
        <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Инструкция</button>
      </section>

      <section className="bg-white shadow rounded-xl overflow-hidden">
        <button className="w-full text-left px-4 py-3 text-red-600 font-medium hover:bg-gray-50">
          Выйти из профиля
        </button>
      </section>

      <section className="text-center text-gray-400 text-xs mt-4">
        <p>igroom 2025</p>
        <p className="mt-1">v0.1.0</p>
      </section>
    </div>
  );
};