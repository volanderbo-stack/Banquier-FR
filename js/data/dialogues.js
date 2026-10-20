// Client ↔ bank employee dialogues. Lines: [speaker ('B' = banker, 'C' = client), French, Ukrainian]
BF.data.dialogues = [
  // ================= ACCOUNTS =================
  {
    id: 'accounts-A1', t: 'accounts', l: 'A1', b: 'julien', c: 'kovalenko',
    title: 'Ouvrir un compte', ua: 'Відкриття рахунку',
    ctx: 'Клієнтка нещодавно переїхала до Ліона й хоче відкрити поточний рахунок і картку.',
    lines: [
      ['B', "Bonjour Madame. Comment puis-je vous aider ?", "Добрий день, пані. Чим можу допомогти?"],
      ['C', "Bonjour. Je voudrais ouvrir un compte, s'il vous plaît.", "Добрий день. Я хотіла б відкрити рахунок, будь ласка."],
      ['B', "Très bien. Vous avez une pièce d'identité ?", "Дуже добре. У вас є документ, що посвідчує особу?"],
      ['C', "Oui, voici mon passeport.", "Так, ось мій паспорт."],
      ['B', "Merci. Vous habitez à Lyon ?", "Дякую. Ви живете в Ліоні?"],
      ['C', "Oui, j'habite à Lyon depuis trois mois.", "Так, я живу в Ліоні вже три місяці."],
      ['B', "Parfait. Vous voulez un compte courant ?", "Чудово. Ви хочете поточний рахунок?"],
      ['C', "Oui, un compte courant et une carte bancaire.", "Так, поточний рахунок і банківську картку."],
      ['B', "D'accord. Signez ici, s'il vous plaît.", "Гаразд. Підпишіть тут, будь ласка."],
      ['C', "Voilà. Merci beaucoup !", "Ось. Щиро дякую!"],
      ['B', "Merci à vous. Bonne journée, Madame.", "Вам дякую. Гарного дня, пані."]
    ]
  },
  {
    id: 'accounts-A2', t: 'accounts', l: 'A2', b: 'camille', c: 'haddad',
    title: 'Le RIB et le loyer', ua: 'RIB і оплата оренди',
    ctx: 'Клієнту потрібен RIB для роботодавця, а також він хоче налаштувати оплату оренди.',
    lines: [
      ['C', "Bonjour, j'ai ouvert un compte la semaine dernière. Mon employeur me demande un RIB.", "Добрий день, я відкрив рахунок минулого тижня. Роботодавець просить у мене RIB."],
      ['B', "Bonjour Monsieur Haddad. Pas de problème, je vais vous l'imprimer. Vous pouvez aussi le télécharger dans votre espace client.", "Добрий день, пане Хаддад. Без проблем, я вам його роздрукую. Ви також можете завантажити його в особистому кабінеті."],
      ['C', "Ah bon ? Je ne savais pas. Et pour payer mon loyer, comment je fais ?", "Справді? Я не знав. А як мені платити за оренду?"],
      ['B', "Vous pouvez mettre en place un virement permanent ou un prélèvement automatique.", "Ви можете налаштувати регулярний переказ або автоматичне списання."],
      ['C', "Quelle est la différence ?", "Яка різниця?"],
      ['B', "Avec un virement permanent, c'est vous qui donnez l'ordre à la banque. Avec un prélèvement, c'est votre propriétaire qui demande l'argent, avec votre autorisation.", "З регулярним переказом розпорядження банку даєте ви. З автосписанням гроші запитує ваш орендодавець — з вашого дозволу."],
      ['C', "Je préfère le virement permanent. Le cinq de chaque mois, c'est possible ?", "Я віддаю перевагу регулярному переказу. П'ятого числа щомісяця — це можливо?"],
      ['B', "Bien sûr. Quel est le montant du loyer ?", "Звісно. Яка сума оренди?"],
      ['C', "Six cent cinquante euros.", "Шістсот п'ятдесят євро."],
      ['B', "C'est noté. Le premier virement partira le cinq novembre. Voici votre RIB.", "Записала. Перший переказ буде відправлено п'ятого листопада. Ось ваш RIB."],
      ['C', "Merci beaucoup, c'est très clair.", "Щиро дякую, усе дуже зрозуміло."]
    ]
  },
  {
    id: 'accounts-B1', t: 'accounts', l: 'B1', b: 'thomas', c: 'garnier',
    title: 'Agios et commission d\'intervention', ua: 'Агіо та комісія за перевищення овердрафту',
    ctx: 'Клієнтка незадоволена списаннями у виписці. Консультант пояснює причину, робить комерційну поступку і пропонує рішення.',
    lines: [
      ['C', "Bonjour Monsieur. Je viens de recevoir mon relevé et je vois des agios et une commission d'intervention. Je ne comprends pas pourquoi.", "Добрий день. Я щойно отримала виписку й бачу агіо та комісію за обробку. Не розумію, чому."],
      ['B', "Je comprends votre surprise, Madame Garnier. Permettez-moi de vérifier votre compte… Effectivement, votre compte a été à découvert pendant douze jours le mois dernier.", "Розумію ваше здивування, пані Гарньє. Дозвольте перевірити ваш рахунок… Справді, минулого місяця ваш рахунок був в овердрафті дванадцять днів."],
      ['C', "Oui, mais j'ai un découvert autorisé de cinq cents euros !", "Так, але в мене дозволений овердрафт п'ятсот євро!"],
      ['B', "Tout à fait. Cependant, votre solde est descendu jusqu'à moins six cent quarante euros, c'est-à-dire au-delà du montant autorisé. C'est ce dépassement qui a déclenché la commission d'intervention.", "Саме так. Проте ваш залишок опустився до мінус шестисот сорока євро, тобто понад дозволену суму. Саме це перевищення спричинило комісію."],
      ['C', "Et les agios, alors ?", "А агіо тоді за що?"],
      ['B', "Les agios sont les intérêts calculés sur le montant et la durée du découvert, même lorsqu'il est autorisé. Ils figurent dans la convention de compte que vous avez signée.", "Агіо — це відсотки, нараховані на суму й тривалість овердрафту, навіть дозволеного. Вони передбачені договором рахунку, який ви підписали."],
      ['C', "Je trouve ça excessif. C'est la première fois que ça m'arrive.", "Як на мене, це забагато. Таке зі мною вперше."],
      ['B', "Je l'entends. Compte tenu de votre ancienneté, je peux vous proposer le remboursement de la commission d'intervention, à titre de geste commercial. En revanche, les agios restent dus.", "Я вас чую. З огляду на ваш стаж клієнтки, я можу запропонувати відшкодування комісії як комерційну поступку. Натомість агіо залишаються до сплати."],
      ['C', "Bon… c'est déjà ça. Comment éviter ce problème à l'avenir ?", "Що ж… і то добре. Як уникнути цієї проблеми надалі?"],
      ['B', "Je vous propose deux solutions : activer une alerte SMS lorsque votre solde passe sous cent euros, ou étudier une augmentation de votre découvert autorisé, sous réserve d'acceptation.", "Пропоную два рішення: увімкнути SMS-сповіщення, коли залишок опускається нижче ста євро, або розглянути збільшення дозволеного овердрафту — за умови схвалення."],
      ['C', "L'alerte SMS me paraît suffisante. Merci pour votre explication.", "SMS-сповіщення, гадаю, буде достатньо. Дякую за пояснення."],
      ['B', "Avec plaisir. Je l'active tout de suite, et le remboursement apparaîtra sur votre compte d'ici quarante-huit heures.", "Із задоволенням. Я вмикаю його зараз, а відшкодування з'явиться на вашому рахунку протягом сорока восьми годин."]
    ]
  },

  // ================= CARDS =================
  {
    id: 'cards-A1', t: 'cards', l: 'A1', b: 'nadia', c: 'vasseur',
    title: 'J\'ai perdu ma carte', ua: 'Я загубив картку',
    ctx: 'Клієнт загубив картку. Консультантка блокує її та замовляє нову.',
    lines: [
      ['C', "Bonjour Madame. J'ai perdu ma carte bancaire !", "Добрий день, пані. Я загубив банківську картку!"],
      ['B', "Bonjour Monsieur. Ne vous inquiétez pas. Quand avez-vous perdu votre carte ?", "Добрий день. Не хвилюйтеся. Коли ви загубили картку?"],
      ['C', "Ce matin, je pense.", "Сьогодні зранку, здається."],
      ['B', "D'accord. Je vais bloquer la carte tout de suite. Vous avez une pièce d'identité ?", "Гаразд. Я одразу заблокую картку. У вас є документ, що посвідчує особу?"],
      ['C', "Oui, voici ma carte d'identité.", "Так, ось моя ID-картка."],
      ['B', "Merci. Voilà, votre carte est bloquée.", "Дякую. Ось, вашу картку заблоковано."],
      ['C', "Merci. Et j'ai une nouvelle carte quand ?", "Дякую. А коли я отримаю нову картку?"],
      ['B', "Dans cinq jours. Vous allez recevoir le code par courrier.", "Через п'ять днів. PIN-код ви отримаєте поштою."],
      ['C', "Parfait. Merci beaucoup.", "Чудово. Щиро дякую."],
      ['B', "Je vous en prie. Bonne journée !", "Будь ласка. Гарного дня!"]
    ]
  },
  {
    id: 'cards-A2', t: 'cards', l: 'A2', b: 'julien', c: 'mendes',
    title: 'Choisir une carte', ua: 'Вибір картки',
    ctx: 'Студентка хоче картку, яку приймають онлайн-магазини. Консультант пояснює різницю між типами карток.',
    lines: [
      ['C', "Bonjour, je voudrais changer de carte. La mienne ne marche pas bien pour les paiements en ligne.", "Добрий день, я хотіла б змінити картку. Моя погано працює для онлайн-платежів."],
      ['B', "Bonjour. Quelle carte avez-vous actuellement ?", "Добрий день. Яка у вас зараз картка?"],
      ['C', "Une carte à autorisation systématique, je crois.", "Картка з систематичною авторизацією, здається."],
      ['B', "Oui, c'est une carte pour les petits budgets : le solde est vérifié à chaque paiement. Certains sites ne l'acceptent pas. Je peux vous proposer une carte à débit immédiat.", "Так, це картка для невеликих бюджетів: залишок перевіряється при кожному платежі. Деякі сайти її не приймають. Я можу запропонувати вам картку з негайним списанням."],
      ['C', "Débit immédiat, ça veut dire quoi exactement ?", "Негайне списання — що це означає?"],
      ['B', "Chaque paiement est débité de votre compte au moment de l'opération, ou un ou deux jours après. Avec une carte à débit différé, tous les paiements du mois sont débités en une seule fois, à la fin du mois.", "Кожен платіж списується з рахунку в момент операції або через день-два. З карткою з відкладеним списанням усі платежі місяця списуються одним разом наприкінці місяця."],
      ['C', "Je préfère le débit immédiat, c'est plus simple pour gérer mon budget. Elle coûte combien ?", "Я віддаю перевагу негайному списанню — так простіше контролювати бюджет. Скільки вона коштує?"],
      ['B', "La cotisation annuelle est de quarante-cinq euros, mais pour les étudiants, elle est gratuite la première année.", "Річна плата — сорок п'ять євро, але для студентів перший рік безкоштовний."],
      ['C', "Super ! Et pour les achats sur internet, c'est sécurisé ?", "Супер! А покупки в інтернеті — це безпечно?"],
      ['B', "Oui. Pour chaque achat en ligne, vous allez confirmer le paiement dans votre application bancaire.", "Так. Кожну онлайн-покупку ви підтверджуватимете в банківському застосунку."],
      ['C', "Parfait, je la prends.", "Чудово, беру її."]
    ]
  },
  {
    id: 'cards-B1', t: 'cards', l: 'B1', b: 'camille', c: 'robin',
    title: 'Des paiements frauduleux', ua: 'Шахрайські платежі',
    ctx: 'Клієнт виявив платежі, яких не робив. Консультантка блокує картку, пояснює правила відшкодування й поняття «груба недбалість».',
    lines: [
      ['C', "Bonjour Madame. J'ai remarqué trois paiements sur mon compte que je n'ai jamais faits. Plus de huit cents euros au total !", "Добрий день. Я помітив на рахунку три платежі, яких ніколи не робив. Загалом понад вісімсот євро!"],
      ['B', "Je comprends votre inquiétude, Monsieur Robin. Avez-vous toujours votre carte en votre possession ?", "Розумію ваше занепокоєння, пане Робен. Картка досі у вас?"],
      ['C', "Oui, elle est dans mon portefeuille.", "Так, вона в моєму гаманці."],
      ['B', "Il s'agit donc probablement d'un piratage des données de la carte. La première chose à faire, c'est de faire opposition. Je m'en occupe immédiatement.", "Отже, ймовірно, йдеться про викрадення даних картки. Перше, що треба зробити, — заблокувати її. Я займуся цим негайно."],
      ['C', "Merci. Et mon argent, je vais le récupérer ?", "Дякую. А мої гроші мені повернуть?"],
      ['B', "Pour une opération que vous n'avez pas autorisée, la banque doit en principe vous rembourser rapidement, au plus tard à la fin du premier jour ouvrable suivant votre signalement.", "За операцію, яку ви не авторизували, банк у принципі має швидко вам відшкодувати — не пізніше кінця першого робочого дня після вашого повідомлення."],
      ['C', "« En principe » ? Qu'est-ce que ça veut dire ?", "«У принципі»? Що це означає?"],
      ['B', "Le remboursement peut être refusé en cas de négligence grave, par exemple si vous avez communiqué vos codes à quelqu'un. Avez-vous reçu un appel ou un SMS suspect récemment ?", "У відшкодуванні можуть відмовити в разі грубої недбалості — наприклад, якщо ви комусь повідомили свої коди. Чи отримували ви нещодавно підозрілий дзвінок або SMS?"],
      ['C', "Non, rien du tout. Je n'ai jamais donné mes codes.", "Ні, нічого. Я ніколи не повідомляв своїх кодів."],
      ['B', "Très bien. Je vais donc enregistrer votre contestation. Il faudra signer ce formulaire, où vous déclarez ne pas avoir effectué ces opérations.", "Дуже добре. Тоді я зареєструю ваше оскарження. Потрібно буде підписати цей бланк, де ви заявляєте, що не здійснювали цих операцій."],
      ['C', "D'accord. Et je vais recevoir une nouvelle carte ?", "Гаразд. І я отримаю нову картку?"],
      ['B', "Oui, sous cinq jours ouvrés, avec un nouveau code. En attendant, vous pouvez retirer des espèces au guichet avec votre pièce d'identité.", "Так, протягом п'яти робочих днів, з новим кодом. А поки що ви можете знімати готівку в касі з документом."],
      ['C', "Merci de votre réactivité.", "Дякую за оперативність."]
    ]
  },

  // ================= CREDITS =================
  {
    id: 'credits-A1', t: 'credits', l: 'A1', b: 'thomas', c: 'morel',
    title: 'Un prêt pour une voiture', ua: 'Кредит на автомобіль',
    ctx: 'Клієнтка хоче взяти кредит на купівлю автомобіля.',
    lines: [
      ['C', "Bonjour. Je voudrais acheter une voiture. Je cherche un prêt.", "Добрий день. Я хочу купити автомобіль. Шукаю кредит."],
      ['B', "Bonjour Madame. Bien sûr. Combien voulez-vous emprunter ?", "Добрий день, пані. Звісно. Скільки ви хочете позичити?"],
      ['C', "Dix mille euros.", "Десять тисяч євро."],
      ['B', "D'accord. Sur combien de temps ?", "Гаразд. На який строк?"],
      ['C', "Sur quatre ans, c'est possible ?", "На чотири роки — це можливо?"],
      ['B', "Oui. Le taux est de cinq pour cent. La mensualité est d'environ deux cent trente euros.", "Так. Ставка — п'ять відсотків. Щомісячний платіж — близько двохсот тридцяти євро."],
      ['C', "C'est bien. Qu'est-ce qu'il faut pour le dossier ?", "Добре. Що потрібно для заявки?"],
      ['B', "Une pièce d'identité, vos trois derniers bulletins de salaire et un justificatif de domicile.", "Документ, що посвідчує особу, три останні розрахункові листки й підтвердження адреси."],
      ['C', "Très bien. Je reviens demain avec les documents.", "Дуже добре. Я прийду завтра з документами."],
      ['B', "Parfait. À demain, Madame Morel.", "Чудово. До завтра, пані Морель."]
    ]
  },
  {
    id: 'credits-A2', t: 'credits', l: 'A2', b: 'nadia', c: 'lemaire',
    title: 'Simulation de prêt immobilier', ua: 'Розрахунок іпотечного кредиту',
    ctx: 'Подружжя планує купити квартиру. Консультантка робить попередній розрахунок і пояснює правило 35 %.',
    lines: [
      ['C', "Bonjour. Ma femme et moi, nous voulons acheter un appartement. Nous aimerions faire une simulation.", "Добрий день. Ми з дружиною хочемо купити квартиру. Хотіли б зробити розрахунок."],
      ['B', "Avec plaisir. Quel est le prix de l'appartement ?", "Із задоволенням. Яка ціна квартири?"],
      ['C', "Deux cent cinquante mille euros.", "Двісті п'ятдесят тисяч євро."],
      ['B', "Et vous avez un apport personnel ?", "А у вас є власний внесок?"],
      ['C', "Oui, nous avons trente mille euros d'économies.", "Так, у нас тридцять тисяч євро заощаджень."],
      ['B', "Très bien. Vous devez donc emprunter environ deux cent vingt mille euros, plus les frais de notaire. Sur quelle durée ?", "Дуже добре. Отже, вам треба позичити близько двохсот двадцяти тисяч євро плюс нотаріальні витрати. На який строк?"],
      ['C', "Vingt ans, je pense.", "Двадцять років, гадаю."],
      ['B', "Pour vingt ans, le taux fixe est actuellement de trois virgule deux pour cent. La mensualité serait d'environ mille deux cent quarante euros, sans l'assurance.", "На двадцять років фіксована ставка зараз — три цілих дві десятих відсотка. Щомісячний платіж становив би близько тисячі двохсот сорока євро без страховки."],
      ['C', "Et quels revenus faut-il avoir ?", "А які потрібні доходи?"],
      ['B', "Vos mensualités ne doivent pas dépasser trente-cinq pour cent de vos revenus, assurance comprise. Quels sont vos revenus mensuels nets ?", "Ваші щомісячні платежі не повинні перевищувати тридцяти п'яти відсотків доходу, включно зі страховкою. Який ваш чистий щомісячний дохід?"],
      ['C', "À nous deux, environ quatre mille deux cents euros.", "На двох — близько чотирьох тисяч двохсот євро."],
      ['B', "Alors c'est possible. Je vais préparer une simulation détaillée. Vous pouvez m'envoyer vos trois derniers bulletins de salaire et vos deux derniers avis d'imposition ?", "Тоді це можливо. Я підготую детальний розрахунок. Можете надіслати мені три останні розрахункові листки й два останні податкові повідомлення?"],
      ['C', "Oui, je vous les envoie ce soir par e-mail.", "Так, надішлю їх вам сьогодні ввечері електронною поштою."],
      ['B', "Parfait. Je vous rappelle la semaine prochaine.", "Чудово. Я передзвоню вам наступного тижня."]
    ]
  },
  {
    id: 'credits-B1', t: 'credits', l: 'B1', b: 'julien', c: 'caron',
    title: 'Refus de prêt et solutions', ua: 'Відмова в кредиті та альтернативи',
    ctx: 'Консультант має повідомити клієнтці про відмову через високе боргове навантаження й запропонувати шляхи вирішення.',
    lines: [
      ['B', "Madame Caron, j'ai étudié votre dossier en détail. Je préfère être transparent avec vous : en l'état, nous ne pouvons pas accepter votre demande.", "Пані Карон, я детально вивчив вашу заявку. Волію бути з вами відвертим: у теперішньому вигляді ми не можемо її схвалити."],
      ['C', "Ah… Pourquoi ? J'ai un bon salaire et un CDI.", "Ох… Чому? У мене хороша зарплата й безстроковий трудовий договір."],
      ['B', "Votre situation professionnelle est stable, c'est un point positif. Le problème, c'est votre taux d'endettement. Avec ce nouveau prêt et vos deux crédits à la consommation en cours, il atteindrait quarante-deux pour cent.", "Ваше професійне становище стабільне — це плюс. Проблема в борговому навантаженні. З цим новим кредитом і двома чинними споживчими кредитами воно сягнуло б сорока двох відсотків."],
      ['C', "Et la limite, c'est combien ?", "А яка межа?"],
      ['B', "Les recommandations du Haut Conseil de stabilité financière fixent la limite à trente-cinq pour cent, assurance comprise. Nous devons les respecter.", "Рекомендації Вищої ради фінансової стабільності встановлюють межу в тридцять п'ять відсотків, включно зі страховкою. Ми зобов'язані їх дотримуватися."],
      ['C', "Je comprends. Il n'y a vraiment aucune solution ?", "Розумію. Справді немає жодного рішення?"],
      ['B', "Si, plusieurs pistes sont envisageables. D'abord, si vous remboursiez par anticipation votre crédit auto, votre taux d'endettement baisserait à trente-trois pour cent.", "Є, можна розглянути кілька варіантів. По-перше, якби ви достроково погасили автокредит, ваше навантаження знизилося б до тридцяти трьох відсотків."],
      ['C', "Il me reste environ six mille euros à rembourser. J'ai cette somme sur mon livret.", "Мені залишилося погасити близько шести тисяч євро. Ця сума є в мене на ощадному рахунку."],
      ['B', "Dans ce cas, ce serait la solution la plus simple. Il faudra vérifier les éventuelles indemnités de remboursement anticipé, mais elles sont généralement faibles.", "У такому разі це було б найпростіше рішення. Треба буде перевірити можливу компенсацію за дострокове погашення, але зазвичай вона невелика."],
      ['C', "Et sinon ?", "А інакше?"],
      ['B', "Nous pourrions également allonger la durée du prêt, dans la limite de vingt-cinq ans, ou intégrer un co-emprunteur. Je vous conseille cependant de garder une épargne de précaution.", "Ми також могли б подовжити строк кредиту — у межах двадцяти п'яти років — або додати співпозичальника. Проте раджу вам зберегти резервний фонд."],
      ['C', "D'accord. Je vais rembourser le crédit auto et je reviens vers vous.", "Гаразд. Я погашу автокредит і повернуся до вас."],
      ['B', "Très bien. Dès que ce sera fait, je relancerai l'étude de votre dossier. Et n'oubliez pas : une fois l'offre de prêt reçue, vous disposerez d'un délai de réflexion de dix jours.", "Дуже добре. Щойно це буде зроблено, я відновлю розгляд вашої заявки. І не забувайте: після отримання кредитної пропозиції у вас буде десять днів на роздуми."]
    ]
  },

  // ================= INSURANCE =================
  {
    id: 'insurance-A1', t: 'insurance', l: 'A1', b: 'camille', c: 'petit',
    title: 'Assurer son appartement', ua: 'Страхування квартири',
    ctx: 'Клієнт орендує нову квартиру й питає, чи потрібна йому страховка.',
    lines: [
      ['C', "Bonjour. J'ai un nouvel appartement. Je dois avoir une assurance ?", "Добрий день. У мене нова квартира. Мені потрібна страховка?"],
      ['B', "Bonjour Monsieur. Oui, si vous êtes locataire, l'assurance habitation est obligatoire.", "Добрий день. Так, якщо ви орендар, страхування житла обов'язкове."],
      ['C', "Ah, d'accord. C'est cher ?", "А, зрозуміло. Це дорого?"],
      ['B', "Non. Pour un petit appartement, c'est environ quinze euros par mois.", "Ні. Для невеликої квартири — близько п'ятнадцяти євро на місяць."],
      ['C', "Et en cas de vol, je suis assuré ?", "А в разі крадіжки я застрахований?"],
      ['B', "Oui, le vol, l'incendie et le dégât des eaux sont inclus.", "Так, крадіжка, пожежа й затоплення включені."],
      ['C', "Très bien. Je voudrais une assurance, s'il vous plaît.", "Дуже добре. Я хотів би оформити страховку, будь ласка."],
      ['B', "Parfait. Vous avez votre contrat de location ?", "Чудово. У вас є договір оренди?"],
      ['C', "Oui, le voilà.", "Так, ось він."],
      ['B', "Merci. Je prépare votre contrat d'assurance.", "Дякую. Я готую ваш страховий договір."]
    ]
  },
  {
    id: 'insurance-A2', t: 'insurance', l: 'A2', b: 'thomas', c: 'lambert',
    title: 'Déclarer un dégât des eaux', ua: 'Повідомлення про затоплення',
    ctx: 'У квартирі клієнтки сталося затоплення від сусідів. Консультант допомагає оформити страховий випадок.',
    lines: [
      ['C', "Bonjour, il y a eu un dégât des eaux chez moi hier soir. Le plafond de la cuisine est abîmé.", "Добрий день, учора ввечері в мене сталося затоплення. Стеля на кухні пошкоджена."],
      ['B', "Oh, je suis désolé. Vous n'êtes pas blessée ?", "Ох, мені шкода. Ви не постраждали?"],
      ['C', "Non, ça va, merci. Mais qu'est-ce que je dois faire ?", "Ні, все гаразд, дякую. Але що мені робити?"],
      ['B', "D'abord, vous devez déclarer le sinistre dans les cinq jours ouvrés. Je peux le faire avec vous maintenant.", "Спершу треба повідомити про страховий випадок протягом п'яти робочих днів. Я можу зробити це з вами зараз."],
      ['C', "Oui, merci. Le problème vient de l'appartement du dessus.", "Так, дякую. Проблема — з квартири зверху."],
      ['B', "D'accord. Vous avez parlé avec votre voisin ?", "Зрозуміло. Ви говорили із сусідом?"],
      ['C', "Oui, il est assuré aussi.", "Так, він теж застрахований."],
      ['B', "Très bien. Vous allez remplir ensemble un constat amiable de dégât des eaux. Avez-vous pris des photos ?", "Дуже добре. Ви разом заповните спільний акт про затоплення. Ви зробили фото?"],
      ['C', "Oui, j'ai pris plusieurs photos.", "Так, я зробила кілька фото."],
      ['B', "Parfait. Envoyez-les avec le constat. Un expert va peut-être passer chez vous.", "Чудово. Надішліть їх разом з актом. Можливо, до вас приїде експерт."],
      ['C', "Et je vais être remboursée quand ?", "А коли мені відшкодують?"],
      ['B', "Après l'étude du dossier. Attention : une franchise de cent cinquante euros reste à votre charge.", "Після розгляду справи. Увага: франшиза сто п'ятдесят євро залишається за вами."],
      ['C', "D'accord, merci pour votre aide.", "Зрозуміло, дякую за допомогу."]
    ]
  },
  {
    id: 'insurance-B1', t: 'insurance', l: 'B1', b: 'nadia', c: 'haddad',
    title: 'Changer d\'assurance emprunteur', ua: 'Зміна страхування позичальника',
    ctx: 'Клієнт хоче змінити страхування за іпотекою. Консультантка пояснює закон Lemoine та поняття «еквівалентні гарантії».',
    lines: [
      ['C', "Bonjour Madame. J'ai signé mon prêt immobilier il y a trois ans. Un ami m'a dit que je pouvais changer d'assurance emprunteur. C'est vrai ?", "Добрий день. Я підписав іпотечний кредит три роки тому. Друг сказав, що я можу змінити страхування позичальника. Це правда?"],
      ['B', "Tout à fait, Monsieur Haddad. Depuis la loi Lemoine, vous pouvez résilier votre assurance emprunteur à tout moment, sans frais.", "Саме так, пане Хаддад. Відповідно до закону Lemoine ви можете розірвати страхування позичальника будь-коли й безкоштовно."],
      ['C', "Mais la banque peut refuser ?", "Але банк може відмовити?"],
      ['B', "La banque peut refuser uniquement si le nouveau contrat ne présente pas un niveau de garanties équivalent. Dans ce cas, nous devons motiver notre refus par écrit.", "Банк може відмовити лише тоді, коли новий договір не має еквівалентного рівня гарантій. У такому разі ми зобов'язані письмово обґрунтувати відмову."],
      ['C', "Qu'entendez-vous exactement par « garanties équivalentes » ?", "Що саме ви маєте на увазі під «еквівалентними гарантіями»?"],
      ['B', "Le nouveau contrat doit couvrir au moins les mêmes risques : le décès, l'invalidité, l'incapacité de travail, avec des exclusions et une franchise comparables.", "Новий договір має покривати щонайменше ті самі ризики: смерть, інвалідність, непрацездатність — з порівнянними виключеннями й франшизою."],
      ['C', "Et je dois remplir un questionnaire de santé ?", "А мені треба заповнювати медичну анкету?"],
      ['B', "Pas forcément. Si la part assurée est inférieure à deux cent mille euros par personne et que le prêt se termine avant vos soixante ans, le questionnaire de santé n'est plus exigé.", "Не обов'язково. Якщо застрахована частка менша за двісті тисяч євро на особу і кредит закінчується до вашого шістдесятиріччя, медична анкета більше не вимагається."],
      ['C', "Mon prêt se termine quand j'aurai cinquante-quatre ans. Donc je suis concerné.", "Мій кредит закінчиться, коли мені буде п'ятдесят чотири. Отже, це мій випадок."],
      ['B', "Exactement. Je vous conseille toutefois de comparer le coût total sur la durée restante, et pas seulement la cotisation mensuelle.", "Саме так. Проте раджу порівнювати загальну вартість за решту строку, а не лише щомісячний внесок."],
      ['C', "C'est noté. Si je trouve une meilleure offre, je vous envoie le contrat ?", "Зрозуміло. Якщо знайду кращу пропозицію, надіслати вам договір?"],
      ['B', "Oui. Nous aurons dix jours ouvrés pour vous répondre. Si c'est accepté, un avenant à votre offre de prêt sera établi.", "Так. У нас буде десять робочих днів на відповідь. Якщо погодимо — до вашого кредитного договору буде складено додаткову угоду."]
    ]
  },

  // ================= LIMITS =================
  {
    id: 'limits-A1', t: 'limits', l: 'A1', b: 'camille', c: 'girard',
    title: 'Augmenter le plafond', ua: 'Підвищення ліміту',
    ctx: 'Клієнт не може оплатити комп\'ютер — спрацював ліміт на оплату.',
    lines: [
      ['C', "Bonjour. Je veux payer un ordinateur, mais ma carte ne marche pas.", "Добрий день. Я хочу оплатити комп'ютер, але моя картка не працює."],
      ['B', "Bonjour Monsieur. Quel est le prix de l'ordinateur ?", "Добрий день. Яка ціна комп'ютера?"],
      ['C', "Mille cinq cents euros.", "Тисяча п'ятсот євро."],
      ['B', "Je regarde… Votre plafond de paiement est de mille deux cents euros.", "Дивлюся… Ваш ліміт на оплату — тисяча двісті євро."],
      ['C', "Ah ! Vous pouvez augmenter le plafond ?", "О! Ви можете підвищити ліміт?"],
      ['B', "Oui, je peux l'augmenter pour trois jours. Deux mille euros, ça va ?", "Так, я можу підвищити його на три дні. Дві тисячі євро — підходить?"],
      ['C', "Oui, parfait.", "Так, чудово."],
      ['B', "Voilà, c'est fait. Vous pouvez payer maintenant.", "Ось, готово. Тепер ви можете платити."],
      ['C', "Merci beaucoup !", "Щиро дякую!"]
    ]
  },
  {
    id: 'limits-A2', t: 'limits', l: 'A2', b: 'thomas', c: 'kovalenko',
    title: 'Retirer de l\'argent à l\'étranger', ua: 'Зняття готівки за кордоном',
    ctx: 'Клієнтка їде в подорож і питає про комісії та ліміт на зняття готівки.',
    lines: [
      ['C', "Bonjour. Je pars au Canada pour trois semaines. Est-ce que je peux retirer de l'argent là-bas avec ma carte ?", "Добрий день. Я їду до Канади на три тижні. Чи можу я знімати там гроші своєю карткою?"],
      ['B', "Bonjour Madame. Oui, mais il y a des frais : deux euros par retrait et une commission de deux pour cent hors zone euro.", "Добрий день. Так, але є комісії: два євро за зняття й два відсотки за межами єврозони."],
      ['C', "D'accord. Et mon plafond de retrait, c'est combien ?", "Зрозуміло. А який у мене ліміт на зняття?"],
      ['B', "Actuellement, vous pouvez retirer cinq cents euros sur sept jours glissants.", "Зараз ви можете зняти п'ятсот євро за сім ковзних днів."],
      ['C', "« Sept jours glissants », qu'est-ce que ça veut dire ?", "«Сім ковзних днів» — що це означає?"],
      ['B', "Ça veut dire que la banque calcule toujours sur les sept derniers jours, pas du lundi au dimanche.", "Це означає, що банк завжди рахує за останні сім днів, а не з понеділка по неділю."],
      ['C', "Je comprends. C'est un peu juste pour le voyage. Vous pouvez l'augmenter ?", "Зрозуміло. Для подорожі цього замало. Ви можете його підвищити?"],
      ['B', "Oui, je peux augmenter votre plafond à huit cents euros pendant votre voyage. Je vous conseille aussi d'activer les paiements à l'étranger dans l'application.", "Так, я можу підвищити ліміт до восьмисот євро на час подорожі. Також раджу ввімкнути платежі за кордоном у застосунку."],
      ['C', "Ah, je ne savais pas. Je vais le faire. Merci !", "О, я не знала. Зроблю це. Дякую!"],
      ['B', "Avec plaisir. Bon voyage !", "Із задоволенням. Гарної подорожі!"]
    ]
  },
  {
    id: 'limits-B1', t: 'limits', l: 'B1', b: 'nadia', c: 'lemaire',
    title: 'Un gros retrait en espèces', ua: 'Велике зняття готівки',
    ctx: 'Клієнт хоче зняти 15 000 € готівкою для купівлі вживаного авто. Консультантка пояснює процедуру, вимоги LCB-FT і пропонує безпечніші варіанти.',
    lines: [
      ['C', "Bonjour Madame. J'achète une voiture d'occasion à un particulier. Il veut être payé en espèces. Je voudrais retirer quinze mille euros.", "Добрий день. Я купую вживаний автомобіль у приватної особи. Він хоче готівку. Я хотів би зняти п'ятнадцять тисяч євро."],
      ['B', "Bonjour Monsieur Lemaire. C'est possible, mais un retrait de ce montant au guichet doit être commandé à l'avance, généralement quarante-huit heures avant.", "Добрий день, пане Лемер. Це можливо, але зняття такої суми в касі треба замовляти заздалегідь, зазвичай за сорок вісім годин."],
      ['C', "D'accord. C'est tout ?", "Зрозуміло. Це все?"],
      ['B', "Pas tout à fait. Pour un retrait important en espèces, je dois aussi vous poser quelques questions sur l'utilisation des fonds. C'est une obligation réglementaire liée à la lutte contre le blanchiment.", "Не зовсім. Для великого зняття готівки я також маю поставити вам кілька запитань про використання коштів. Це регуляторний обов'язок, пов'язаний із протидією відмиванню коштів."],
      ['C', "Je comprends. Je peux vous montrer l'annonce de la voiture.", "Розумію. Я можу показати вам оголошення про продаж авто."],
      ['B', "Ce sera parfait. Par ailleurs, permettez-moi de vous donner un conseil : transporter une telle somme présente des risques, et les faux vendeurs sont nombreux.", "Це буде чудово. Окрім того, дозвольте дати пораду: перевозити таку суму ризиковано, а фальшивих продавців багато."],
      ['C', "Qu'est-ce que vous me proposez alors ?", "Що ж ви тоді пропонуєте?"],
      ['B', "Un chèque de banque, par exemple : le montant est garanti, et le vendeur peut le vérifier auprès de notre agence. Vous pouvez aussi faire un virement instantané au moment de la remise des clés.", "Наприклад, банківський чек: сума гарантована, а продавець може перевірити його в нашому відділенні. Також можна зробити миттєвий переказ у момент передачі ключів."],
      ['C', "Le virement instantané, il n'est pas limité ?", "А миттєвий переказ хіба не обмежений?"],
      ['B', "Votre plafond actuel de virement est de cinq mille euros par jour. Toutefois, je peux le relever exceptionnellement à quinze mille euros pour la journée de la transaction, après une validation dans l'application.", "Ваш поточний ліміт на перекази — п'ять тисяч євро на день. Проте я можу у виняткових обставинах підняти його до п'ятнадцяти тисяч євро на день угоди — після підтвердження в застосунку."],
      ['C', "Ça me semble plus sûr que les espèces. Je vais en parler au vendeur.", "Мені здається, це безпечніше за готівку. Я поговорю з продавцем."],
      ['B', "Très bonne idée. Et sachez que si vous aviez acheté chez un garagiste, le paiement en espèces aurait été limité à mille euros.", "Чудова ідея. І знайте: якби ви купували в автосалоні, оплату готівкою було б обмежено тисячею євро."]
    ]
  },

  // ================= RISKS =================
  {
    id: 'risks-A1', t: 'risks', l: 'A1', b: 'julien', c: 'lambert',
    title: 'Un SMS bizarre', ua: 'Дивне SMS',
    ctx: 'Клієнтка отримала SMS «від банку» з проханням надіслати пароль.',
    lines: [
      ['C', "Bonjour. J'ai reçu un SMS de la banque. Il demande mon mot de passe.", "Добрий день. Я отримала SMS від банку. У ньому просять мій пароль."],
      ['B', "Bonjour Madame. Attention ! C'est une arnaque.", "Добрий день, пані. Обережно! Це шахрайство."],
      ['C', "Vraiment ?", "Справді?"],
      ['B', "Oui. La banque ne demande jamais votre mot de passe par SMS.", "Так. Банк ніколи не запитує ваш пароль в SMS."],
      ['C', "Ah bon ! Je n'ai pas répondu.", "Он як! Я не відповіла."],
      ['B', "Très bien. Ne cliquez pas sur le lien. Supprimez le message.", "Дуже добре. Не натискайте на посилання. Видаліть повідомлення."],
      ['C', "D'accord. Et mon compte est en sécurité ?", "Гаразд. А мій рахунок у безпеці?"],
      ['B', "Oui, je vérifie… Il n'y a pas d'opération suspecte.", "Так, перевіряю… Підозрілих операцій немає."],
      ['C', "Merci, je suis rassurée.", "Дякую, я заспокоїлася."],
      ['B', "De rien. Soyez prudente !", "Нема за що. Будьте обережні!"]
    ]
  },
  {
    id: 'risks-A2', t: 'risks', l: 'A2', b: 'camille', c: 'petit',
    title: 'Le faux conseiller', ua: 'Фальшивий консультант',
    ctx: 'Клієнту телефонував шахрай, який видавав себе за працівника банку.',
    lines: [
      ['C', "Bonjour Madame. Hier, un conseiller de la banque m'a appelé. Il m'a dit qu'il y avait une fraude sur mon compte.", "Добрий день. Учора мені телефонував консультант банку. Він сказав, що на моєму рахунку шахрайство."],
      ['B', "Bonjour Monsieur Petit. Qu'est-ce qu'il vous a demandé exactement ?", "Добрий день, пане Петі. Що саме він у вас просив?"],
      ['C', "Il m'a demandé de valider une opération dans l'application pour « annuler » la fraude.", "Він попросив підтвердити операцію в застосунку, щоб «скасувати» шахрайство."],
      ['B', "Et vous l'avez validée ?", "І ви її підтвердили?"],
      ['C', "Non, j'ai eu un doute et j'ai raccroché.", "Ні, у мене виникли сумніви, і я поклав слухавку."],
      ['B', "Vous avez eu raison ! C'était un faux conseiller. C'est une arnaque très fréquente en ce moment.", "Ви вчинили правильно! Це був фальшивий консультант. Зараз це дуже поширене шахрайство."],
      ['C', "Mais le numéro affiché était celui de la banque !", "Але на екрані був номер банку!"],
      ['B', "Oui, les fraudeurs peuvent falsifier le numéro. Retenez bien : nous ne vous demanderons jamais de valider une opération pour l'annuler.", "Так, шахраї можуть підробити номер. Запам'ятайте: ми ніколи не попросимо вас підтвердити операцію, щоб її скасувати."],
      ['C', "Qu'est-ce que je dois faire maintenant ?", "Що мені тепер робити?"],
      ['B', "Je vais vérifier votre compte et changer vos accès par précaution. Je vous conseille aussi de signaler l'appel sur le site officiel du gouvernement.", "Я перевірю ваш рахунок і про всяк випадок змінимо ваші доступи. Також раджу повідомити про дзвінок на офіційному державному сайті."],
      ['C', "Merci beaucoup. Je vais faire plus attention.", "Щиро дякую. Я буду уважнішим."]
    ]
  },
  {
    id: 'risks-B1', t: 'risks', l: 'B1', b: 'thomas', c: 'shevchuk',
    title: 'L\'origine des fonds', ua: 'Походження коштів',
    ctx: 'Великий переказ із-за кордону затримано для перевірки. Консультант пояснює обов\'язок належної перевірки й запитує документи, не звинувачуючи клієнтку.',
    lines: [
      ['C', "Bonjour Monsieur. J'ai reçu un virement de quarante mille euros, mais il n'apparaît pas sur mon compte. Pourquoi ?", "Добрий день. Мені надійшов переказ на сорок тисяч євро, але він не відображається на рахунку. Чому?"],
      ['B', "Bonjour Madame Shevchuk. Je vois effectivement un virement entrant en attente. Avant de le créditer, nous devons obtenir quelques informations sur l'origine des fonds.", "Добрий день, пані Шевчук. Справді, бачу вхідний переказ в очікуванні. Перш ніж зарахувати його, ми маємо отримати деяку інформацію про походження коштів."],
      ['C', "Mais c'est mon argent ! Pourquoi vous bloquez mon virement ?", "Але ж це мої гроші! Чому ви блокуєте мій переказ?"],
      ['B', "Je comprends que la situation soit frustrante. Il ne s'agit pas d'une sanction : c'est une obligation légale de vigilance, qui s'applique à toutes les banques en France pour les montants inhabituels.", "Розумію, що ситуація неприємна. Це не санкція: це законний обов'язок належної перевірки, який поширюється на всі банки у Франції для нетипових сум."],
      ['C', "Bon. Il s'agit de la vente de mon appartement en Ukraine.", "Добре. Йдеться про продаж моєї квартири в Україні."],
      ['B', "Merci. Dans ce cas, il nous faudrait l'acte de vente, si possible traduit en français, ainsi qu'un justificatif montrant que le virement provient bien de votre compte en Ukraine.", "Дякую. У такому разі нам знадобиться договір купівлі-продажу, бажано з перекладом французькою, а також документ, що підтверджує, що переказ надійшов саме з вашого рахунку в Україні."],
      ['C', "J'ai l'acte de vente, mais pas encore la traduction.", "Договір у мене є, але перекладу ще немає."],
      ['B', "Vous pouvez déjà nous transmettre le document original. Je demanderai à notre service conformité s'il accepte une traduction ultérieure.", "Ви вже можете передати нам оригінал документа. Я запитаю нашу службу комплаєнсу, чи прийме вона переклад пізніше."],
      ['C', "Et combien de temps cela va prendre ?", "І скільки часу це займе?"],
      ['B', "Une fois le dossier complet, le délai de traitement est généralement de quarante-huit à soixante-douze heures. Je vous tiendrai informée.", "Щойно пакет буде повним, строк обробки зазвичай становить від сорока восьми до сімдесяти двох годин. Я триматиму вас у курсі."],
      ['C', "Merci. Si j'avais su, j'aurais apporté les documents avant.", "Дякую. Якби я знала, принесла б документи заздалегідь."],
      ['B', "C'est une bonne remarque : pour un prochain virement important, n'hésitez pas à me prévenir à l'avance, cela accélère la procédure.", "Слушне зауваження: перед наступним великим переказом не соромтеся попередити мене заздалегідь — це пришвидшує процедуру."]
    ]
  },

  // ================= DEPOSITS =================
  {
    id: 'deposits-A1', t: 'deposits', l: 'A1', b: 'nadia', c: 'girard',
    title: 'Ouvrir un Livret A', ua: 'Відкриття Livret A',
    ctx: 'Молодий клієнт хоче почати заощаджувати.',
    lines: [
      ['C', "Bonjour. Je voudrais épargner un peu d'argent.", "Добрий день. Я хотів би трохи заощадити."],
      ['B', "Bonjour Monsieur. Vous avez déjà un livret ?", "Добрий день. У вас уже є ощадний рахунок?"],
      ['C', "Non, je n'ai pas de livret.", "Ні, в мене немає ощадного рахунку."],
      ['B', "Je vous propose un Livret A. Il est sans risque, et les intérêts ne sont pas imposés.", "Пропоную вам Livret A. Він без ризику, а відсотки не оподатковуються."],
      ['C', "C'est intéressant. Je peux retirer mon argent quand je veux ?", "Цікаво. Я можу зняти гроші, коли захочу?"],
      ['B', "Oui, l'argent est toujours disponible.", "Так, гроші завжди доступні."],
      ['C', "Et combien je peux mettre ?", "А скільки я можу покласти?"],
      ['B', "Jusqu'à vingt-deux mille neuf cent cinquante euros.", "До двадцяти двох тисяч дев'ятисот п'ятдесяти євро."],
      ['C', "Très bien. J'ouvre un Livret A avec cent euros.", "Дуже добре. Відкриваю Livret A зі ста євро."],
      ['B', "Parfait. Je prépare le contrat.", "Чудово. Готую договір."]
    ]
  },
  {
    id: 'deposits-A2', t: 'deposits', l: 'A2', b: 'julien', c: 'morel',
    title: 'Un compte à terme', ua: 'Строковий депозит',
    ctx: 'Клієнтка хоче без ризику розмістити 20 000 € на рік.',
    lines: [
      ['C', "Bonjour. J'ai vingt mille euros sur mon compte courant. Je voudrais placer cet argent sans risque.", "Добрий день. У мене двадцять тисяч євро на поточному рахунку. Я хотіла б вкласти ці гроші без ризику."],
      ['B', "Bonjour Madame Morel. Vous avez besoin de cet argent bientôt ?", "Добрий день, пані Морель. Вам незабаром знадобляться ці гроші?"],
      ['C', "Pas avant un an, je pense.", "Не раніше ніж за рік, гадаю."],
      ['B', "Alors je peux vous proposer un compte à terme. L'argent est bloqué pendant une durée fixe, et le taux est garanti.", "Тоді можу запропонувати строковий депозит. Гроші заблоковані на фіксований строк, а ставка гарантована."],
      ['C', "Quel est le taux ?", "Яка ставка?"],
      ['B', "Pour douze mois, le taux est de deux virgule cinq pour cent brut.", "На дванадцять місяців ставка — дві цілих п'ять десятих відсотка до оподаткування."],
      ['C', "« Brut », ça veut dire avant les impôts ?", "«Брутто» — це до сплати податків?"],
      ['B', "Exactement. Les intérêts sont imposés, contrairement au Livret A.", "Саме так. Відсотки оподатковуються — на відміну від Livret A."],
      ['C', "Et si j'ai besoin de l'argent avant l'échéance ?", "А якщо мені знадобляться гроші до кінця строку?"],
      ['B', "Vous pouvez faire un retrait anticipé, mais vous allez perdre une partie des intérêts.", "Ви можете зняти їх достроково, але втратите частину відсотків."],
      ['C', "D'accord. Et mon argent est protégé si la banque a des problèmes ?", "Зрозуміло. А мої гроші захищені, якщо в банку будуть проблеми?"],
      ['B', "Oui, vos dépôts sont garantis jusqu'à cent mille euros par le Fonds de garantie des dépôts.", "Так, ваші вклади гарантовані до ста тисяч євро Фондом гарантування вкладів."],
      ['C', "Parfait, je vais réfléchir et je vous appelle demain.", "Чудово, я подумаю й зателефоную вам завтра."]
    ]
  },
  {
    id: 'deposits-B1', t: 'deposits', l: 'B1', b: 'camille', c: 'vasseur',
    title: 'Placer un héritage', ua: 'Як розмістити спадщину',
    ctx: 'Клієнт отримав спадщину 60 000 €. Консультантка з\'ясовує цілі, пропонує розподіл і пояснює обов\'язкову анкету профілю інвестора.',
    lines: [
      ['C', "Bonjour Madame. Je viens d'hériter de soixante mille euros et je ne sais pas comment les placer.", "Добрий день. Я щойно успадкував шістдесят тисяч євро й не знаю, як їх вкласти."],
      ['B', "Toutes mes condoléances, Monsieur Vasseur. Avant de vous proposer quoi que ce soit, j'ai besoin de connaître vos projets. Avez-vous besoin d'une partie de cette somme à court terme ?", "Прийміть мої співчуття, пане Вассер. Перш ніж щось пропонувати, мені потрібно знати ваші плани. Чи знадобиться вам частина цієї суми найближчим часом?"],
      ['C', "Oui, j'aimerais acheter un appartement dans trois ans environ. Le reste, c'est pour plus tard, peut-être pour ma retraite.", "Так, я хотів би купити квартиру приблизно через три роки. Решта — на потім, можливо, на пенсію."],
      ['B', "Dans ce cas, je vous conseillerais de séparer votre épargne en deux. Pour le projet immobilier, il faut des placements sûrs et disponibles, comme le Livret A et le LDDS.", "У такому разі я радила б розділити заощадження на дві частини. Для купівлі житла потрібні надійні й доступні вкладення, як-от Livret A і LDDS."],
      ['C', "Il y a un plafond, non ?", "Там є ліміт, так?"],
      ['B', "Oui : vingt-deux mille neuf cent cinquante euros pour le Livret A et douze mille euros pour le LDDS. Vous pourriez donc y placer environ trente-cinq mille euros, sans impôts et sans risque.", "Так: двадцять дві тисячі дев'ятсот п'ятдесят євро для Livret A і дванадцять тисяч євро для LDDS. Отже, ви могли б розмістити там близько тридцяти п'яти тисяч євро — без податків і без ризику."],
      ['C', "Et pour le reste ?", "А решту?"],
      ['B', "Pour un horizon long, l'assurance-vie est souvent intéressante, notamment grâce à sa fiscalité après huit ans. Cependant, je dois d'abord évaluer votre profil d'investisseur avec un questionnaire.", "Для довгого горизонту часто вигідне страхування життя — зокрема завдяки оподаткуванню після восьми років. Проте спершу я маю оцінити ваш профіль інвестора за допомогою анкети."],
      ['C', "Pourquoi ? C'est obligatoire ?", "Навіщо? Це обов'язково?"],
      ['B', "Oui, c'est une obligation réglementaire. Certains supports, comme les unités de compte, présentent un risque de perte en capital. Je dois m'assurer que vous comprenez ces risques et qu'ils correspondent à vos objectifs.", "Так, це регуляторна вимога. Деякі інструменти, як-от юніт-лінковані, несуть ризик втрати капіталу. Я маю переконатися, що ви розумієте ці ризики і що вони відповідають вашим цілям."],
      ['C', "Je préfère ne pas prendre trop de risques.", "Я волію не ризикувати надто сильно."],
      ['B', "C'est tout à fait compréhensible. Nous pourrions alors privilégier le fonds en euros, dont le capital est garanti, avec éventuellement une petite part en unités de compte.", "Це цілком зрозуміло. Тоді ми могли б віддати перевагу фонду в євро, де капітал гарантований, і, можливо, невеликій частці юніт-лінкованих інструментів."],
      ['C', "Ça me paraît raisonnable. On peut remplir le questionnaire maintenant ?", "Мені це здається розумним. Можемо заповнити анкету зараз?"],
      ['B', "Bien sûr. Ensuite, je vous remettrai une proposition écrite avec tous les documents d'information.", "Звісно. Потім я передам вам письмову пропозицію з усіма інформаційними документами."]
    ]
  }
];
