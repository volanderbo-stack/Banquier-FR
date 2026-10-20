// Animated video scenes with generated characters.
// lines: [speaker, fr, ua]; words: [fr, ua];
// tasks: client line (c/cu), options (first = correct), model answer (m/mu), key ideas k: [[synonyms...], ...]
BF.data.videos = [
  // ---------- ACCOUNTS ----------
  {
    id: 'v-accounts-A1', t: 'accounts', l: 'A1', b: 'julien', c: 'girard', set: 'agence',
    title: 'Consulter son solde', ua: 'Дізнатися залишок на рахунку',
    desc: 'Клієнт біля віконця хоче дізнатися залишок і зняти готівку.',
    lines: [
      ['C', "Bonjour Monsieur.", "Добрий день."],
      ['B', "Bonjour ! Que puis-je faire pour vous ?", "Добрий день! Чим можу допомогти?"],
      ['C', "Je voudrais connaître le solde de mon compte, s'il vous plaît.", "Я хотів би дізнатися залишок на моєму рахунку, будь ласка."],
      ['B', "Bien sûr. Votre pièce d'identité, s'il vous plaît.", "Звісно. Ваш документ, будь ласка."],
      ['C', "Voilà.", "Ось."],
      ['B', "Merci. Votre solde est de huit cent vingt euros.", "Дякую. Ваш залишок — вісімсот двадцять євро."],
      ['C', "Et je voudrais retirer cent euros.", "І я хотів би зняти сто євро."],
      ['B', "D'accord. Voici vos cent euros. Autre chose ?", "Гаразд. Ось ваші сто євро. Щось іще?"],
      ['C', "Non, merci. Au revoir !", "Ні, дякую. До побачення!"],
      ['B', "Au revoir, bonne journée !", "До побачення, гарного дня!"]
    ],
    words: [["le solde", "залишок"], ["connaître", "знати, дізнатися"], ["retirer", "зняти (гроші)"], ["Autre chose ?", "Щось іще?"], ["voici / voilà", "ось"]],
    tasks: [
      {
        c: "Bonjour, je voudrais connaître mon solde.", cu: "Добрий день, я хотів би дізнатися свій залишок.",
        opts: ["Bien sûr. Votre pièce d'identité, s'il vous plaît.", "Je voudrais un prêt, s'il vous plaît.", "Au revoir, Monsieur."],
        m: "Bien sûr. Vous avez une pièce d'identité, s'il vous plaît ?", mu: "Звісно. У вас є документ, будь ласка?",
        k: [["bien sur", "d'accord", "oui", "bonjour"], ["piece d'identite", "passeport", "carte d'identite"]]
      },
      {
        c: "Je voudrais retirer deux cents euros.", cu: "Я хотів би зняти двісті євро.",
        opts: ["D'accord. Voici vos deux cents euros.", "Votre carte est bloquée.", "Le taux est de cinq pour cent."],
        m: "D'accord. Voici vos deux cents euros. Autre chose ?", mu: "Гаразд. Ось ваші двісті євро. Щось іще?",
        k: [["d'accord", "bien sur", "oui"], ["voici", "voila"], ["deux cents", "200"]]
      }
    ]
  },
  {
    id: 'v-accounts-B1', t: 'accounts', l: 'B1', b: 'camille', c: 'garnier', set: 'agence',
    title: 'Clôturer un compte', ua: 'Закриття рахунку',
    desc: 'Клієнтка йде до онлайн-банку через комісії. Консультантка ввічливо пробує утримати клієнтку, а потім пояснює банківську мобільність.',
    lines: [
      ['C', "Bonjour. Je souhaite clôturer mon compte. Vos frais sont beaucoup trop élevés.", "Добрий день. Я хочу закрити рахунок. Ваші комісії занадто високі."],
      ['B', "Je comprends, Madame Garnier, et je regrette que vous ayez cette impression. Puis-je vous demander quels frais vous posent problème ?", "Я розумію, пані Гарньє, і шкодую, що у вас таке враження. Можу запитати, які саме комісії вас не влаштовують?"],
      ['C', "Les frais de tenue de compte, la cotisation de la carte… Une banque en ligne me propose tout cela gratuitement.", "Плата за обслуговування рахунку, річна плата за картку… Онлайн-банк пропонує мені все це безкоштовно."],
      ['B', "C'est un choix tout à fait légitime. Avant que vous preniez votre décision, sachez que je pourrais vous proposer une offre groupée moins chère, adaptée à votre utilisation.", "Це цілком законний вибір. Перш ніж ви ухвалите рішення, знайте, що я могла б запропонувати дешевший пакет послуг, адаптований до вашого користування."],
      ['C', "Merci, mais ma décision est prise.", "Дякую, але я вже вирішила."],
      ['B', "Très bien, je la respecte. Dans ce cas, vous pouvez utiliser le service de mobilité bancaire : c'est votre nouvelle banque qui se charge de transférer vos virements et vos prélèvements.", "Добре, я поважаю ваше рішення. У такому разі ви можете скористатися послугою банківської мобільності: ваш новий банк сам перенесе ваші перекази й автосписання."],
      ['C', "Je n'ai donc rien à faire ?", "Тобто мені нічого не треба робити?"],
      ['B', "Presque rien. Il vous suffit de signer un mandat auprès de la nouvelle banque. Nous clôturerons ensuite votre compte, à condition qu'il n'y ait plus d'opérations en cours ni de solde débiteur.", "Майже нічого. Достатньо підписати доручення в новому банку. Потім ми закриємо ваш рахунок — за умови, що не залишиться операцій в обробці та від'ємного залишку."],
      ['C', "Et le solde créditeur ?", "А додатний залишок?"],
      ['B', "Il sera transféré sur votre nouveau compte. Je vous remercie pour ces années de confiance, et notre porte reste ouverte.", "Його буде переказано на ваш новий рахунок. Дякую вам за роки довіри — наші двері завжди відчинені."]
    ],
    words: [["clôturer un compte", "закрити рахунок"], ["les frais de tenue de compte", "плата за обслуговування рахунку"], ["l'offre groupée", "пакет послуг"], ["la mobilité bancaire", "банківська мобільність"], ["le mandat", "доручення"], ["le solde débiteur / créditeur", "від'ємний / додатний залишок"], ["notre porte reste ouverte", "наші двері відчинені"]],
    tasks: [
      {
        c: "Je veux fermer mon compte, vos frais sont trop élevés.", cu: "Я хочу закрити рахунок, ваші комісії зависокі.",
        opts: ["Je comprends. Puis-je vous demander quels frais vous posent problème ?", "Ce n'est pas mon problème, Madame.", "Vous devez payer les frais, c'est obligatoire."],
        m: "Je comprends tout à fait. Puis-je vous demander quels frais vous posent problème ? Je pourrais peut-être vous proposer une offre plus adaptée.", mu: "Я цілком розумію. Можу запитати, які комісії вас не влаштовують? Можливо, я запропоную вам вигідніший пакет.",
        k: [["je comprends", "je regrette", "desole"], ["frais"], ["proposer", "offre", "solution"]]
      },
      {
        c: "Qu'est-ce que je dois faire pour transférer mes prélèvements ?", cu: "Що мені зробити, щоб перенести автосписання?",
        opts: ["Avec la mobilité bancaire, c'est votre nouvelle banque qui s'en charge.", "Vous devez écrire vous-même à chaque organisme.", "Les prélèvements ne peuvent pas être transférés."],
        m: "Grâce à la mobilité bancaire, il vous suffit de signer un mandat auprès de votre nouvelle banque : elle se charge de tout.", mu: "Завдяки банківській мобільності достатньо підписати доручення в новому банку — він усе зробить сам.",
        k: [["mobilite"], ["mandat", "signer"], ["nouvelle banque"]]
      }
    ]
  },

  // ---------- CARDS ----------
  {
    id: 'v-cards-A1', t: 'cards', l: 'A1', b: 'nadia', c: 'kovalenko', set: 'agence',
    title: 'Le distributeur a gardé ma carte', ua: 'Банкомат забрав картку',
    desc: 'Банкомат біля відділення затримав картку клієнтки.',
    lines: [
      ['C', "Bonjour Madame. Le distributeur a gardé ma carte !", "Добрий день. Банкомат забрав мою картку!"],
      ['B', "Bonjour. Ce n'est pas grave. C'est notre distributeur ?", "Добрий день. Нічого страшного. Це наш банкомат?"],
      ['C', "Oui, devant l'agence.", "Так, перед відділенням."],
      ['B', "D'accord. Votre nom, s'il vous plaît ?", "Гаразд. Ваше прізвище, будь ласка?"],
      ['C', "Yuliia Kovalenko.", "Юлія Коваленко."],
      ['B', "Merci. Et votre pièce d'identité ?", "Дякую. А ваш документ?"],
      ['C', "Voici mon titre de séjour.", "Ось моя посвідка на проживання."],
      ['B', "Parfait. Voilà votre carte, Madame.", "Чудово. Ось ваша картка, пані."],
      ['C', "Oh, merci beaucoup !", "О, щиро дякую!"],
      ['B', "Je vous en prie. Attention au code : après trois erreurs, la carte est bloquée.", "Будь ласка. Уважно з кодом: після трьох помилок картку буде заблоковано."]
    ],
    words: [["le distributeur", "банкомат"], ["garder", "тримати, залишати собі"], ["Ce n'est pas grave.", "Нічого страшного."], ["le titre de séjour", "посвідка на проживання"], ["l'erreur", "помилка"]],
    tasks: [
      {
        c: "Le distributeur a gardé ma carte !", cu: "Банкомат забрав мою картку!",
        opts: ["Ce n'est pas grave. Votre nom, s'il vous plaît ?", "Votre prêt est accepté.", "Je ne sais pas, au revoir."],
        m: "Ce n'est pas grave, Madame. Votre nom et votre pièce d'identité, s'il vous plaît.", mu: "Нічого страшного, пані. Ваше прізвище й документ, будь ласка.",
        k: [["pas grave", "ne vous inquietez pas", "pas de probleme"], ["nom", "piece d'identite"]]
      },
      {
        c: "Voici ma pièce d'identité.", cu: "Ось мій документ.",
        opts: ["Merci. Voilà votre carte.", "Le plafond est de trois cents euros.", "Vous devez payer une franchise."],
        m: "Merci beaucoup. Voilà votre carte, Madame.", mu: "Щиро дякую. Ось ваша картка, пані.",
        k: [["merci"], ["carte"], ["voila", "voici"]]
      }
    ]
  },
  {
    id: 'v-cards-B1', t: 'cards', l: 'B1', b: 'thomas', c: 'mendes', set: 'phone',
    title: 'Débitée deux fois par un hôtel', ua: 'Готель списав гроші двічі',
    desc: 'Телефонна розмова: подвійне списання — це не шахрайство, а комерційний спір. Консультант пояснює іншу процедуру й строки.',
    lines: [
      ['B', "Banque Mirabelle, Thomas Lefort à l'appareil, bonjour.", "Банк «Мірабель», Тома Лефор слухає, добрий день."],
      ['C', "Bonjour Monsieur. Un hôtel m'a débité deux fois la même somme : trois cent quarante euros. Je voudrais être remboursée.", "Добрий день. Готель двічі списав із мене ту саму суму — триста сорок євро. Я хочу повернення коштів."],
      ['B', "Je comprends, c'est très désagréable. Pouvez-vous me préciser la date des opérations ?", "Розумію, це дуже неприємно. Можете уточнити дату операцій?"],
      ['C', "Le douze et le treize octobre.", "Дванадцятого й тринадцятого жовтня."],
      ['B', "Je les vois, en effet. Avez-vous déjà contacté l'hôtel ?", "Так, бачу їх. Ви вже зверталися до готелю?"],
      ['C', "Oui, mais ils ne répondent pas à mes e-mails.", "Так, але вони не відповідають на мої листи."],
      ['B', "Dans ce cas, je peux ouvrir une contestation. Comme il ne s'agit pas d'une fraude mais d'un litige commercial, la procédure est un peu différente.", "У такому разі я можу відкрити оскарження. Оскільки йдеться не про шахрайство, а про комерційний спір, процедура трохи інша."],
      ['C', "C'est-à-dire ?", "Тобто?"],
      ['B', "Nous allons transmettre votre dossier à la banque de l'hôtel, qui dispose d'un délai pour répondre. Le remboursement n'est donc pas immédiat : il peut prendre quelques semaines.", "Ми передамо вашу справу до банку готелю, який має певний строк на відповідь. Тож відшкодування не миттєве: воно може тривати кілька тижнів."],
      ['C', "Qu'est-ce que je dois fournir ?", "Що мені потрібно надати?"],
      ['B', "La facture de l'hôtel et vos échanges d'e-mails. Je vous envoie le formulaire de contestation dans votre espace client.", "Рахунок готелю та ваше листування. Я надішлю бланк оскарження у ваш особистий кабінет."],
      ['C', "Merci, je vous le renvoie aujourd'hui.", "Дякую, поверну його вам сьогодні."]
    ],
    words: [["à l'appareil", "біля телефону (слухає)"], ["débiter deux fois", "списати двічі"], ["préciser", "уточнити"], ["la contestation", "оскарження"], ["le litige commercial", "комерційний спір"], ["transmettre", "передати"], ["la facture", "рахунок-фактура"]],
    tasks: [
      {
        c: "On m'a débité deux fois le même montant !", cu: "З мене двічі списали ту саму суму!",
        opts: ["Je comprends. Pouvez-vous me préciser la date des opérations ?", "C'est impossible, nos systèmes ne font pas d'erreur.", "Vous devez faire opposition sur votre carte."],
        m: "Je comprends, c'est désagréable. Pouvez-vous me préciser la date et le montant des opérations ?", mu: "Розумію, це неприємно. Можете уточнити дату й суму операцій?",
        k: [["je comprends", "desole"], ["date", "preciser"], ["montant", "operation"]]
      },
      {
        c: "Je vais être remboursée tout de suite ?", cu: "Мені повернуть гроші одразу?",
        opts: ["Pas immédiatement : pour un litige commercial, la procédure peut prendre quelques semaines.", "Oui, dans une heure.", "Non, jamais."],
        m: "Pas immédiatement. Comme il s'agit d'un litige commercial, le remboursement peut prendre quelques semaines.", mu: "Не одразу. Оскільки це комерційний спір, відшкодування може тривати кілька тижнів.",
        k: [["pas immediatement", "pas tout de suite", "quelques semaines"], ["litige", "procedure", "contestation"]]
      }
    ]
  },

  // ---------- CREDITS ----------
  {
    id: 'v-credits-A2', t: 'credits', l: 'A2', b: 'julien', c: 'lambert', set: 'agence',
    title: 'Rembourser une partie du prêt', ua: 'Часткове дострокове погашення',
    desc: 'Клієнтка отримала премію й хоче частково погасити автокредит. Скоротити строк чи платіж?',
    lines: [
      ['C', "Bonjour. J'ai reçu une prime, et je voudrais rembourser une partie de mon prêt auto.", "Добрий день. Я отримала премію й хотіла б погасити частину автокредиту."],
      ['B', "Bonjour Madame Lambert. Très bonne idée ! Combien voulez-vous rembourser ?", "Добрий день, пані Ламбер. Чудова ідея! Скільки ви хочете погасити?"],
      ['C', "Trois mille euros.", "Три тисячі євро."],
      ['B', "D'accord. Vous préférez réduire vos mensualités ou la durée du prêt ?", "Гаразд. Ви хочете зменшити щомісячні платежі чи строк кредиту?"],
      ['C', "Quelle est la différence ?", "Яка різниця?"],
      ['B', "Si vous réduisez la durée, vous payez la même mensualité, mais vous terminez plus tôt et vous payez moins d'intérêts. Si vous réduisez la mensualité, vous avez plus d'argent chaque mois.", "Якщо скоротите строк — платите той самий щомісячний платіж, але закінчуєте раніше й сплачуєте менше відсотків. Якщо зменшите платіж — щомісяця матимете більше грошей."],
      ['C', "Je préfère terminer plus tôt.", "Я волію закінчити раніше."],
      ['B', "Parfait. Et bonne nouvelle : pour ce montant, il n'y a pas d'indemnités de remboursement anticipé.", "Чудово. І гарна новина: для такої суми компенсації за дострокове погашення немає."],
      ['C', "Super, merci !", "Супер, дякую!"],
      ['B', "Je prépare le document. Vous allez recevoir un nouveau tableau d'amortissement.", "Я готую документ. Ви отримаєте новий графік погашення."]
    ],
    words: [["la prime", "премія"], ["une partie de", "частина"], ["réduire", "зменшити"], ["terminer plus tôt", "закінчити раніше"], ["le remboursement anticipé", "дострокове погашення"], ["le tableau d'amortissement", "графік погашення"]],
    tasks: [
      {
        c: "Je voudrais rembourser une partie de mon prêt.", cu: "Я хотіла б погасити частину кредиту.",
        opts: ["Très bien. Combien voulez-vous rembourser ?", "Ce n'est pas possible, Madame.", "Votre carte est bloquée."],
        m: "Très bonne idée. Quel montant voulez-vous rembourser ?", mu: "Чудова ідея. Яку суму ви хочете погасити?",
        k: [["combien", "quel montant", "montant"], ["rembourser"]]
      },
      {
        c: "Quelle est la différence entre réduire la durée et réduire la mensualité ?", cu: "Яка різниця між скороченням строку та зменшенням платежу?",
        opts: ["Si vous réduisez la durée, vous payez moins d'intérêts ; si vous réduisez la mensualité, vous payez moins chaque mois.", "Il n'y a pas de différence.", "La durée est toujours de vingt ans."],
        m: "Si vous réduisez la durée, vous terminez plus tôt et vous payez moins d'intérêts. Si vous réduisez la mensualité, vous payez moins chaque mois.", mu: "Якщо скоротите строк — закінчите раніше й сплатите менше відсотків. Якщо зменшите платіж — щомісяця платитимете менше.",
        k: [["duree"], ["mensualite"], ["interets", "moins"]]
      }
    ]
  },
  {
    id: 'v-credits-B1', t: 'credits', l: 'B1', b: 'nadia', c: 'haddad', set: 'agence',
    title: 'Comprendre le TAEG', ua: 'Що таке TAEG',
    desc: 'Клієнт порівнює дві пропозиції: у конкурента номінальна ставка нижча. Консультантка пояснює, чому треба дивитися на TAEG.',
    lines: [
      ['C', "Bonjour. Une autre banque me propose un taux de trois pour cent, et vous, trois virgule deux. Pourquoi je choisirais votre offre ?", "Добрий день. Інший банк пропонує мені три відсотки, а ви — три цілих дві десятих. Чому я маю обрати вашу пропозицію?"],
      ['B', "C'est une question légitime, Monsieur Haddad. Pour comparer deux offres, il ne faut pas regarder seulement le taux nominal, mais le TAEG.", "Слушне запитання, пане Хаддад. Щоб порівняти дві пропозиції, треба дивитися не лише на номінальну ставку, а на TAEG."],
      ['C', "Le TAEG ? C'est quoi exactement ?", "TAEG? Що це таке?"],
      ['B', "C'est le taux annuel effectif global. Il inclut les intérêts, mais aussi les frais de dossier, l'assurance emprunteur et les frais de garantie. Autrement dit, c'est le coût réel du crédit.", "Це ефективна річна відсоткова ставка. Вона охоплює відсотки, а також комісію за оформлення, страхування позичальника й витрати на забезпечення. Іншими словами, це реальна вартість кредиту."],
      ['C', "Je vois. Et quel est le TAEG de chaque offre ?", "Зрозуміло. А який TAEG у кожній пропозиції?"],
      ['B', "D'après le document que vous m'avez montré, leur TAEG est de quatre virgule un pour cent, car leurs frais de dossier et leur assurance sont élevés. Le nôtre est de trois virgule huit pour cent.", "Згідно з документом, який ви мені показали, їхній TAEG — чотири цілих одна десята відсотка, бо комісія за оформлення й страховка в них високі. Наш — три цілих вісім десятих."],
      ['C', "Donc votre offre est moins chère au total, même avec un taux plus élevé ?", "Тобто ваша пропозиція загалом дешевша, навіть із вищою ставкою?"],
      ['B', "Exactement. Sur vingt ans, la différence représente plusieurs milliers d'euros. Je vous conseille de comparer aussi le coût total du crédit, indiqué en euros sur chaque offre.", "Саме так. За двадцять років різниця становить кілька тисяч євро. Раджу також порівнювати повну вартість кредиту, вказану в євро в кожній пропозиції."],
      ['C', "C'est très clair. Est-ce que les frais de dossier sont négociables ?", "Дуже зрозуміло. А комісію за оформлення можна обговорити?"],
      ['B', "Je ne peux rien vous promettre, mais je peux soumettre une demande à mon directeur d'agence.", "Я нічого не можу обіцяти, але можу подати запит директору відділення."]
    ],
    words: [["le taux nominal", "номінальна ставка"], ["le TAEG", "ефективна річна ставка"], ["les frais de dossier", "комісія за оформлення"], ["les frais de garantie", "витрати на забезпечення"], ["le coût total du crédit", "повна вартість кредиту"], ["négociable", "що підлягає обговоренню"], ["soumettre une demande", "подати запит"]],
    tasks: [
      {
        c: "Pourquoi votre taux est plus élevé que celui de l'autre banque ?", cu: "Чому ваша ставка вища, ніж в іншому банку?",
        opts: ["Pour comparer, il faut regarder le TAEG, qui inclut tous les frais.", "Parce que nous sommes une meilleure banque.", "Je ne sais pas, c'est la direction qui décide."],
        m: "C'est une bonne question. Pour comparer deux offres, il faut regarder le TAEG : il inclut les frais de dossier et l'assurance, c'est le coût réel du crédit.", mu: "Слушне запитання. Щоб порівняти пропозиції, треба дивитися на TAEG: він включає комісію й страховку — це реальна вартість кредиту.",
        k: [["taeg"], ["frais", "cout reel", "cout total", "assurance"], ["comparer"]]
      },
      {
        c: "Est-ce que vous pouvez supprimer les frais de dossier ?", cu: "Ви можете скасувати комісію за оформлення?",
        opts: ["Je ne peux rien vous promettre, mais je peux soumettre une demande à mon directeur.", "Oui, bien sûr, tout est gratuit.", "Non, ce n'est pas la peine de demander."],
        m: "Je ne peux rien vous promettre, mais je vais soumettre votre demande à mon directeur d'agence.", mu: "Нічого не можу обіцяти, але передам ваш запит директору відділення.",
        k: [["promettre", "garantir"], ["demande", "soumettre"], ["directeur", "responsable"]]
      }
    ]
  },

  // ---------- INSURANCE ----------
  {
    id: 'v-insurance-A2', t: 'insurance', l: 'A2', b: 'thomas', c: 'girard', set: 'agence',
    title: 'Choisir une assurance auto', ua: 'Вибір автострахування',
    desc: 'Молодий водій купив першу машину. Консультант пояснює «au tiers» і «tous risques».',
    lines: [
      ['C', "Bonjour. J'ai acheté ma première voiture. Je cherche une assurance auto.", "Добрий день. Я купив першу машину. Шукаю автострахування."],
      ['B', "Félicitations ! Nous avons deux formules principales : l'assurance au tiers et l'assurance tous risques.", "Вітаю! У нас два основні варіанти: страхування третіх осіб і повне страхування."],
      ['C', "Qu'est-ce que c'est, « au tiers » ?", "Що таке «третіх осіб»?"],
      ['B', "C'est le minimum obligatoire. Elle paie les dommages que vous causez aux autres, mais pas les dommages sur votre voiture.", "Це обов'язковий мінімум. Воно покриває збитки, які ви завдаєте іншим, але не пошкодження вашого авто."],
      ['C', "Et la formule tous risques ?", "А повне страхування?"],
      ['B', "Elle couvre aussi votre voiture, même si l'accident est de votre faute. Mais elle est plus chère.", "Воно покриває й ваше авто, навіть якщо аварія сталася з вашої вини. Але воно дорожче."],
      ['C', "Ma voiture n'est pas neuve. Elle a dix ans.", "Моя машина не нова. Їй десять років."],
      ['B', "Alors l'assurance au tiers avec l'option vol et incendie peut suffire. Pour un jeune conducteur, ce serait environ cinquante euros par mois.", "Тоді може вистачити страхування третіх осіб з опцією «крадіжка й пожежа». Для молодого водія це близько п'ятдесяти євро на місяць."],
      ['C', "D'accord. Je prends cette formule.", "Гаразд. Беру цей варіант."]
    ],
    words: [["la formule", "варіант (тариф)"], ["au tiers", "страхування третіх осіб"], ["tous risques", "повне страхування (каско)"], ["les dommages", "збитки"], ["causer", "завдати"], ["de votre faute", "з вашої вини"], ["le jeune conducteur", "молодий (недосвідчений) водій"]],
    tasks: [
      {
        c: "C'est quoi, l'assurance au tiers ?", cu: "Що таке страхування третіх осіб?",
        opts: ["C'est le minimum obligatoire : elle paie les dommages causés aux autres.", "C'est une assurance pour trois voitures.", "C'est une carte bancaire."],
        m: "C'est l'assurance minimum obligatoire. Elle couvre les dommages que vous causez aux autres.", mu: "Це мінімальне обов'язкове страхування. Воно покриває збитки, які ви завдаєте іншим.",
        k: [["minimum", "obligatoire"], ["dommages"], ["autres", "tiers"]]
      },
      {
        c: "Ma voiture est vieille. Quelle formule vous me conseillez ?", cu: "Моя машина стара. Який варіант ви порадите?",
        opts: ["Je vous conseille l'assurance au tiers avec l'option vol et incendie.", "Je vous conseille de vendre votre voiture.", "Je ne peux pas vous conseiller."],
        m: "Pour une voiture de dix ans, je vous conseille l'assurance au tiers avec l'option vol et incendie.", mu: "Для десятирічного авто раджу страхування третіх осіб з опцією «крадіжка й пожежа».",
        k: [["conseille", "propose"], ["tiers"], ["vol", "incendie", "option"]]
      }
    ]
  },
  {
    id: 'v-insurance-B1', t: 'insurance', l: 'B1', b: 'camille', c: 'robin', set: 'agence',
    title: 'Un refus d\'indemnisation', ua: 'Відмова у відшкодуванні',
    desc: 'Розгніваний клієнт: страховка не відшкодувала вкрадений велосипед. Консультантка пояснює виключення, визнає проблему й називає способи оскарження.',
    lines: [
      ['C', "Bonjour. Votre assurance refuse de me rembourser mon vélo volé. C'est inadmissible, je paie ma cotisation depuis six ans !", "Добрий день. Ваша страхова відмовляється відшкодувати мій вкрадений велосипед. Це неприпустимо, я сплачую внески вже шість років!"],
      ['B', "Je comprends tout à fait votre colère, Monsieur Robin. Permettez-moi de regarder votre dossier… Le refus est motivé par une exclusion de garantie.", "Я цілком розумію ваш гнів, пане Робен. Дозвольте переглянути вашу справу… Відмову обґрунтовано виключенням із покриття."],
      ['C', "Une exclusion ? Laquelle ?", "Виключенням? Яким?"],
      ['B', "D'après votre déclaration, le vélo se trouvait dans la cour de l'immeuble et n'était pas attaché. Or, votre contrat ne couvre le vol dans les parties communes que si le vélo est attaché avec un antivol.", "Згідно з вашою заявою, велосипед стояв у дворі будинку й не був прикріплений. А ваш договір покриває крадіжку в місцях спільного користування, лише якщо велосипед замкнений на замок."],
      ['C', "Personne ne m'a jamais expliqué ça !", "Ніхто мені цього ніколи не пояснював!"],
      ['B', "Je regrette que cette condition ne vous ait pas été présentée clairement. Elle figure bien dans les conditions générales, à l'article douze, mais je comprends que ce soit frustrant.", "Шкодую, що цю умову вам не пояснили чітко. Вона справді є в загальних умовах, у статті дванадцятій, але я розумію, що це прикро."],
      ['C', "Donc je n'ai aucun recours ?", "Тобто я ніяк не можу це оскаржити?"],
      ['B', "Si, vous en avez. Vous pouvez d'abord adresser une réclamation écrite à notre service réclamations. S'il maintient sa décision, ou sans réponse sous deux mois, vous pourrez saisir le médiateur de l'assurance, gratuitement.", "Можете. Спершу можна надіслати письмову скаргу до нашої служби скарг. Якщо вона залишить рішення в силі або не відповість протягом двох місяців, ви зможете безкоштовно звернутися до страхового медіатора."],
      ['C', "Vous pensez que j'ai une chance ?", "Думаєте, у мене є шанс?"],
      ['B', "Je ne peux pas vous le garantir. En revanche, je vous propose de revoir votre contrat ensemble, pour que vous soyez mieux protégé à l'avenir.", "Гарантувати не можу. Натомість пропоную разом переглянути ваш договір, щоб надалі ви були краще захищені."],
      ['C', "D'accord, faisons-le. Mais je vais quand même écrire au service réclamations.", "Гаразд, давайте. Але я все одно напишу до служби скарг."],
      ['B', "C'est votre droit, et je vais vous aider à rédiger le courrier.", "Це ваше право, і я допоможу вам скласти лист."]
    ],
    words: [["inadmissible", "неприпустимий"], ["motivé", "обґрунтований"], ["l'exclusion de garantie", "виключення з покриття"], ["les parties communes", "місця спільного користування"], ["l'antivol", "протиугінний замок"], ["le recours", "спосіб оскарження"], ["saisir le médiateur", "звернутися до медіатора"], ["rédiger le courrier", "скласти лист"]],
    tasks: [
      {
        c: "C'est inadmissible, vous refusez de me rembourser !", cu: "Це неприпустимо, ви відмовляєтеся мені відшкодувати!",
        opts: ["Je comprends votre colère. Permettez-moi de regarder votre dossier.", "Calmez-vous, Monsieur, ce n'est pas grave.", "Ce n'est pas ma faute, c'est l'assureur."],
        m: "Je comprends tout à fait votre colère. Permettez-moi de regarder votre dossier pour vous expliquer la décision.", mu: "Я цілком розумію ваш гнів. Дозвольте переглянути вашу справу, щоб пояснити рішення.",
        k: [["comprends"], ["dossier", "regarder", "verifier"], ["expliquer", "decision", "permettez"]]
      },
      {
        c: "Personne ne m'a expliqué cette condition !", cu: "Ніхто не пояснив мені цієї умови!",
        opts: ["Je regrette que ce ne soit pas clair. Elle figure dans les conditions générales.", "C'est votre problème, il fallait lire.", "Ce n'est pas vrai."],
        m: "Je regrette que cette condition ne vous ait pas été expliquée clairement. Elle figure dans les conditions générales, mais je comprends votre frustration.", mu: "Шкодую, що цю умову вам не пояснили чітко. Вона є в загальних умовах, але я розумію ваше розчарування.",
        k: [["regrette", "desole"], ["conditions generales", "contrat"], ["comprends"]]
      },
      {
        c: "Donc je n'ai aucun recours ?", cu: "Тобто я ніяк не можу це оскаржити?",
        opts: ["Si : vous pouvez faire une réclamation écrite, puis saisir le médiateur.", "Non, aucun recours n'est possible.", "Vous devez aller au tribunal immédiatement."],
        m: "Si, vous pouvez adresser une réclamation écrite à notre service réclamations, puis saisir le médiateur de l'assurance.", mu: "Можете: надішліть письмову скаргу до служби скарг, а потім зверніться до страхового медіатора.",
        k: [["reclamation"], ["mediateur"], ["si", "oui", "pouvez"]]
      }
    ]
  },

  // ---------- LIMITS ----------
  {
    id: 'v-limits-A1', t: 'limits', l: 'A1', b: 'julien', c: 'mendes', set: 'agence',
    title: 'Le distributeur refuse', ua: 'Банкомат відмовляє',
    desc: 'Клієнтка не може зняти 600 € — тижневий ліміт 500 €.',
    lines: [
      ['C', "Bonjour. Je veux retirer six cents euros, mais le distributeur refuse.", "Добрий день. Я хочу зняти шістсот євро, але банкомат відмовляє."],
      ['B', "Bonjour Madame. Je regarde votre carte… Votre plafond de retrait est de cinq cents euros par semaine.", "Добрий день, пані. Дивлюся вашу картку… Ваш ліміт на зняття — п'ятсот євро на тиждень."],
      ['C', "Ah, je comprends. Mais j'ai besoin de six cents euros aujourd'hui.", "А, зрозуміло. Але мені потрібно шістсот євро сьогодні."],
      ['B', "Vous pouvez retirer l'argent ici, au guichet, avec votre pièce d'identité.", "Ви можете зняти гроші тут, у касі, з документом."],
      ['C', "Ah, super ! Voici ma carte d'identité.", "О, супер! Ось моя ID-картка."],
      ['B', "Merci. Voici vos six cents euros.", "Дякую. Ось ваші шістсот євро."],
      ['C', "Merci beaucoup !", "Щиро дякую!"]
    ],
    words: [["le plafond de retrait", "ліміт на зняття"], ["refuser", "відмовляти"], ["par semaine", "на тиждень"], ["avoir besoin de", "потребувати"], ["au guichet", "у касі"]],
    tasks: [
      {
        c: "Le distributeur refuse ma carte.", cu: "Банкомат не приймає мою картку.",
        opts: ["Je regarde votre carte… Votre plafond de retrait est peut-être atteint.", "Votre carte est très jolie.", "Je voudrais un café."],
        m: "Je regarde. Votre plafond de retrait est peut-être atteint.", mu: "Дивлюся. Можливо, ви досягли ліміту на зняття.",
        k: [["regarde", "verifie"], ["plafond", "limite"]]
      },
      {
        c: "J'ai besoin de six cents euros aujourd'hui.", cu: "Мені потрібно шістсот євро сьогодні.",
        opts: ["Vous pouvez retirer l'argent au guichet avec votre pièce d'identité.", "Revenez dans un mois.", "Ce n'est pas mon problème."],
        m: "Vous pouvez retirer l'argent au guichet avec votre pièce d'identité.", mu: "Ви можете зняти гроші в касі з документом.",
        k: [["guichet", "augmenter"], ["piece d'identite", "carte d'identite"], ["pouvez", "possible"]]
      }
    ]
  },
  {
    id: 'v-limits-A2', t: 'limits', l: 'A2', b: 'nadia', c: 'vasseur', set: 'phone',
    title: 'Le plafond de virement', ua: 'Ліміт на перекази',
    desc: 'Телефонна розмова: застосунок не пропускає переказ 8 000 €. Консультантка перевіряє особу й тимчасово підвищує ліміт.',
    lines: [
      ['B', "Banque Mirabelle, Nadia Benali, bonjour.", "Банк «Мірабель», Надя Беналі, добрий день."],
      ['C', "Bonjour Madame. Je voudrais faire un virement de huit mille euros, mais l'application refuse.", "Добрий день. Я хочу зробити переказ на вісім тисяч євро, але застосунок не пропускає."],
      ['B', "Je vais vérifier. Pouvez-vous me confirmer votre date de naissance ?", "Я перевірю. Можете підтвердити вашу дату народження?"],
      ['C', "Le quatorze mars mille neuf cent quatre-vingt-huit.", "Чотирнадцяте березня тисяча дев'ятсот вісімдесят восьмого."],
      ['B', "Merci, Monsieur Vasseur. Votre plafond de virement est de trois mille euros par jour. C'est pour ça que l'opération est refusée.", "Дякую, пане Вассер. Ваш ліміт на перекази — три тисячі євро на день. Тому операцію й відхилено."],
      ['C', "Est-ce que vous pouvez l'augmenter ?", "Ви можете його підвищити?"],
      ['B', "Oui, je peux l'augmenter temporairement, pour quarante-huit heures. Vous allez recevoir une notification pour valider le changement.", "Так, я можу тимчасово підвищити його на сорок вісім годин. Ви отримаєте сповіщення, щоб підтвердити зміну."],
      ['C', "C'est bon, j'ai validé.", "Готово, я підтвердив."],
      ['B', "Parfait. Vous pouvez refaire le virement maintenant. Après quarante-huit heures, le plafond reviendra à trois mille euros.", "Чудово. Тепер можете повторити переказ. Через сорок вісім годин ліміт повернеться до трьох тисяч євро."],
      ['C', "Très bien, merci pour votre aide !", "Дуже добре, дякую за допомогу!"]
    ],
    words: [["le plafond de virement", "ліміт на перекази"], ["confirmer", "підтвердити"], ["temporairement", "тимчасово"], ["la notification", "сповіщення"], ["valider", "підтвердити (в застосунку)"], ["revenir à", "повернутися до"]],
    tasks: [
      {
        c: "Mon virement de huit mille euros est refusé.", cu: "Мій переказ на вісім тисяч євро відхилено.",
        opts: ["Je vais vérifier. Votre plafond de virement est peut-être trop bas.", "C'est normal, les virements sont interdits.", "Envoyez plutôt un chèque."],
        m: "Je vais vérifier. Pouvez-vous me confirmer votre date de naissance ? Votre plafond de virement est peut-être trop bas.", mu: "Я перевірю. Можете підтвердити дату народження? Можливо, ваш ліміт на перекази занизький.",
        k: [["verifier", "regarder"], ["plafond", "limite"]]
      },
      {
        c: "Vous pouvez augmenter mon plafond ?", cu: "Ви можете підвищити мій ліміт?",
        opts: ["Oui, temporairement. Vous allez recevoir une notification pour valider.", "Non, jamais.", "Oui, à un million d'euros."],
        m: "Oui, je peux l'augmenter temporairement. Vous allez recevoir une notification pour valider le changement.", mu: "Так, я можу тимчасово його підвищити. Ви отримаєте сповіщення для підтвердження.",
        k: [["oui", "bien sur"], ["temporairement", "augmenter"], ["notification", "valider"]]
      }
    ]
  },

  // ---------- RISKS ----------
  {
    id: 'v-risks-A2', t: 'risks', l: 'A2', b: 'thomas', c: 'petit', set: 'agence',
    title: 'J\'ai cliqué sur un lien', ua: 'Я натиснув на посилання',
    desc: 'Клієнт ввів дані картки на фішинговому сайті. Консультант діє швидко: блокування, перевірка операцій, нова картка.',
    lines: [
      ['C', "Bonjour. J'ai reçu un e-mail des impôts. J'ai cliqué sur le lien et j'ai donné les numéros de ma carte.", "Добрий день. Я отримав лист нібито з податкової. Натиснув на посилання й ввів номер своєї картки."],
      ['B', "Bonjour Monsieur Petit. Merci d'être venu tout de suite. Malheureusement, c'est sûrement un e-mail de phishing.", "Добрий день, пане Петі. Дякую, що прийшли одразу. На жаль, це майже напевно фішинговий лист."],
      ['C', "Oh non ! Qu'est-ce que je dois faire ?", "О ні! Що мені робити?"],
      ['B', "Je vais faire opposition sur votre carte immédiatement. Ensuite, nous allons vérifier les dernières opérations.", "Я негайно заблокую вашу картку. Потім ми перевіримо останні операції."],
      ['C', "Il y a des paiements bizarres ?", "Там є дивні платежі?"],
      ['B', "Je vois un paiement de quatre cent quatre-vingt-dix euros en attente, ce matin. C'est vous ?", "Бачу платіж на чотириста дев'яносто євро в очікуванні, сьогодні зранку. Це ви?"],
      ['C', "Non, ce n'est pas moi !", "Ні, це не я!"],
      ['B', "D'accord. Je le signale comme frauduleux. Vous allez recevoir une nouvelle carte. Changez aussi le mot de passe de votre messagerie.", "Зрозуміло. Позначаю його як шахрайський. Ви отримаєте нову картку. Також змініть пароль від електронної пошти."],
      ['C', "Merci. Je ne vais plus jamais cliquer sur un lien comme ça.", "Дякую. Я більше ніколи не натискатиму на такі посилання."]
    ],
    words: [["le phishing / l'hameçonnage", "фішинг"], ["cliquer sur un lien", "натиснути на посилання"], ["faire opposition", "заблокувати картку"], ["en attente", "в очікуванні"], ["frauduleux", "шахрайський"], ["la messagerie", "електронна пошта"]],
    tasks: [
      {
        c: "J'ai cliqué sur un lien et j'ai donné les numéros de ma carte.", cu: "Я натиснув на посилання й ввів номер картки.",
        opts: ["Je vais faire opposition sur votre carte immédiatement.", "Ce n'est pas grave, ne faites rien.", "Donnez-moi aussi votre code, s'il vous plaît."],
        m: "Je vais faire opposition sur votre carte tout de suite, puis nous allons vérifier vos dernières opérations.", mu: "Я негайно заблокую вашу картку, а потім ми перевіримо останні операції.",
        k: [["opposition", "bloquer"], ["carte"], ["verifier", "operations"]]
      },
      {
        c: "Ce paiement, ce n'est pas moi !", cu: "Цей платіж — не мій!",
        opts: ["D'accord, je le signale comme frauduleux.", "Alors vous devez le payer.", "Vous êtes sûr ? Réfléchissez bien."],
        m: "D'accord, je le signale comme frauduleux. Vous allez recevoir une nouvelle carte.", mu: "Зрозуміло, позначаю його як шахрайський. Ви отримаєте нову картку.",
        k: [["signale", "conteste", "declare"], ["frauduleux", "fraude"], ["nouvelle carte"]]
      }
    ]
  },
  {
    id: 'v-risks-B1', t: 'risks', l: 'B1', b: 'julien', c: 'petit', set: 'agence',
    title: 'Un placement trop risqué', ua: 'Надто ризикована інвестиція',
    desc: 'Пенсіонер хоче вкласти всі заощадження в акції. Консультант виконує обов\'язок консультування: аналізує профіль, пояснює ризик і пропонує поступовий підхід.',
    lines: [
      ['C', "Bonjour. Mon neveu m'a dit que les actions rapportaient beaucoup. Je voudrais placer toutes mes économies en bourse : quatre-vingt mille euros.", "Добрий день. Мій племінник сказав, що акції приносять багато. Я хочу вкласти всі заощадження в біржу — вісімдесят тисяч євро."],
      ['B', "Bonjour Monsieur Petit. Je comprends que le rendement vous intéresse. Avant tout, j'aimerais mieux connaître votre situation. Ces économies représentent-elles l'essentiel de votre patrimoine ?", "Добрий день, пане Петі. Розумію, що вас цікавить дохідність. Насамперед я хотів би краще зрозуміти вашу ситуацію. Ці заощадження — основна частина вашого майна?"],
      ['C', "Oui, c'est tout ce que j'ai, en dehors de ma retraite.", "Так, це все, що я маю, окрім пенсії."],
      ['B', "Et en cas de besoin, par exemple pour des travaux ou des frais de santé, sur quelle somme pourriez-vous compter ?", "А в разі потреби — наприклад, на ремонт чи лікування — на яку суму ви могли б розраховувати?"],
      ['C', "Eh bien… sur ces économies, justement.", "Ну… якраз на ці заощадження."],
      ['B', "Dans ce cas, je dois être honnête avec vous : placer la totalité de cette somme en actions ne correspondrait pas à votre profil. Les marchés peuvent baisser de vingt ou trente pour cent en quelques mois, et vous pourriez être obligé de vendre au mauvais moment.", "У такому разі я мушу бути з вами чесним: вкласти всю суму в акції не відповідало б вашому профілю. Ринки можуть упасти на двадцять-тридцять відсотків за кілька місяців, і вам довелося б продавати в невдалий момент."],
      ['C', "Mais vous ne pouvez pas m'empêcher d'investir !", "Але ви не можете заборонити мені інвестувати!"],
      ['B', "Vous avez raison, la décision vous appartient. Mon rôle est de vous informer et de vous conseiller. D'ailleurs, le questionnaire que vous avez rempli indique un profil prudent.", "Ви маєте рацію, рішення за вами. Моя роль — інформувати й консультувати вас. До речі, анкета, яку ви заповнили, показує обережний профіль."],
      ['C', "Alors, que me proposez-vous ?", "То що ви мені пропонуєте?"],
      ['B', "Je vous suggérerais de garder une épargne de précaution disponible, puis d'investir progressivement une part limitée, par exemple dix à quinze pour cent, sur des supports diversifiés.", "Я запропонував би зберегти доступний резервний фонд, а потім поступово інвестувати обмежену частку — наприклад, десять-п'ятнадцять відсотків — у диверсифіковані інструменти."],
      ['C', "Progressivement… c'est-à-dire ?", "Поступово… це як?"],
      ['B', "Par exemple, avec un versement programmé chaque mois. Cela permet de lisser le prix d'achat et de limiter le risque d'investir au plus haut.", "Наприклад, регулярним щомісячним внеском. Це дає змогу усереднити ціну купівлі й зменшити ризик вкластися на піку."],
      ['C', "C'est plus raisonnable, en effet. Je vais en parler à mon neveu.", "Справді, так розумніше. Поговорю з племінником."]
    ],
    words: [["rapporter", "приносити дохід"], ["la bourse", "біржа"], ["le patrimoine", "майно, статки"], ["l'épargne de précaution", "резервний фонд"], ["le profil prudent", "обережний профіль"], ["diversifié", "диверсифікований"], ["lisser", "усереднити, згладити"], ["le versement programmé", "регулярний внесок"]],
    tasks: [
      {
        c: "Je veux placer toutes mes économies en bourse.", cu: "Я хочу вкласти всі заощадження в біржу.",
        opts: ["Je comprends. Avant tout, j'aimerais mieux connaître votre situation et vos besoins.", "Excellente idée, signez ici.", "C'est interdit pour les retraités."],
        m: "Je comprends que le rendement vous intéresse. Avant tout, j'aimerais mieux connaître votre situation et vos besoins.", mu: "Розумію, що вас цікавить дохідність. Насамперед я хотів би краще зрозуміти вашу ситуацію й потреби.",
        k: [["comprends"], ["situation", "besoins", "profil", "connaitre"]]
      },
      {
        c: "Vous ne pouvez pas m'empêcher d'investir !", cu: "Ви не можете заборонити мені інвестувати!",
        opts: ["Vous avez raison, la décision vous appartient. Mon rôle est de vous informer et de vous conseiller.", "Si, je peux tout bloquer.", "Faites ce que vous voulez, ça m'est égal."],
        m: "Vous avez raison, la décision vous appartient. Mon rôle est de vous informer des risques et de vous conseiller.", mu: "Ви маєте рацію, рішення за вами. Моя роль — інформувати про ризики й консультувати вас.",
        k: [["raison", "decision"], ["informer", "conseiller", "role"], ["risque"]]
      }
    ]
  },

  // ---------- DEPOSITS ----------
  {
    id: 'v-deposits-A1', t: 'deposits', l: 'A1', b: 'camille', c: 'caron', set: 'agence',
    title: 'Déposer un chèque', ua: 'Внесення чека',
    desc: 'Клієнтка вносить чек на Livret A, але забула його підписати.',
    lines: [
      ['C', "Bonjour. Je voudrais déposer de l'argent sur mon Livret A.", "Добрий день. Я хотіла б покласти гроші на свій Livret A."],
      ['B', "Bonjour Madame. En espèces ou par chèque ?", "Добрий день, пані. Готівкою чи чеком?"],
      ['C', "Par chèque. Voici un chèque de deux cents euros.", "Чеком. Ось чек на двісті євро."],
      ['B', "Merci. Vous avez signé le chèque au dos ?", "Дякую. Ви підписали чек на звороті?"],
      ['C', "Ah non ! Pardon.", "Ой, ні! Перепрошую."],
      ['B', "Pas de problème. Signez ici, s'il vous plaît.", "Без проблем. Підпишіть тут, будь ласка."],
      ['C', "Voilà. C'est pour mon Livret A, s'il vous plaît.", "Ось. Це на мій Livret A, будь ласка."],
      ['B', "C'est noté. L'argent sera sur votre livret dans deux jours.", "Записала. Гроші будуть на вашому рахунку через два дні."],
      ['C', "Merci, au revoir !", "Дякую, до побачення!"]
    ],
    words: [["déposer", "внести, покласти"], ["en espèces", "готівкою"], ["le chèque", "чек"], ["au dos", "на звороті"], ["C'est noté.", "Записала / прийнято."], ["dans deux jours", "через два дні"]],
    tasks: [
      {
        c: "Je voudrais déposer de l'argent.", cu: "Я хотіла б внести гроші.",
        opts: ["Bien sûr. En espèces ou par chèque ?", "Je voudrais un café.", "Votre carte est bloquée."],
        m: "Bien sûr, Madame. En espèces ou par chèque ?", mu: "Звісно, пані. Готівкою чи чеком?",
        k: [["especes", "cheque"], ["bien sur", "d'accord", "oui"]]
      },
      {
        c: "Je n'ai pas signé le chèque.", cu: "Я не підписала чек.",
        opts: ["Pas de problème, signez au dos, s'il vous plaît.", "Alors, au revoir.", "Le chèque est refusé pour toujours."],
        m: "Pas de problème. Signez au dos, s'il vous plaît.", mu: "Без проблем. Підпишіть на звороті, будь ласка.",
        k: [["pas de probleme", "pas grave", "pas grave"], ["signez", "signer"]]
      }
    ]
  },
  {
    id: 'v-deposits-A2', t: 'deposits', l: 'A2', b: 'thomas', c: 'kovalenko', set: 'agence',
    title: 'Le Livret A est plein', ua: 'Livret A заповнений',
    desc: 'Клієнтка досягла ліміту Livret A. Консультант пропонує LDDS і регулярне поповнення.',
    lines: [
      ['C', "Bonjour. Je ne peux plus mettre d'argent sur mon Livret A. Pourquoi ?", "Добрий день. Я більше не можу покласти гроші на свій Livret A. Чому?"],
      ['B', "Bonjour Madame Kovalenko. Je regarde… Votre Livret A a atteint son plafond : vingt-deux mille neuf cent cinquante euros.", "Добрий день, пані Коваленко. Дивлюся… Ваш Livret A досяг ліміту: двадцять дві тисячі дев'ятсот п'ятдесят євро."],
      ['C', "Ah, il est plein ! Mais les intérêts continuent ?", "А, він заповнений! Але відсотки нараховуються далі?"],
      ['B', "Oui, les intérêts sont ajoutés chaque année, même au-dessus du plafond.", "Так, відсотки додаються щороку, навіть понад ліміт."],
      ['C', "Et où est-ce que je peux mettre mes nouvelles économies ?", "А куди я можу покласти нові заощадження?"],
      ['B', "Vous pouvez ouvrir un LDDS. Il fonctionne comme le Livret A : même taux, pas d'impôts, et l'argent reste disponible.", "Ви можете відкрити LDDS. Він працює як Livret A: та сама ставка, без податків, і гроші залишаються доступними."],
      ['C', "Et le plafond du LDDS ?", "А який ліміт у LDDS?"],
      ['B', "Douze mille euros. Si vous voulez, je l'ouvre aujourd'hui et je mets en place un virement automatique de deux cents euros par mois.", "Дванадцять тисяч євро. Якщо хочете, я відкрию його сьогодні й налаштую автоматичний переказ двохсот євро на місяць."],
      ['C', "Oui, c'est parfait. Merci pour le conseil !", "Так, чудово. Дякую за пораду!"]
    ],
    words: [["atteindre", "досягти"], ["plein", "заповнений, повний"], ["au-dessus de", "понад"], ["le LDDS", "ощадний рахунок LDDS"], ["fonctionner", "працювати, діяти"], ["le virement automatique", "автоматичний переказ"]],
    tasks: [
      {
        c: "Je ne peux plus verser d'argent sur mon Livret A.", cu: "Я більше не можу поповнити свій Livret A.",
        opts: ["Votre Livret A a sans doute atteint son plafond. Je vérifie.", "Votre livret est fermé pour toujours.", "Il faut payer une commission."],
        m: "Je vérifie… Votre Livret A a atteint son plafond de vingt-deux mille neuf cent cinquante euros.", mu: "Перевіряю… Ваш Livret A досяг ліміту в 22 950 євро.",
        k: [["plafond", "limite"], ["verifie", "regarde"]]
      },
      {
        c: "Où est-ce que je peux mettre mes nouvelles économies ?", cu: "Куди я можу покласти нові заощадження?",
        opts: ["Je vous propose d'ouvrir un LDDS : même taux, sans impôts et disponible.", "Gardez l'argent chez vous.", "Achetez des actions très risquées."],
        m: "Je vous propose d'ouvrir un LDDS. Il fonctionne comme le Livret A : même taux, pas d'impôts et argent disponible.", mu: "Пропоную відкрити LDDS. Він працює як Livret A: та сама ставка, без податків, гроші доступні.",
        k: [["ldds", "livret"], ["propose", "conseille", "pouvez"], ["impots", "disponible", "taux"]]
      }
    ]
  },

  // ---------- Additional scenes: one video per topic and level ----------
  {
    id: 'v-accounts-A2', t: 'accounts', l: 'A2', b: 'camille', c: 'vasseur', set: 'agence',
    title: 'Ouvrir un compte joint', ua: 'Відкриття спільного рахунку',
    desc: 'Клієнт хоче відкрити спільний рахунок із партнеркою. Консультантка пояснює документи та спільну відповідальність.',
    lines: [
      ['C', "Bonjour. Ma compagne et moi, nous voulons ouvrir un compte joint.", "Добрий день. Ми з моєю партнеркою хочемо відкрити спільний рахунок."],
      ['B', "Bonjour Monsieur Vasseur. Très bonne idée. C'est pour les dépenses de la maison ?", "Добрий день, пане Вассер. Чудова ідея. Це для домашніх витрат?"],
      ['C', "Oui, pour le loyer, les courses et les factures.", "Так, для оренди, продуктів і рахунків."],
      ['B', "D'accord. Pour ouvrir un compte joint, vous devez venir tous les deux, avec vos pièces d'identité et un justificatif de domicile.", "Гаразд. Щоб відкрити спільний рахунок, ви маєте прийти вдвох, з документами, що посвідчують особу, і підтвердженням адреси."],
      ['C', "Et chacun peut utiliser le compte ?", "І кожен може користуватися рахунком?"],
      ['B', "Oui. Avec un compte joint, chaque titulaire peut faire des paiements et des virements seul. Mais attention : vous êtes responsables ensemble des dettes du compte.", "Так. Зі спільним рахунком кожен власник може сам робити платежі й перекази. Але увага: за борги на рахунку ви відповідаєте разом."],
      ['C', "Ah, c'est important. Et on a chacun une carte ?", "О, це важливо. А картка буде в кожного?"],
      ['B', "Oui, vous pouvez avoir deux cartes. La deuxième carte coûte vingt euros par an.", "Так, ви можете мати дві картки. Друга картка коштує двадцять євро на рік."],
      ['C', "Très bien. On peut prendre rendez-vous samedi ?", "Дуже добре. Можна записатися на суботу?"],
      ['B', "Bien sûr. Samedi à dix heures, ça vous va ?", "Звісно. У суботу о десятій вам підходить?"],
      ['C', "Parfait, merci !", "Чудово, дякую!"]
    ],
    words: [["le compte joint", "спільний рахунок"], ["la compagne", "партнерка, супутниця"], ["les courses", "покупки (продукти)"], ["tous les deux", "удвох, обидва"], ["le titulaire", "власник рахунку"], ["être responsables ensemble", "відповідати разом (солідарно)"], ["prendre rendez-vous", "записатися на зустріч"]],
    tasks: [
      {
        c: "Nous voulons ouvrir un compte joint.", cu: "Ми хочемо відкрити спільний рахунок.",
        opts: ["Très bien. Vous devez venir tous les deux avec vos pièces d'identité.", "Le compte joint est interdit en France.", "Vous devez d'abord acheter une maison."],
        m: "Très bonne idée. Pour l'ouvrir, vous devez venir tous les deux avec vos pièces d'identité et un justificatif de domicile.", mu: "Чудова ідея. Щоб його відкрити, ви маєте прийти вдвох із документами та підтвердженням адреси.",
        k: [["tous les deux", "ensemble"], ["pieces d'identite", "piece d'identite", "passeport"], ["justificatif", "domicile"]]
      },
      {
        c: "Chacun peut utiliser le compte ?", cu: "Кожен може користуватися рахунком?",
        opts: ["Oui, chaque titulaire peut payer seul, mais vous êtes responsables ensemble des dettes.", "Non, seulement la première personne.", "Oui, et la banque paie les dettes."],
        m: "Oui, chaque titulaire peut faire des paiements seul. Mais attention : vous êtes responsables ensemble des dettes du compte.", mu: "Так, кожен власник може сам робити платежі. Але увага: за борги на рахунку ви відповідаєте разом.",
        k: [["oui"], ["titulaire", "chacun"], ["responsables", "dettes"]]
      }
    ]
  },
  {
    id: 'v-cards-A2', t: 'cards', l: 'A2', b: 'nadia', c: 'caron', set: 'phone',
    title: 'Un paiement en ligne refusé', ua: 'Онлайн-платіж відхилено',
    desc: 'Телефонна розмова: клієнтка не може оплатити квитки на сайті. Консультантка перевіряє особу, вмикає онлайн-платежі й пояснює підтвердження в застосунку.',
    lines: [
      ['B', "Banque Mirabelle, Nadia Benali, bonjour.", "Банк «Мірабель», Надя Беналі, добрий день."],
      ['C', "Bonjour Madame. J'essaie d'acheter des billets d'avion sur internet, mais mon paiement est refusé.", "Добрий день. Я намагаюся купити авіаквитки в інтернеті, але платіж відхиляють."],
      ['B', "Je vais regarder. Pouvez-vous me donner votre nom et votre date de naissance ?", "Я подивлюся. Назвіть, будь ласка, ваше ім'я та дату народження."],
      ['C', "Inès Caron, le deux juillet mille neuf cent quatre-vingt-quinze.", "Інес Карон, друге липня тисяча дев'ятсот дев'яносто п'ятого."],
      ['B', "Merci, Madame Caron. Je vois le problème : les paiements en ligne sont désactivés sur votre carte.", "Дякую, пані Карон. Бачу проблему: онлайн-платежі на вашій картці вимкнені."],
      ['C', "Ah bon ? Je ne savais pas.", "Справді? Я не знала."],
      ['B', "Vous pouvez les activer dans l'application, dans la rubrique « Ma carte ». Je peux aussi le faire maintenant, si vous voulez.", "Ви можете ввімкнути їх у застосунку, у розділі «Моя картка». Я також можу зробити це зараз, якщо хочете."],
      ['C', "Oui, s'il vous plaît.", "Так, будь ласка."],
      ['B', "C'est fait. Quand vous allez payer, vous allez recevoir une notification. Il faudra valider le paiement dans l'application.", "Готово. Коли будете платити, ви отримаєте сповіщення. Потрібно буде підтвердити платіж у застосунку."],
      ['C', "D'accord. Le montant est de mille deux cents euros. Ça passe ?", "Гаразд. Сума — тисяча двісті євро. Пройде?"],
      ['B', "Votre plafond de paiement est de mille cinq cents euros, donc c'est bon.", "Ваш ліміт на оплату — тисяча п'ятсот євро, тож усе гаразд."],
      ['C', "Parfait, merci beaucoup !", "Чудово, щиро дякую!"]
    ],
    words: [["le billet d'avion", "авіаквиток"], ["refusé", "відхилений"], ["désactivé", "вимкнений"], ["activer", "увімкнути, активувати"], ["la rubrique", "розділ (у застосунку)"], ["valider le paiement", "підтвердити платіж"], ["Ça passe ?", "Пройде? (розм.)"]],
    tasks: [
      {
        c: "Mon paiement sur internet est refusé.", cu: "Мій платіж в інтернеті відхилено.",
        opts: ["Je vais regarder. Pouvez-vous me confirmer votre nom et votre date de naissance ?", "Achetez vos billets à l'aéroport.", "Votre compte est fermé."],
        m: "Je vais vérifier. Pouvez-vous me confirmer votre nom et votre date de naissance, s'il vous plaît ?", mu: "Я перевірю. Можете підтвердити ваше ім'я та дату народження, будь ласка?",
        k: [["regarder", "verifier", "vois"], ["nom", "date de naissance", "identite"]]
      },
      {
        c: "Comment je peux activer les paiements en ligne ?", cu: "Як мені ввімкнути онлайн-платежі?",
        opts: ["Vous pouvez les activer dans l'application, ou je peux le faire maintenant.", "C'est impossible avec cette carte.", "Il faut attendre un an."],
        m: "Vous pouvez les activer dans l'application, dans la rubrique « Ma carte ». Je peux aussi le faire maintenant, si vous voulez.", mu: "Ви можете ввімкнути їх у застосунку, у розділі «Моя картка». Я також можу зробити це зараз, якщо хочете.",
        k: [["application"], ["activer"], ["maintenant", "je peux"]]
      }
    ]
  },
  {
    id: 'v-credits-A1', t: 'credits', l: 'A1', b: 'thomas', c: 'shevchuk', set: 'agence',
    title: 'Un prêt étudiant', ua: 'Студентський кредит',
    desc: 'Студентка хоче позичити гроші на навчання. Прості запитання: сума, ставка, поручитель, документи.',
    lines: [
      ['C', "Bonjour. Je suis étudiante. Je voudrais un prêt pour mes études.", "Добрий день. Я студентка. Я хотіла б кредит на навчання."],
      ['B', "Bonjour Madame. Bien sûr, nous avons un prêt étudiant. Combien voulez-vous emprunter ?", "Добрий день, пані. Звісно, у нас є студентський кредит. Скільки ви хочете позичити?"],
      ['C', "Cinq mille euros.", "П'ять тисяч євро."],
      ['B', "D'accord. Le taux est de deux pour cent. Vous remboursez après vos études.", "Гаразд. Ставка — два відсотки. Ви погашаєте після навчання."],
      ['C', "Super ! Il faut un garant ?", "Супер! Потрібен поручитель?"],
      ['B', "En général, oui. Vos parents, par exemple.", "Зазвичай так. Наприклад, ваші батьки."],
      ['C', "Mon père peut être garant.", "Мій тато може бути поручителем."],
      ['B', "Parfait. Apportez votre carte d'étudiante et votre pièce d'identité.", "Чудово. Принесіть студентський квиток і документ, що посвідчує особу."],
      ['C', "Merci, je reviens lundi.", "Дякую, я прийду в понеділок."],
      ['B', "Très bien. À lundi !", "Дуже добре. До понеділка!"]
    ],
    words: [["l'étudiante / l'étudiant", "студентка / студент"], ["le prêt étudiant", "студентський кредит"], ["les études", "навчання"], ["le garant", "поручитель"], ["apporter", "принести"], ["la carte d'étudiant", "студентський квиток"]],
    tasks: [
      {
        c: "Je voudrais un prêt pour mes études.", cu: "Я хотіла б кредит на навчання.",
        opts: ["Bien sûr. Combien voulez-vous emprunter ?", "Le distributeur est devant l'agence.", "Non, les étudiants ne peuvent pas."],
        m: "Bien sûr, nous avons un prêt étudiant. Combien voulez-vous emprunter ?", mu: "Звісно, у нас є студентський кредит. Скільки ви хочете позичити?",
        k: [["bien sur", "d'accord", "oui"], ["combien", "montant"]]
      },
      {
        c: "Il faut un garant ?", cu: "Потрібен поручитель?",
        opts: ["En général, oui. Vos parents, par exemple.", "Oui, il faut une voiture.", "Je ne sais pas, au revoir."],
        m: "En général, oui. Vos parents peuvent être garants, par exemple.", mu: "Зазвичай так. Наприклад, поручителями можуть бути ваші батьки.",
        k: [["oui", "en general"], ["parents", "pere", "mere", "garant"]]
      }
    ]
  },
  {
    id: 'v-insurance-A1', t: 'insurance', l: 'A1', b: 'julien', c: 'lemaire', set: 'agence',
    title: 'Un petit accident de voiture', ua: 'Невелика автомобільна аварія',
    desc: 'Клієнт потрапив у невелику аварію. Консультант спершу питає про самопочуття, а потім приймає спільний акт (constat).',
    lines: [
      ['C', "Bonjour. J'ai eu un petit accident avec ma voiture ce matin.", "Добрий день. Сьогодні зранку я потрапив у невелику аварію на машині."],
      ['B', "Oh ! Vous allez bien ?", "О! З вами все гаразд?"],
      ['C', "Oui, ça va. Mais la voiture est abîmée.", "Так, усе добре. Але машина пошкоджена."],
      ['B', "D'accord. Il y a une autre voiture ?", "Зрозуміло. Там була інша машина?"],
      ['C', "Oui. Nous avons rempli un constat.", "Так. Ми заповнили спільний акт."],
      ['B', "Très bien. Vous avez le constat avec vous ?", "Дуже добре. Акт у вас із собою?"],
      ['C', "Oui, le voilà.", "Так, ось він."],
      ['B', "Merci. Je l'envoie à l'assurance aujourd'hui.", "Дякую. Я сьогодні надішлю його до страхової."],
      ['C', "Et je dois payer ?", "А мені треба платити?"],
      ['B', "Vous êtes assuré tous risques. Il y a peut-être une petite franchise. Un expert va regarder la voiture.", "У вас повне страхування. Можливо, буде невелика франшиза. Експерт огляне машину."],
      ['C', "Merci beaucoup, Monsieur.", "Щиро дякую."]
    ],
    words: [["l'accident", "аварія"], ["Vous allez bien ?", "З вами все гаразд?"], ["abîmé", "пошкоджений"], ["le constat (amiable)", "спільний акт про ДТП (європротокол)"], ["envoyer", "надіслати"], ["la franchise", "франшиза"], ["l'expert", "експерт-оцінювач"]],
    tasks: [
      {
        c: "J'ai eu un accident avec ma voiture.", cu: "Я потрапив в аварію на машині.",
        opts: ["Oh ! Vous allez bien ?", "Félicitations !", "Votre carte est bloquée."],
        m: "Oh, je suis désolé ! Vous allez bien ?", mu: "Ох, мені шкода! З вами все гаразд?",
        k: [["allez bien", "blesse", "ca va"], ["desole", "oh"]]
      },
      {
        c: "Voici le constat.", cu: "Ось акт.",
        opts: ["Merci. Je l'envoie à l'assurance aujourd'hui.", "Je ne prends pas les papiers.", "Revenez dans un an."],
        m: "Merci. Je l'envoie à l'assurance aujourd'hui.", mu: "Дякую. Я сьогодні надішлю його до страхової.",
        k: [["merci"], ["envoie", "envoyer", "transmets"], ["assurance", "assureur"]]
      }
    ]
  },
  {
    id: 'v-limits-B1', t: 'limits', l: 'B1', b: 'camille', c: 'robin', set: 'agence',
    title: 'Relever le plafond de façon permanente', ua: 'Постійне підвищення ліміту',
    desc: 'Клієнт просить подвоїти ліміт картки. Консультантка з\'ясовує потребу, оцінює ризик дебету й пропонує компроміс.',
    lines: [
      ['C', "Bonjour Madame. Je voudrais passer le plafond de ma carte de mille cinq cents à trois mille euros par mois, de façon permanente.", "Добрий день. Я хотів би підвищити ліміт картки з тисячі п'ятисот до трьох тисяч євро на місяць — назавжди."],
      ['B', "Bonjour Monsieur Robin. Je comprends. Puis-je vous demander pourquoi vous avez besoin d'un plafond plus élevé ?", "Добрий день, пане Робен. Розумію. Можу запитати, навіщо вам вищий ліміт?"],
      ['C', "Je voyage beaucoup pour mon travail. J'avance les frais d'hôtel, et mon employeur me rembourse ensuite.", "Я багато їжджу у відрядження. Я сам оплачую готелі, а роботодавець потім відшкодовує."],
      ['B', "Je vois. Votre carte est à débit différé : tous vos paiements du mois sont débités en une seule fois. Avant d'augmenter le plafond, je dois donc vérifier que votre compte peut supporter ce débit.", "Зрозуміло. Ваша картка з відкладеним списанням: усі платежі місяця списуються одним разом. Тому перед підвищенням ліміту я маю перевірити, чи витримає ваш рахунок таке списання."],
      ['C', "Mon salaire est de trois mille deux cents euros net.", "Моя зарплата — три тисячі двісті євро чистими."],
      ['B', "Merci. Compte tenu de vos revenus, je ne peux pas vous accorder trois mille euros par mois. En revanche, je peux relever votre plafond à deux mille cinq cents euros de façon permanente.", "Дякую. З огляду на ваші доходи я не можу надати три тисячі євро на місяць. Натомість я можу постійно підвищити ліміт до двох тисяч п'ятисот євро."],
      ['C', "Et si un mois j'ai besoin de plus ?", "А якщо якогось місяця мені знадобиться більше?"],
      ['B', "Dans ce cas, vous pourrez demander une augmentation temporaire dans l'application, valable trente jours, sous réserve de validation.", "Тоді ви зможете запросити тимчасове підвищення в застосунку на тридцять днів — за умови погодження."],
      ['C', "C'est un bon compromis. Et pourquoi pas une carte haut de gamme ?", "Це добрий компроміс. А може, преміальну картку?"],
      ['B', "C'est une possibilité : les plafonds sont plus élevés et une assurance voyage est incluse. Cependant, la cotisation est de cent trente euros par an. Je vous conseille de comparer avec vos besoins réels.", "Це можливо: ліміти вищі, і туристичне страхування включене. Проте річна плата — сто тридцять євро. Раджу порівняти це з вашими реальними потребами."],
      ['C', "Je vais réfléchir. Pour l'instant, je prends les deux mille cinq cents euros.", "Я подумаю. Поки що беру дві тисячі п'ятсот євро."],
      ['B', "C'est noté. La modification sera effective dès demain.", "Записала. Зміна набуде чинності вже завтра."]
    ],
    words: [["de façon permanente", "постійно, назавжди"], ["avancer les frais", "оплачувати витрати наперед (власним коштом)"], ["supporter le débit", "витримати списання"], ["accorder", "надати, погодити"], ["sous réserve de", "за умови"], ["le compromis", "компроміс"], ["la carte haut de gamme", "преміальна картка"], ["effectif", "чинний (що набуває дії)"]],
    tasks: [
      {
        c: "Je veux augmenter définitivement mon plafond à trois mille euros.", cu: "Я хочу назавжди підвищити ліміт до трьох тисяч євро.",
        opts: ["Je comprends. Puis-je vous demander pourquoi vous avez besoin d'un plafond plus élevé ?", "Bien sûr, je mets dix mille euros.", "Non, les plafonds ne changent jamais."],
        m: "Je comprends. Puis-je vous demander pourquoi vous avez besoin d'un plafond plus élevé ?", mu: "Розумію. Можу запитати, навіщо вам вищий ліміт?",
        k: [["comprends"], ["pourquoi", "besoin", "raison"]]
      },
      {
        c: "Pourquoi vous ne m'accordez pas trois mille euros ?", cu: "Чому ви не даєте мені три тисячі євро?",
        opts: ["Compte tenu de vos revenus, ce n'est pas possible ; en revanche, je peux vous proposer deux mille cinq cents euros.", "Parce que je n'ai pas envie.", "C'est l'ordinateur qui décide, je ne sais pas."],
        m: "Compte tenu de vos revenus, je ne peux pas accorder trois mille euros. En revanche, je peux relever votre plafond à deux mille cinq cents euros, et vous pourrez demander une augmentation temporaire si besoin.", mu: "З огляду на ваші доходи я не можу надати три тисячі євро. Натомість можу підняти ліміт до двох тисяч п'ятисот, а за потреби ви зможете запросити тимчасове підвищення.",
        k: [["revenus", "salaire"], ["en revanche", "proposer", "propose", "je peux"], ["temporaire", "deux mille cinq cents", "2500"]]
      }
    ]
  },
  {
    id: 'v-risks-A1', t: 'risks', l: 'A1', b: 'thomas', c: 'lambert', set: 'agence',
    title: 'Protéger son code', ua: 'Як захистити PIN-код',
    desc: 'Клієнтка хоче записати PIN-код на папірці. Консультант пояснює прості правила безпеки.',
    lines: [
      ['C', "Bonjour. J'ai une nouvelle carte. Je peux écrire le code sur un papier ?", "Добрий день. У мене нова картка. Можна записати код на папірці?"],
      ['B', "Bonjour Madame. Non, c'est dangereux !", "Добрий день, пані. Ні, це небезпечно!"],
      ['C', "Pourquoi ?", "Чому?"],
      ['B', "Si vous perdez votre portefeuille, une autre personne peut utiliser la carte.", "Якщо ви загубите гаманець, хтось інший зможе скористатися карткою."],
      ['C', "Ah, je comprends. Mais j'oublie toujours le code.", "А, зрозуміло. Але я постійно забуваю код."],
      ['B', "Vous pouvez voir votre code dans l'application, en sécurité.", "Ви можете безпечно переглянути код у застосунку."],
      ['C', "Super ! Et dans le magasin ?", "Супер! А в магазині?"],
      ['B', "Cachez le clavier avec votre main quand vous tapez le code.", "Прикривайте клавіатуру рукою, коли вводите код."],
      ['C', "D'accord. Merci pour les conseils !", "Гаразд. Дякую за поради!"],
      ['B', "Je vous en prie. Votre sécurité est importante.", "Будь ласка. Ваша безпека — це важливо."]
    ],
    words: [["écrire", "писати, записати"], ["dangereux", "небезпечний"], ["le portefeuille", "гаманець"], ["oublier", "забувати"], ["cacher", "ховати, прикривати"], ["le clavier", "клавіатура"], ["taper le code", "вводити код"]],
    tasks: [
      {
        c: "Je peux écrire mon code sur un papier ?", cu: "Можна записати код на папірці?",
        opts: ["Non, c'est dangereux. Si vous perdez le papier, quelqu'un peut utiliser la carte.", "Oui, écrivez-le sur la carte.", "Oui, et donnez-moi le papier."],
        m: "Non, c'est dangereux. Si vous perdez votre portefeuille, une autre personne peut utiliser la carte.", mu: "Ні, це небезпечно. Якщо ви загубите гаманець, хтось інший зможе скористатися карткою.",
        k: [["non"], ["dangereux", "risque", "securite"]]
      },
      {
        c: "J'oublie toujours mon code.", cu: "Я постійно забуваю код.",
        opts: ["Vous pouvez voir votre code dans l'application, en sécurité.", "Alors, ne payez plus.", "Je vais vous envoyer le code par SMS."],
        m: "Vous pouvez voir votre code dans l'application, en sécurité.", mu: "Ви можете безпечно переглянути код у застосунку.",
        k: [["application"], ["voir", "consulter", "regarder"]]
      }
    ]
  },
  {
    id: 'v-deposits-B1', t: 'deposits', l: 'B1', b: 'nadia', c: 'garnier', set: 'agence',
    title: 'Retirer de l\'argent d\'une assurance-vie', ua: 'Часткове зняття зі страхування життя',
    desc: 'Клієнтка хоче зняти 20 000 € зі страхування життя, щоб допомогти доньці. Консультантка пояснює частковий викуп і оподаткування після 8 років.',
    lines: [
      ['C', "Bonjour Madame. J'ai une assurance-vie depuis douze ans. J'aimerais récupérer vingt mille euros pour aider ma fille à acheter un appartement.", "Добрий день. Я маю страхування життя вже дванадцять років. Я хотіла б забрати двадцять тисяч євро, щоб допомогти доньці купити квартиру."],
      ['B', "Bonjour Madame Garnier. C'est tout à fait possible : il s'agit d'un rachat partiel. Votre contrat continue, et le reste de votre épargne reste investi.", "Добрий день, пані Гарньє. Це цілком можливо: це частковий викуп. Ваш договір діє далі, а решта заощаджень залишається інвестованою."],
      ['C', "Est-ce que je vais payer beaucoup d'impôts ?", "Я сплачу багато податків?"],
      ['B', "Votre contrat a plus de huit ans : c'est la fiscalité la plus avantageuse. Seule la part d'intérêts contenue dans le rachat est imposable, et vous bénéficiez d'un abattement annuel de quatre mille six cents euros pour une personne seule.", "Вашому договору понад вісім років — це найвигідніше оподаткування. Оподатковується лише частка доходу в сумі викупу, і ви маєте щорічну пільгу в чотири тисячі шістсот євро для самотньої особи."],
      ['C', "Qu'entendez-vous par « la part d'intérêts » ?", "Що ви маєте на увазі під «часткою доходу»?"],
      ['B', "Sur vingt mille euros retirés, une partie correspond à vos versements, et une autre aux gains. Seuls les gains sont imposés, et seulement au-delà de l'abattement. Dans votre cas, vous ne devriez probablement pas payer d'impôt sur le revenu.", "Із двадцяти тисяч знятих євро одна частина — це ваші внески, а інша — дохід. Оподатковується лише дохід і лише понад пільгу. У вашому випадку податку на доходи, найімовірніше, не буде."],
      ['C', "Et les prélèvements sociaux ?", "А соціальні внески?"],
      ['B', "Sur le fonds en euros, ils ont déjà été prélevés chaque année. En revanche, ils pourraient s'appliquer à la part en unités de compte. Je vous ferai une simulation précise.", "З фонду в євро їх уже утримували щороку. Натомість вони можуть застосовуватися до частки в юніт-лінкованих інструментах. Я зроблю вам точний розрахунок."],
      ['C', "Combien de temps faut-il pour recevoir l'argent ?", "Скільки часу потрібно, щоб отримати гроші?"],
      ['B', "En général, une à deux semaines après la demande. Par ailleurs, un don d'argent à un enfant bénéficie d'abattements fiscaux. Je vous conseille d'en parler à votre notaire.", "Зазвичай один-два тижні після заяви. До того ж грошовий подарунок дитині має податкові пільги. Раджу обговорити це з вашим нотаріусом."],
      ['C', "Merci, c'est très clair. Préparons la demande.", "Дякую, усе дуже зрозуміло. Готуймо заяву."]
    ],
    words: [["le rachat partiel", "частковий викуп (зняття)"], ["récupérer", "повернути собі, забрати"], ["imposable", "що оподатковується"], ["l'abattement", "податкова пільга (неоподатковувана сума)"], ["les gains", "дохід, прибуток"], ["les prélèvements sociaux", "соціальні внески (податок на дохід від капіталу)"], ["le don", "дарування, подарунок"], ["le notaire", "нотаріус"]],
    tasks: [
      {
        c: "Je voudrais récupérer une partie de mon assurance-vie.", cu: "Я хотіла б забрати частину свого страхування життя.",
        opts: ["C'est possible : il s'agit d'un rachat partiel, et votre contrat continue.", "Ce n'est jamais possible avant la retraite.", "Il faut fermer tout le contrat."],
        m: "C'est tout à fait possible : il s'agit d'un rachat partiel. Votre contrat continue et le reste reste investi.", mu: "Це цілком можливо: це частковий викуп. Договір діє далі, а решта залишається інвестованою.",
        k: [["rachat"], ["possible"], ["continue"]]
      },
      {
        c: "Je vais payer beaucoup d'impôts ?", cu: "Я сплачу багато податків?",
        opts: ["Votre contrat a plus de huit ans : seuls les gains sont imposés, après un abattement annuel.", "Oui, cinquante pour cent de la somme.", "Je ne sais pas, ce n'est pas mon travail."],
        m: "Votre contrat a plus de huit ans, c'est la fiscalité la plus avantageuse : seuls les gains sont imposés, après un abattement annuel.", mu: "Вашому договору понад вісім років — це найвигідніше оподаткування: оподатковується лише дохід після щорічної пільги.",
        k: [["huit ans", "8 ans"], ["gains", "interets"], ["abattement"]]
      },
      {
        c: "Qu'entendez-vous par « la part d'intérêts » ?", cu: "Що ви маєте на увазі під «часткою доходу»?",
        opts: ["Une partie du rachat correspond à vos versements, l'autre aux gains : seuls les gains sont imposables.", "C'est le taux du Livret A.", "Ce sont les frais de la banque."],
        m: "Sur la somme retirée, une partie correspond à vos versements et une autre aux gains. Seuls les gains sont imposables.", mu: "Із знятої суми одна частина — ваші внески, інша — дохід. Оподатковується лише дохід.",
        k: [["versements"], ["gains"], ["imposable", "imposes", "impot"]]
      }
    ]
  }
];

// Keep scenes ordered by topic, then level
(() => {
  const order = BF.data.topics.map(t => t.id);
  BF.data.videos.sort((a, b) => order.indexOf(a.t) - order.indexOf(b.t) || a.l.localeCompare(b.l));
})();
