// Grammar for the banker, by level
BF.data.grammar = [
  {
    l: 'A1', title: '«Vous» — завжди на «ви»',
    text: 'З клієнтом у банку завжди говорять на «vous», навіть з молодими людьми. Звертання: Madame, Monsieur (без прізвища або з прізвищем). Ім\'я без «Madame/Monsieur» — тільки якщо клієнт сам запропонував.',
    ex: [["Vous avez une pièce d'identité ?", "У вас є документ?"], ["Bonjour Monsieur Petit.", "Добрий день, пане Петі."], ["Vous voulez un compte courant ?", "Ви хочете поточний рахунок?"]]
  },
  {
    l: 'A1', title: 'Рід і артиклі: le / la / l\' / les',
    text: 'Кожен іменник має рід. Вчіть слова одразу з артиклем: le compte (ч.), la carte (ж.). Перед голосною — l\': l\'agence (ж.), l\'argent (ч.). Неозначені: un compte, une carte, des frais.',
    ex: [["le compte, la carte, l'agence, les frais", "рахунок, картка, відділення, комісії"], ["un prêt, une assurance", "кредит, страховка"], ["Je voudrais ouvrir un compte.", "Я хотів би відкрити рахунок."]]
  },
  {
    l: 'A1', title: 'Головні дієслова: être, avoir, vouloir, pouvoir',
    text: 'Je suis / vous êtes; j\'ai / vous avez; je veux / vous voulez; je peux / vous pouvez. Цього вистачає для більшості простих діалогів.',
    ex: [["Je suis votre conseiller.", "Я ваш консультант."], ["Vous avez un rendez-vous ?", "У вас призначено зустріч?"], ["Je peux bloquer votre carte.", "Я можу заблокувати вашу картку."], ["Vous voulez retirer combien ?", "Скільки ви хочете зняти?"]]
  },
  {
    l: 'A1', title: 'Числа та суми',
    text: 'Тисячі відокремлюються пробілом, копійки — комою: 1 250,50 € = «mille deux cent cinquante euros cinquante». Особливі числа: 70 soixante-dix, 80 quatre-vingts, 90 quatre-vingt-dix. «Mille» не змінюється: deux mille euros.',
    ex: [["Le solde est de 820 €.", "Залишок — 820 €."], ["quatre-vingt-dix euros", "дев'яносто євро"], ["deux mille cinq cents euros", "дві тисячі п'ятсот євро"], ["cinq pour cent", "п'ять відсотків"]]
  },
  {
    l: 'A1', title: 'Як поставити запитання',
    text: 'Три способи: інтонація (Vous avez une carte ?), «Est-ce que» (Est-ce que vous avez une carte ?), інверсія — найввічливіша (Avez-vous une carte ?). Питальні слова: combien (скільки), quand (коли), quel/quelle (який), pourquoi (чому).',
    ex: [["Combien voulez-vous emprunter ?", "Скільки ви хочете позичити?"], ["Quand avez-vous perdu votre carte ?", "Коли ви загубили картку?"], ["Quelle est votre date de naissance ?", "Яка ваша дата народження?"]]
  },
  {
    l: 'A2', title: 'Passé composé — що сталося',
    text: 'Минулий час для подій: avoir/être + дієприкметник. Клієнти постійно розповідають, що сталося: j\'ai perdu, j\'ai reçu, on m\'a volé, je suis allé(e).',
    ex: [["J'ai perdu ma carte.", "Я загубив картку."], ["Vous avez reçu le code ?", "Ви отримали код?"], ["Le virement est arrivé hier.", "Переказ надійшов учора."], ["Quelqu'un a utilisé ma carte.", "Хтось скористався моєю карткою."]]
  },
  {
    l: 'A2', title: 'Futur proche — що я зараз зроблю',
    text: 'aller + інфінітив: найпростіший спосіб пообіцяти клієнту дію. Je vais + дієслово.',
    ex: [["Je vais bloquer votre carte.", "Я заблокую вашу картку."], ["Vous allez recevoir un SMS.", "Ви отримаєте SMS."], ["Nous allons étudier votre dossier.", "Ми розглянемо вашу заявку."]]
  },
  {
    l: 'A2', title: 'Conditionnel ввічливості',
    text: 'Je voudrais, pourriez-vous, j\'aimerais, ce serait — роблять мову м\'якою. У банку це стандарт.',
    ex: [["Pourriez-vous signer ici ?", "Чи не могли б ви підписати тут?"], ["Je voudrais vous proposer une autre carte.", "Я хотів би запропонувати вам іншу картку."], ["La mensualité serait d'environ 300 €.", "Щомісячний платіж становив би близько 300 €."]]
  },
  {
    l: 'A2', title: 'Займенники: le, la, les, lui, vous',
    text: 'Щоб не повторювати слово: Je bloque la carte → Je la bloque. Je vous envoie le RIB → Je vous l\'envoie. Займенник стоїть перед дієсловом.',
    ex: [["Votre RIB ? Je vous l'imprime.", "Ваш RIB? Я вам його роздрукую."], ["La carte ? Je la bloque tout de suite.", "Картку? Я її одразу блокую."], ["Je vous rappelle demain.", "Я передзвоню вам завтра."]]
  },
  {
    l: 'A2', title: 'Ввічливий наказ: impératif і «veuillez»',
    text: 'Signez ici, s\'il vous plaît. У листах та офіційно: Veuillez + інфінітив (Veuillez trouver ci-joint… — Додаємо…).',
    ex: [["Signez ici, s'il vous plaît.", "Підпишіть тут, будь ласка."], ["Ne donnez jamais votre code.", "Ніколи не повідомляйте свій код."], ["Veuillez trouver ci-joint votre offre de prêt.", "Додаємо вашу кредитну пропозицію."]]
  },
  {
    l: 'B1', title: 'Subjonctif після «il faut que», «pour que», «avant que»',
    text: 'Для вимог та умов: il faut que vous fournissiez…, pour que nous puissions…, avant que vous preniez votre décision… Часто вживаються: soit, ait, puisse, fasse, fournisse.',
    ex: [["Il faut que vous fournissiez un justificatif.", "Потрібно, щоб ви надали довідку."], ["Pour que nous puissions étudier le dossier, envoyez-nous vos bulletins.", "Щоб ми могли розглянути заявку, надішліть розрахункові листки."], ["Je comprends que la situation soit frustrante.", "Я розумію, що ситуація неприємна."]]
  },
  {
    l: 'B1', title: 'Гіпотеза: si + présent / imparfait',
    text: 'Реальна умова: Si vous remboursez par anticipation, vous paierez moins d\'intérêts. Гіпотетична: Si vous aviez un apport, nous pourrions accepter. Минула нереальна: Si vous m\'aviez prévenu, j\'aurais…',
    ex: [["Si vous réduisez la durée, vous paierez moins d'intérêts.", "Якщо скоротите строк, сплатите менше відсотків."], ["Si vous aviez un co-emprunteur, ce serait possible.", "Якби у вас був співпозичальник, це було б можливо."], ["Si vous m'aviez prévenu, j'aurais commandé les fonds.", "Якби ви мене попередили, я б замовив готівку."]]
  },
  {
    l: 'B1', title: 'Сполучники для аргументації',
    text: 'Cependant / toutefois (проте), en revanche (натомість), par conséquent (отже), afin de (щоб), compte tenu de (з огляду на), sous réserve de (за умови).',
    ex: [["Le taux est plus élevé ; en revanche, les frais sont plus bas.", "Ставка вища; натомість комісії нижчі."], ["Compte tenu de votre ancienneté, nous remboursons les frais.", "З огляду на ваш стаж ми відшкодовуємо комісії."], ["Sous réserve d'acceptation de votre dossier.", "За умови схвалення вашої заявки."]]
  },
  {
    l: 'B1', title: 'Пасивний стан — офіційні повідомлення',
    text: 'être + дієприкметник: Votre demande a été acceptée. Le prélèvement a été rejeté. Банк часто говорить пасивом, щоб звучати нейтрально.',
    ex: [["Votre demande a été acceptée.", "Вашу заявку схвалено."], ["Le prélèvement a été rejeté faute de provision.", "Автосписання відхилено через брак коштів."], ["Les fonds seront crédités demain.", "Кошти буде зараховано завтра."]]
  },
  {
    l: 'B1', title: 'Непряма мова — передати слова клієнта',
    text: 'Для нотаток, листів і передачі справи колегам: Le client dit qu\'il n\'a pas reçu sa carte. Il m\'a demandé si… Він сказав, що…',
    ex: [["Le client affirme qu'il n'a jamais donné son code.", "Клієнт стверджує, що ніколи не повідомляв свій код."], ["Elle m'a demandé si le virement était arrivé.", "Вона запитала мене, чи надійшов переказ."], ["Il dit qu'il veut clôturer son compte.", "Він каже, що хоче закрити рахунок."]]
  },
  {
    l: 'B1', title: 'Gérondif — «en + -ant»',
    text: 'Показує спосіб або одночасність: En signant ce contrat, vous acceptez les conditions. En remboursant par anticipation, vous économisez.',
    ex: [["En signant ce document, vous acceptez les conditions générales.", "Підписуючи цей документ, ви приймаєте загальні умови."], ["En activant les alertes SMS, vous évitez le découvert.", "Увімкнувши SMS-сповіщення, ви уникнете овердрафту."]]
  }
];
