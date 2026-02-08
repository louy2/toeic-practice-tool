import type { Part6Passage } from '../types'

export const part6Passages: Part6Passage[] = [
  {
    id: 'p6-001',
    instruction: 'Questions 1-4 refer to the following email.',
    passage: `Dear Mr. Henderson,

Thank you for your interest in our annual leadership conference. We are pleased to inform you that your registration has been ____(1)____.

The conference will take place on March 15-17 at the Grand Hotel in downtown Chicago. A detailed schedule of sessions and workshops will be ____(2)____ to all registered participants by the end of this week.

Please note that hotel accommodations are not included in the registration fee. ____(3)____. We recommend booking early, as rooms tend to fill up quickly during this time of year.

If you have any questions, please do not ____(4)____ to contact our event coordinator, Ms. Lisa Park, at lpark@conference.org.

Best regards,
Conference Registration Team`,
    blanks: [
      {
        blankId: 'p6-001-1',
        choices: ['confirmed', 'confirming', 'confirms', 'confirmation'],
        correctIndex: 0,
        explanation:
          '"has been + 過去分詞" で現在完了の受動態です。"confirmed"（確認された）が正解。',
      },
      {
        blankId: 'p6-001-2',
        choices: ['sent', 'sending', 'send', 'sends'],
        correctIndex: 0,
        explanation:
          '"will be + 過去分詞" で未来の受動態です。"sent"（送られる）が正解。',
      },
      {
        blankId: 'p6-001-3',
        choices: [
          'However, a list of nearby hotels is available on our website.',
          'The registration fee has been increased this year.',
          'All sessions will be recorded for future reference.',
          'The conference has been held annually since 2010.',
        ],
        correctIndex: 0,
        explanation:
          '前文で宿泊が登録費に含まれないと述べているので、近隣ホテルの情報が文脈に合います。',
      },
      {
        blankId: 'p6-001-4',
        choices: ['hesitate', 'hesitated', 'hesitating', 'hesitation'],
        correctIndex: 0,
        explanation:
          '"do not hesitate to ~" で「遠慮なく～してください」という定型表現。動詞の原形 "hesitate" が正解。',
      },
    ],
  },
  {
    id: 'p6-002',
    instruction: 'Questions 5-8 refer to the following notice.',
    passage: `NOTICE TO ALL EMPLOYEES

Effective April 1, the company will implement a new flexible work schedule policy. Under this policy, employees may choose to start their workday ____(5)____ 7:00 A.M. and 10:00 A.M.

All employees are still ____(6)____ to work a minimum of eight hours per day. Core hours, during which all staff must be present in the office, are from 10:00 A.M. to 3:00 P.M.

____(7)____. Managers will review requests and respond within three business days.

This policy is being introduced on a trial basis and will be ____(8)____ after six months to determine its effectiveness.

Human Resources Department`,
    blanks: [
      {
        blankId: 'p6-002-5',
        choices: ['between', 'during', 'among', 'within'],
        correctIndex: 0,
        explanation:
          '"between A and B" で「AとBの間」。2つの時刻の間を示すには "between" を使います。',
      },
      {
        blankId: 'p6-002-6',
        choices: ['required', 'requiring', 'require', 'requirement'],
        correctIndex: 0,
        explanation:
          '"are required to ~" で「～することが求められている」。受動態の過去分詞 "required" が正解。',
      },
      {
        blankId: 'p6-002-7',
        choices: [
          'Employees wishing to adopt a flexible schedule must submit a request to their supervisor.',
          'The company cafeteria will also be renovated during this period.',
          'Annual performance reviews will take place in December.',
          'The parking garage will be closed for maintenance next week.',
        ],
        correctIndex: 0,
        explanation:
          'フレキシブル勤務制度の文脈で、申請手続きの説明が最も適切です。',
      },
      {
        blankId: 'p6-002-8',
        choices: ['evaluated', 'evaluate', 'evaluating', 'evaluation'],
        correctIndex: 0,
        explanation:
          '"will be + 過去分詞" で未来の受動態。"evaluated"（評価される）が正解。',
      },
    ],
  },
  {
    id: 'p6-003',
    instruction: 'Questions 9-12 refer to the following advertisement.',
    passage: `GREENFIELD ORGANIC MARKET — NOW OPEN!

We are excited to announce the opening of our newest location at 250 Oak Street. Greenfield Organic Market is ____(9)____ to providing the freshest organic produce, dairy, and baked goods to our community.

Our store features products sourced ____(10)____ from local farms within a 50-mile radius. By supporting local farmers, we ensure that our customers receive the highest quality ingredients while reducing our environmental impact.

____(11)____. Simply sign up at the customer service desk to start earning points on every purchase.

Visit us today and experience the Greenfield ____(12)____! We are open seven days a week, from 8:00 A.M. to 9:00 P.M.`,
    blanks: [
      {
        blankId: 'p6-003-9',
        choices: ['committed', 'committing', 'commit', 'committee'],
        correctIndex: 0,
        explanation:
          '"is committed to ~" で「～に尽力している」。"committed" が正解。',
      },
      {
        blankId: 'p6-003-10',
        choices: ['directly', 'direct', 'direction', 'directed'],
        correctIndex: 0,
        explanation:
          '動詞 "sourced" を修飾するには副詞が必要。"directly"（直接）が正解。',
      },
      {
        blankId: 'p6-003-11',
        choices: [
          'As a special grand opening offer, join our loyalty program and receive a 20% discount on your first order.',
          'Our store will be closed for renovations starting next month.',
          'We are currently hiring delivery drivers for our online orders.',
          'The parking lot behind the building can accommodate up to 200 vehicles.',
        ],
        correctIndex: 0,
        explanation:
          '後文のポイントプログラム登録の話に自然につながるのは、ロイヤリティプログラムの紹介です。',
      },
      {
        blankId: 'p6-003-12',
        choices: ['difference', 'different', 'differ', 'differently'],
        correctIndex: 0,
        explanation:
          '"the Greenfield difference" で「Greenfieldならではの違い」。冠詞の後には名詞 "difference" が正解。',
      },
    ],
  },
]
