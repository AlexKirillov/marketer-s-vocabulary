"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [ 
        {
          name: "Admin",
          password: "Admin",
          email: "Admin@mail.ru",
          role: "admin",
          roomId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adm123in",
          password: "Admi441n",
          email: "dead@mail.ru",
          role: "user",
          roomId: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aron",
          password: "adwad",
          email: "aawd12@mail.ru",
          role: "user",
          roomId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tolo",
          password: "1234",
          email: "aldjn@mail.ru",
          role: "manager",
          roomId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          title: "Аида (AIDA)",
          discription: `AIDA (аида) - классическая схема скрытого управления при презентации товара в маркетинге, в рекламе, при продажах. AIDA (аида) - расшифровывается как Attention, Interest, Desire, Action (внимание, интерес, желание, действие).

        Схема управления покупателем, потребителем, зрителем AIDA (аида) наиболее полно описывает механизм совершения покупки, успешного рекламного воздействия.
        
        Внимание к рекламе, товару, интерес к ним вызывает желание ознакомиться с ними, владения товаром — это отражение эмоционального состояния клиента, а действие — как итог — последовательность действий двух участников процесса: продавца и покупателя. Если не будет помощи от продавца, покупатель, имея желание, не всегда сделает действие по покупке. Ему нужно помочь. 
        
        AIDA (аида) акцентирует внимание на предварительном сборе информации, позволяющем с успехом воздействовать на покупателя, потребителя. Важнейшим элементом схемы является аттракция, создающая предпосылки для доверия потребителя, являющаяся ключевым элементом рекламы.`,
          applying: `Расшифровка AIDA (аида):
          
          A ( attention ): привлеките внимание клиента. Его необходимо настроить на то, что теперь Вы говорите, а он слушает.
I ( interest ): вызовите интерес к товару. Расскажите клиенту, почему Ваше предложение может быть интересно именно для него (Вы ведь уже знаете, что он за человек).

D ( desire ): возбудите у клиента желание владеть товаром. Причем, вызывая интерес, делайте упор на логику, а здесь — играйте на эмоциях покупателя. Создавайте привлекательные образы, которые не оставят его равнодушным. Рассказывая о товаре, займите позицию, как будто товар уже куплен и покупатель с его помощью решает свои проблемы: продается не автомобиль, а престиж и безопасность, не пылесос, а чистота и здоровье, не мебель, а уют и комфорт, не фирменные часы, а имидж.

A ( action ): побудите потенциального покупателя к действию. Иными словами, дайте ему понять, что все это время рассказывали ему о товаре не просто так, а для того. Чтобы клиент его приобрел.

По схеме скрытого управления AIDA может строить систему убеждения, позиционирования товара, действовать с целью убеждения маркетинговый специалист, сбытовой менеджер и PR менеджер. 

AIDA была впервые предложена в 1896 г. Э. Левисом.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BANT (Б.А.Н.Т)",
          discription: `Модель BANT основана на четырех критериях, позволяющих оценить перспективы сотрудничества с клиентом: Budget – бюджет, Authority – авторитетность, Need – потребность в продукте или услуге, Timeline – сроки совершения возможной сделки.

          Критерии для оценки перспективы сотрудничества с клиентом. Для понимая перспектив сотрудничества необходимо четко ответить себе на 4 следующих вопроса:
          
          Критерий Budget – насколько мы и клиент понимаем финансовые возможности потенциального клиента? 
          Критерий Authority – насколько клиент способен самостоятельно принимать решения и отвечать за принятые решения?
          Критерий Need – насколько клиент практически заинтересован в продукции или услуге? 
          Критерий Timeline – насколько клиент ограничен временем для ведения переговоров и принятия решения. 
          
          Цель BANT – критерии позволяют ориентироваться в клиентской среде, являются основой стратегии работы компании с потенциальными покупателями.`,
          applying: `Формула BANT применяется при расчете балльного рейтинга лидов (Lead Scoring): чем больше условных баллов, тем выше степень «готовности к покупке». На следующем этапе все клиенты, в зависимости от набранного количества баллов – от готовности к покупке, группируются на три группы: «A,B,C». В зависимости от попадания в ту или иную группу к клиентам применяют различные маркетинговые  инструменты: от дополнительного информирования отделом маркетинга и до формулирования конкретного предложения отделом продаж.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Законы Гессена (законы Госсена)",
          discription: `Законы Гессена (законы Госсена) базируются на положении того, что главным мотивом, определяющим поведение человека, является стремление к получению максимума полезности. Первый и второй законы Госсена легли в основу всей современной микроэкономической теории. Работа Гессена в 1854 году открыла новое направление экономической мысли.`,
          applying: `Первый закон Гессена (закон Госсена) – это маржиналистский закон, согласно которому в ходеиндивидуального потребления определенного блага полезность каждой его последующей единицы снижается и при насыщении (в предельном случае) достигает нуля, т.е. по мере того как потребитель увеличивает потребление товара или услуги, предельная полезность каждой дополнительной единицы товара или услуги сокращается. 

          Смысл первого закона Госсена выражается в двух положениях: 
          
          в одном непрерывном акте потребления полезность последующей единицы потребляемого блага убывает; 
          при повторном акте потребления полезность каждой единицы блага уменьшается по сравнению с ее полезностью при первоначальном потреблении.
          Второй закон Гессена (закон Госсена) – это маржиналистский закон, согласно которому лицо максимизирует полезность, когда распределяет имеющиеся у него денежные средства между различными благами так, что достигает равного удовлетворения от последней единицы денег, потраченных на каждый из товаров.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Сбытовой канал (канал сбыта)",
          discription: `Сбытовой канал (канал сбыта) – система распределения товаров, часть маркетинговго канала, состоящая из фирм, участвующих в покупке, перемещении и продаже товаров по мере их продвижения от изготовителя к потребителю (продвижение товара - обязанность производителя). Сбытовой канал включает производителя, потребителя и посредников в лице оптовых и розничных продавцов.`,
          applying: ` случае когда между потребителем и производителем отсутствуют посредники, такой сбытовой канал называется каналом нулевого уровня. Если между производителем и покупателем существует один посредник, например, магазин, то такой сбытовой канал именуется каналом - одноуровневым. В случае, когда услуги по распределению товаров производителя между покупателями оказывают оптовые компании и розничные продавцы, такой канал именуется - двухуровневым каналом. Вместе с тем зачастую используется сразу несколько вариантов сбыта, например через одноуровневый и двухуровневый каналы.

          Посредники, не являющиеся ни продавцами, ни агентами по продаже товаров, например, обеспечивающие лишь транспортировку, учет товара, не являются частью сбытового канала.
          
          Сбытовой канал, как правило рассматривается в отрыве от остальных игроков маркетингового канала только в случае анализа экономической эффективности сбытовой деятельности производителя. Анализ же экономической эффективности деятельности производителя не возможен без анализа остальных потоков маркетингового канала (см. определение маркетингового канала).`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          id_user: 2,
          id_card: 3,
          room_number: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 2,
          id_card: 4,
          room_number: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 3,
          id_card: 4,
          room_number: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 4,
          id_card: 2,
          room_number: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 3,
          id_card: 3,
          room_number: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_user: 2,
          id_card: 1,
          room_number: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Links",
      [
        {
          id_card: 1,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_card: 2,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_card: 3,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_card: 4,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_card: 3,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_card: 1,
          link: `https://www.marketch.ru/`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users');
     await queryInterface.bulkDelete('Cards');
     await queryInterface.bulkDelete('Rooms');
     await queryInterface.bulkDelete('Links');
  },
};
