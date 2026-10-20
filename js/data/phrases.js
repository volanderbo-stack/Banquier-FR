// Conversation phrases for working with clients. [fr, ua, level]
BF.data.phraseCats = [
  {
    id: 'greet', ua: 'Привітання та початок розмови', icon: '👋',
    items: [
      ["Bonjour Madame, bonjour Monsieur.", "Добрий день, пані / пане.", "A1"],
      ["Bienvenue à la Banque Mirabelle.", "Ласкаво просимо до банку «Мірабель».", "A1"],
      ["Que puis-je faire pour vous ?", "Чим я можу вам допомогти?", "A1"],
      ["Comment puis-je vous aider ?", "Як я можу вам допомогти?", "A1"],
      ["Asseyez-vous, je vous en prie.", "Сідайте, будь ласка.", "A1"],
      ["Vous avez rendez-vous ?", "Вам призначено зустріч?", "A1"],
      ["Je suis votre conseillère, Camille Roux.", "Я ваша консультантка, Камій Ру.", "A1"],
      ["Désolé pour l'attente.", "Перепрошую за очікування.", "A2"],
      ["Ravi de vous revoir, Madame Garnier.", "Радий знову вас бачити, пані Гарньє.", "A2"],
      ["Je vous remercie de votre patience.", "Дякую за ваше терпіння.", "A2"],
      ["Merci d'avoir patienté, je suis à vous.", "Дякую, що зачекали, я до ваших послуг.", "B1"],
      ["Qu'est-ce qui vous amène aujourd'hui ?", "Що привело вас сьогодні?", "B1"]
    ]
  },
  {
    id: 'ident', ua: 'Перевірка особи та даних', icon: '🪪',
    items: [
      ["Pouvez-vous me donner votre nom, s'il vous plaît ?", "Назвіть, будь ласка, ваше прізвище.", "A1"],
      ["Avez-vous une pièce d'identité ?", "У вас є документ, що посвідчує особу?", "A1"],
      ["Quelle est votre date de naissance ?", "Яка ваша дата народження?", "A1"],
      ["Pouvez-vous me confirmer votre adresse ?", "Можете підтвердити вашу адресу?", "A2"],
      ["Pour des raisons de sécurité, je dois vérifier votre identité.", "З міркувань безпеки я маю перевірити вашу особу.", "A2"],
      ["Pourriez-vous me communiquer votre numéro client ?", "Чи не могли б ви назвати свій номер клієнта?", "A2"],
      ["Je vais vous envoyer un code par SMS pour confirmer.", "Я надішлю вам код в SMS для підтвердження.", "B1"],
      ["Votre justificatif de domicile doit dater de moins de trois mois.", "Ваше підтвердження адреси має бути не старшим трьох місяців.", "B1"]
    ]
  },
  {
    id: 'clarify', ua: 'Уточнення', icon: '🔎',
    items: [
      ["Pardon, pouvez-vous répéter, s'il vous plaît ?", "Перепрошую, можете повторити, будь ласка?", "A1"],
      ["Vous pouvez parler plus lentement ?", "Можете говорити повільніше?", "A1"],
      ["C'est pour quel compte ?", "Це для якого рахунку?", "A1"],
      ["Si je comprends bien, vous souhaitez augmenter votre plafond.", "Якщо я правильно розумію, ви хочете підвищити ліміт.", "A2"],
      ["De quel montant s'agit-il ?", "Про яку суму йдеться?", "A2"],
      ["Depuis quand avez-vous remarqué ce problème ?", "Відколи ви помітили цю проблему?", "A2"],
      ["Vous voulez dire que la carte ne fonctionne plus ?", "Ви маєте на увазі, що картка більше не працює?", "A2"],
      ["Pourriez-vous préciser la date de l'opération ?", "Чи могли б ви уточнити дату операції?", "B1"],
      ["Juste pour être sûr d'avoir bien compris : vous n'avez jamais donné votre code ?", "Щоб переконатися, що я правильно зрозумів: ви ніколи не повідомляли свій код?", "B1"],
      ["Qu'entendez-vous exactement par « frais cachés » ?", "Що саме ви маєте на увазі під «прихованими комісіями»?", "B1"]
    ]
  },
  {
    id: 'explain', ua: 'Пояснення', icon: '💡',
    items: [
      ["C'est très simple.", "Це дуже просто.", "A1"],
      ["Voici votre carte.", "Ось ваша картка.", "A1"],
      ["Il faut signer ici.", "Потрібно підписати тут.", "A1"],
      ["Je vous explique comment ça marche.", "Я поясню вам, як це працює.", "A2"],
      ["Concrètement, cela veut dire que vous payez moins d'intérêts.", "Конкретно це означає, що ви сплачуєте менше відсотків.", "A2"],
      ["Il y a deux possibilités.", "Є два варіанти.", "A2"],
      ["Je vous conseille de garder une épargne disponible.", "Раджу вам тримати доступні заощадження.", "A2"],
      ["Autrement dit, c'est le coût réel du crédit.", "Іншими словами, це реальна вартість кредиту.", "B1"],
      ["Le principal avantage, c'est la sécurité ; en revanche, le rendement est faible.", "Головна перевага — безпека; натомість дохідність низька.", "B1"],
      ["Je vous invite à lire attentivement les conditions générales.", "Пропоную вам уважно прочитати загальні умови.", "B1"],
      ["À titre d'exemple, pour un prêt de dix mille euros, la mensualité serait d'environ deux cents euros.", "Наприклад, для кредиту в десять тисяч євро щомісячний платіж становив би близько двохсот євро.", "B1"]
    ]
  },
  {
    id: 'refuse', ua: 'Ввічлива відмова', icon: '🙅',
    items: [
      ["Je suis désolé, ce n'est pas possible.", "Мені шкода, це неможливо.", "A1"],
      ["Malheureusement, je ne peux pas.", "На жаль, я не можу.", "A1"],
      ["Je comprends, mais ce n'est pas possible aujourd'hui.", "Я розумію, але сьогодні це неможливо.", "A2"],
      ["Je regrette, mais votre demande ne peut pas être acceptée pour le moment.", "Шкодую, але вашу заяву поки що не може бути прийнято.", "A2"],
      ["Ce n'est pas possible, mais je peux vous proposer une autre solution.", "Це неможливо, але я можу запропонувати вам інше рішення.", "A2"],
      ["Je comprends votre déception, mais la réglementation ne nous le permet pas.", "Я розумію ваше розчарування, але регламент нам цього не дозволяє.", "B1"],
      ["Votre dossier ne répond pas aux critères actuels ; en revanche, nous pourrions envisager une autre durée.", "Ваша заявка не відповідає чинним критеріям; натомість ми могли б розглянути інший строк.", "B1"],
      ["Je ne suis pas en mesure de vous donner une réponse favorable.", "Я не можу дати вам позитивну відповідь.", "B1"],
      ["Je préfère être transparent avec vous.", "Я волію бути з вами відвертим.", "B1"]
    ]
  },
  {
    id: 'calm', ua: 'Скарги та заспокоєння клієнта', icon: '🤝',
    items: [
      ["Ne vous inquiétez pas.", "Не хвилюйтеся.", "A1"],
      ["Je comprends tout à fait.", "Я цілком розумію.", "A2"],
      ["Je suis vraiment désolé pour ce désagrément.", "Мені щиро шкода за цю незручність.", "A2"],
      ["Je m'en occupe tout de suite.", "Я негайно цим займуся.", "A2"],
      ["Je comprends votre mécontentement.", "Я розумію ваше невдоволення.", "B1"],
      ["Nous allons faire le nécessaire pour régler la situation.", "Ми зробимо все необхідне, щоб владнати ситуацію.", "B1"],
      ["Je vous tiens informé dès que j'ai une réponse.", "Я повідомлю вам, щойно отримаю відповідь.", "B1"],
      ["Si la réponse ne vous satisfait pas, vous pouvez saisir le médiateur.", "Якщо відповідь вас не задовольнить, ви можете звернутися до медіатора.", "B1"]
    ]
  },
  {
    id: 'close', ua: 'Завершення розмови', icon: '✅',
    items: [
      ["Avez-vous d'autres questions ?", "У вас є ще запитання?", "A1"],
      ["Merci, bonne journée !", "Дякую, гарного дня!", "A1"],
      ["Au revoir, à bientôt.", "До побачення, до зустрічі.", "A1"],
      ["Je vous souhaite une bonne fin de journée.", "Бажаю вам гарного завершення дня.", "A2"],
      ["N'hésitez pas à me contacter.", "Не соромтеся звертатися до мене.", "A2"],
      ["Je vous envoie un récapitulatif par e-mail.", "Я надішлю вам підсумок електронною поштою.", "B1"],
      ["Je reste à votre disposition pour toute question.", "Я залишаюся у вашому розпорядженні з будь-яких питань.", "B1"]
    ]
  },
  {
    id: 'phone', ua: 'Розмова по телефону', icon: '📞',
    items: [
      ["Banque Mirabelle, Camille Roux à l'appareil, bonjour.", "Банк «Мірабель», Камій Ру слухає, добрий день.", "A2"],
      ["Ne quittez pas, je vous passe le service concerné.", "Залишайтеся на лінії, я з'єдную вас із відповідним відділом.", "A2"],
      ["Je vous rappelle dans dix minutes.", "Я передзвоню вам за десять хвилин.", "A2"],
      ["Puis-je prendre un message ?", "Можу я записати повідомлення?", "A2"],
      ["La ligne est mauvaise, je vous entends mal.", "Поганий зв'язок, я вас погано чую.", "B1"],
      ["Je vous confirme par écrit ce que nous venons de convenir.", "Я письмово підтверджу вам те, про що ми щойно домовилися.", "B1"]
    ]
  }
];

BF.data.phrases = BF.data.phraseCats.flatMap(c => c.items.map(([fr, ua, l]) => ({ fr, ua, l, cat: c.id })));
