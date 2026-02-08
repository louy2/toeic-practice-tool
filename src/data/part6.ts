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
      { blankId: 'p6-001-1', choices: ['confirmed', 'confirming', 'confirms', 'confirmation'], correctIndex: 0, explanation: '"has been + 過去分詞" で現在完了の受動態。"confirmed" が正解。' },
      { blankId: 'p6-001-2', choices: ['sending', 'sent', 'send', 'sends'], correctIndex: 1, explanation: '"will be + 過去分詞" で未来の受動態。"sent" が正解。' },
      { blankId: 'p6-001-3', choices: ['However, a list of nearby hotels is available on our website.', 'The registration fee has been increased this year.', 'All sessions will be recorded for future reference.', 'The conference has been held annually since 2010.'], correctIndex: 0, explanation: '前文で宿泊が登録費に含まれないと述べているので、近隣ホテルの情報が文脈に合う。' },
      { blankId: 'p6-001-4', choices: ['hesitated', 'hesitating', 'hesitation', 'hesitate'], correctIndex: 3, explanation: '"do not hesitate to ~" で「遠慮なく～してください」。動詞の原形 "hesitate" が正解。' },
    ],
  },
  {
    id: 'p6-002',
    instruction: 'Questions 1-4 refer to the following notice.',
    passage: `NOTICE TO ALL EMPLOYEES

Effective April 1, the company will implement a new flexible work schedule policy. Under this policy, employees may choose to start their workday ____(1)____ 7:00 A.M. and 10:00 A.M.

All employees are still ____(2)____ to work a minimum of eight hours per day. Core hours, during which all staff must be present in the office, are from 10:00 A.M. to 3:00 P.M.

____(3)____. Managers will review requests and respond within three business days.

This policy is being introduced on a trial basis and will be ____(4)____ after six months to determine its effectiveness.

Human Resources Department`,
    blanks: [
      { blankId: 'p6-002-1', choices: ['between', 'during', 'among', 'within'], correctIndex: 0, explanation: '"between A and B" で「AとBの間」。"between" が正解。' },
      { blankId: 'p6-002-2', choices: ['requirement', 'requiring', 'required', 'require'], correctIndex: 2, explanation: '"are required to ~" で受動態。"required" が正解。' },
      { blankId: 'p6-002-3', choices: ['The company cafeteria will also be renovated during this period.', 'Employees wishing to adopt a flexible schedule must submit a request to their supervisor.', 'Annual performance reviews will take place in December.', 'The parking garage will be closed for maintenance next week.'], correctIndex: 1, explanation: 'フレキシブル勤務制度の文脈で、申請手続きの説明が最も適切。' },
      { blankId: 'p6-002-4', choices: ['evaluate', 'evaluating', 'evaluation', 'evaluated'], correctIndex: 3, explanation: '"will be + 過去分詞" で未来の受動態。"evaluated" が正解。' },
    ],
  },
  {
    id: 'p6-003',
    instruction: 'Questions 1-4 refer to the following memo.',
    passage: `TO: All Department Heads
FROM: IT Department
RE: System Upgrade

Please be advised that the company's internal network will undergo a major upgrade this weekend. The upgrade is _____(1)_____ to improve system performance and security.

All servers will be temporarily shut down from Saturday at 10:00 P.M. to Sunday at 6:00 A.M. During this time, employees will not be able to access company email or shared drives. ____(2)____.

We strongly recommend that all staff save their work and log out of all systems ____(3)____ 5:00 P.M. on Friday.

If you experience any technical issues after the upgrade, please contact the IT help desk ____(4)____ extension 4500.

IT Department`,
    blanks: [
      { blankId: 'p6-003-1', choices: ['design', 'designed', 'designing', 'designer'], correctIndex: 1, explanation: '"is designed to ~" で「～するよう設計されている」。"designed" が正解。' },
      { blankId: 'p6-003-2', choices: ['The new system will support additional programming languages.', 'Please plan your work accordingly and complete any urgent tasks before the shutdown.', 'The IT department was established in 2015.', 'Employee ID badges must be returned upon resignation.'], correctIndex: 1, explanation: 'シャットダウン前の準備を促す文が文脈に合う。' },
      { blankId: 'p6-003-3', choices: ['until', 'since', 'by', 'from'], correctIndex: 2, explanation: '期限を表す "by 5:00 P.M."（5時までに）が正解。' },
      { blankId: 'p6-003-4', choices: ['in', 'on', 'at', 'for'], correctIndex: 2, explanation: '内線番号の前には "at" を使う。"at extension 4500" が正解。' },
    ],
  },
  {
    id: 'p6-004',
    instruction: 'Questions 1-4 refer to the following advertisement.',
    passage: `RIVERSIDE FITNESS CENTER — GRAND OPENING!

Join us for the grand opening of Riverside Fitness Center, the city's newest and most ____(1)____ gym facility.

Our 20,000-square-foot center features a full range of cardio and strength training equipment, a heated swimming pool, and group fitness studios. ____(2)____. Our certified personal trainers will work with you to develop a customized fitness plan.

As a special introductory offer, new members who sign up during our opening week will receive a 30% ____(3)____ on their first three months of membership.

Visit us at 450 River Road or call (555) 234-5678 to schedule a free tour. We look forward to helping you achieve your fitness ____(4)____.`,
    blanks: [
      { blankId: 'p6-004-1', choices: ['modernity', 'modernize', 'modern', 'modernly'], correctIndex: 2, explanation: '名詞 "facility" を修飾する形容詞。"modern" が正解。' },
      { blankId: 'p6-004-2', choices: ['The building was originally constructed in 1985.', 'We also offer complimentary fitness assessments for all new members.', 'Parking is available in the adjacent garage for a monthly fee.', 'The swimming pool will be closed for maintenance every Monday.'], correctIndex: 1, explanation: '施設の特徴を紹介する流れで、新会員向けサービスの説明が自然。' },
      { blankId: 'p6-004-3', choices: ['reduce', 'reducing', 'discount', 'discounting'], correctIndex: 2, explanation: '"30% discount" で「30%割引」。名詞 "discount" が正解。' },
      { blankId: 'p6-004-4', choices: ['goals', 'goaling', 'goaled', 'goalless'], correctIndex: 0, explanation: '"fitness goals"（フィットネスの目標）。名詞 "goals" が正解。' },
    ],
  },
  {
    id: 'p6-005',
    instruction: 'Questions 1-4 refer to the following article.',
    passage: `LOCAL BUSINESS NEWS

Greenway Technologies, a leading software development company, announced yesterday that it will ____(1)____ its headquarters to the newly developed Lakeside Business Park.

The move, which is scheduled for the third quarter of this year, will allow the company to accommodate its ____(2)____ growing workforce. Greenway has hired over 150 new employees in the past year alone.

"We have simply outgrown our current space," said CEO Maria Santos. "____(3)____."

The new facility will feature open-plan offices, a rooftop garden, and an on-site childcare center, reflecting the company's ____(4)____ to employee well-being.`,
    blanks: [
      { blankId: 'p6-005-1', choices: ['locate', 'relocate', 'location', 'located'], correctIndex: 1, explanation: '"will + 動詞の原形"。本社を移転するので "relocate" が正解。' },
      { blankId: 'p6-005-2', choices: ['rapid', 'rapidly', 'rapidity', 'rapids'], correctIndex: 1, explanation: '形容詞 "growing" を修飾するには副詞。"rapidly" が正解。' },
      { blankId: 'p6-005-3', choices: ['Our revenue decreased by 10% last quarter.', 'The new location will give us the room we need to continue innovating and expanding.', 'We plan to reduce our workforce by the end of the year.', 'The current building was constructed over fifty years ago.'], correctIndex: 1, explanation: 'CEO の発言として、移転の理由と期待を述べる文が文脈に合う。' },
      { blankId: 'p6-005-4', choices: ['commits', 'committed', 'committing', 'commitment'], correctIndex: 3, explanation: '所有格 "company\'s" の後には名詞。"commitment" が正解。' },
    ],
  },
  {
    id: 'p6-006',
    instruction: 'Questions 1-4 refer to the following email.',
    passage: `Dear Valued Customer,

We are writing to inform you of an important update to our delivery service. Starting next month, all orders placed before 2:00 P.M. will be ____(1)____ for same-day delivery within the metropolitan area.

This enhancement is the result of our recent investment in a new distribution center and an expanded fleet of delivery vehicles. ____(2)____.

To take advantage of this service, simply select "Same-Day Delivery" at checkout. Please note that ____(3)____ charges may apply for orders under $50.

We are committed to providing you with the most ____(4)____ shopping experience possible. Thank you for your continued loyalty.

Customer Service Team
QuickMart Online`,
    blanks: [
      { blankId: 'p6-006-1', choices: ['eligibility', 'eligible', 'eligibly', 'eligibleness'], correctIndex: 1, explanation: '"be eligible for ~" で「～の資格がある」。形容詞 "eligible" が正解。' },
      { blankId: 'p6-006-2', choices: ['Our headquarters was founded in 1998 in downtown Portland.', 'We expect these improvements to significantly reduce delivery times across the region.', 'All employees are required to wear their ID badges at all times.', 'The company picnic will be held on August 15 this year.'], correctIndex: 1, explanation: '投資の結果として配達時間短縮の期待を述べる文が自然。' },
      { blankId: 'p6-006-3', choices: ['addition', 'additional', 'additionally', 'add'], correctIndex: 1, explanation: '名詞 "charges" を修飾するには形容詞。"additional" が正解。' },
      { blankId: 'p6-006-4', choices: ['convenience', 'conveniently', 'conveniences', 'convenient'], correctIndex: 3, explanation: '名詞 "experience" を修飾するには形容詞。"convenient" が正解。' },
    ],
  },
  {
    id: 'p6-007',
    instruction: 'Questions 1-4 refer to the following notice.',
    passage: `BUILDING MANAGEMENT NOTICE

Dear Tenants,

Please be informed that the elevators in the east wing will be undergoing routine maintenance on Saturday, November 18. The work is expected to ____(1)____ approximately four hours, from 8:00 A.M. to 12:00 P.M.

During this period, tenants on floors 1 through 10 should use the west wing elevators or the stairwells. We apologize for any ____(2)____ this may cause.

____(3)____. Building security will be stationed at key access points to assist with navigation.

For emergency situations, please contact building management ____(4)____ at (555) 890-1234.

Westfield Building Management`,
    blanks: [
      { blankId: 'p6-007-1', choices: ['last', 'lasting', 'lasted', 'lasts'], correctIndex: 0, explanation: '"to + 動詞の原形"。"last"（続く）が正解。' },
      { blankId: 'p6-007-2', choices: ['inconvenient', 'inconveniently', 'inconvenience', 'inconveniences'], correctIndex: 2, explanation: '"any" の後には名詞。"inconvenience" が正解。' },
      { blankId: 'p6-007-3', choices: ['The building was constructed in 2005 by Harrison Architects.', 'Temporary signs will be posted to direct tenants to alternative routes.', 'Monthly rent payments are due on the first of each month.', 'The fitness center on the third floor has been recently renovated.'], correctIndex: 1, explanation: 'エレベーター停止中の代替案内の説明が文脈に合う。' },
      { blankId: 'p6-007-4', choices: ['directly', 'direct', 'direction', 'directed'], correctIndex: 0, explanation: '動詞 "contact" を修飾するには副詞。"directly" が正解。' },
    ],
  },
  {
    id: 'p6-008',
    instruction: 'Questions 1-4 refer to the following report.',
    passage: `QUARTERLY SALES REPORT — Q3

Overall sales for the third quarter increased by 12% compared to the same period last year, ____(1)____ exceeding our projected target of 8%.

The strongest growth was seen in the Asia-Pacific region, where revenue rose by 23%. This was ____(2)____ driven by the successful launch of our new product line in Japan and South Korea.

____(3)____. In contrast, the European market showed only modest growth of 3%, partly due to unfavorable currency exchange rates.

Looking ahead, we are ____(4)____ about the fourth quarter, as several major client contracts are expected to be finalized before year-end.

Prepared by: Sales Analytics Division`,
    blanks: [
      { blankId: 'p6-008-1', choices: ['significance', 'significant', 'significantly', 'signify'], correctIndex: 2, explanation: '動詞 "exceeding" を修飾するには副詞。"significantly" が正解。' },
      { blankId: 'p6-008-2', choices: ['largely', 'large', 'larger', 'largest'], correctIndex: 0, explanation: '過去分詞 "driven" を修飾するには副詞。"largely" が正解。' },
      { blankId: 'p6-008-3', choices: ['The company was founded in Chicago in 1992.', 'The North American market also performed well, with a 15% increase in sales.', 'All employees are eligible for annual bonuses.', 'The marketing budget was reduced by 5% this year.'], correctIndex: 1, explanation: '地域別売上の報告の流れで、北米市場の結果が自然。' },
      { blankId: 'p6-008-4', choices: ['optimize', 'optimism', 'optimistic', 'optimistically'], correctIndex: 2, explanation: '"are optimistic about ~" で「～について楽観的」。形容詞 "optimistic" が正解。' },
    ],
  },
  {
    id: 'p6-009',
    instruction: 'Questions 1-4 refer to the following instructions.',
    passage: `EMPLOYEE EXPENSE REIMBURSEMENT GUIDELINES

To request reimbursement for business-related expenses, employees must complete the following steps.

First, fill out the Expense Report Form, which is ____(1)____ on the company intranet under "Forms and Documents." Be sure to include the date, description, and amount for each expense.

____(2)____. Digital copies of receipts are acceptable; however, they must be clearly legible.

Submit the completed form along with all receipts to your department supervisor for ____(3)____. Once approved, the form will be forwarded to the Accounting Department.

Reimbursements are ____(4)____ processed within 10 business days of submission.

Accounting Department`,
    blanks: [
      { blankId: 'p6-009-1', choices: ['available', 'availability', 'avail', 'availably'], correctIndex: 0, explanation: '"is available on ~" で「～で利用可能」。形容詞 "available" が正解。' },
      { blankId: 'p6-009-2', choices: ['The company was founded over 30 years ago.', 'Next, attach all original receipts or proof of payment for each claimed expense.', 'Employees may use company vehicles for personal errands on weekends.', 'The cafeteria menu will be updated monthly.'], correctIndex: 1, explanation: '手順の説明で、次のステップ（領収書の添付）が文脈に合う。' },
      { blankId: 'p6-009-3', choices: ['approve', 'approving', 'approval', 'approved'], correctIndex: 2, explanation: '前置詞 "for" の後には名詞。"approval" が正解。' },
      { blankId: 'p6-009-4', choices: ['typicality', 'typical', 'typically', 'typify'], correctIndex: 2, explanation: '動詞 "processed" を修飾するには副詞。"typically" が正解。' },
    ],
  },
  {
    id: 'p6-010',
    instruction: 'Questions 1-4 refer to the following advertisement.',
    passage: `HORIZON TRAVEL AGENCY — SUMMER SPECIALS!

Are you looking for the perfect getaway this summer? Horizon Travel Agency is offering ____(1)____ deals on vacation packages to popular destinations worldwide.

Our all-inclusive packages cover flights, hotel accommodations, and guided tours, so you can relax and enjoy your trip without worrying about the _____(2)_____.

____(3)____. Choose from beach resorts in Bali, cultural tours in Italy, or adventure packages in New Zealand — there is something for everyone.

Book your trip before June 30 to receive an ____(4)____ 15% early-bird discount. Call us at (555) 456-7890 or visit www.horizontravel.com.`,
    blanks: [
      { blankId: 'p6-010-1', choices: ['exclude', 'exclusion', 'exclusive', 'exclusively'], correctIndex: 2, explanation: '名詞 "deals" を修飾するには形容詞。"exclusive" が正解。' },
      { blankId: 'p6-010-2', choices: ['details', 'detail', 'detailed', 'detailing'], correctIndex: 0, explanation: '冠詞 "the" の後で "worrying about" の目的語には名詞。"details" が正解。' },
      { blankId: 'p6-010-3', choices: ['Our office hours are from 9 A.M. to 6 P.M., Monday through Friday.', 'With over 50 destinations to choose from, you are sure to find the vacation of your dreams.', 'The agency was established in 2001 by two travel enthusiasts.', 'Customers must present a valid ID when picking up tickets.'], correctIndex: 1, explanation: '旅行パッケージの魅力を訴求する文が自然な流れ。' },
      { blankId: 'p6-010-4', choices: ['addition', 'adding', 'additional', 'additionally'], correctIndex: 2, explanation: '名詞 "discount" を修飾するには形容詞。"additional" が正解。' },
    ],
  },
  {
    id: 'p6-011',
    instruction: 'Questions 1-4 refer to the following memo.',
    passage: `TO: All Staff
FROM: Facilities Management
RE: Office Relocation

As previously announced, our company will be moving to the new office building at 100 Commerce Drive on March 1. The move will be carried out ____(1)____ the weekend of February 27-28 to minimize disruption.

Each department has been assigned a specific moving time. Your department head will notify you of your ____(2)____ schedule by the end of this week.

Please pack all personal belongings and label all boxes clearly with your name and department. ____(3)____.

If you have any large or ____(4)____ items that require special handling, please inform Facilities Management by February 20.

Facilities Management`,
    blanks: [
      { blankId: 'p6-011-1', choices: ['over', 'since', 'from', 'until'], correctIndex: 0, explanation: '"over the weekend" で「週末にかけて」。前置詞 "over" が正解。' },
      { blankId: 'p6-011-2', choices: ['assign', 'assigning', 'assigned', 'assignment'], correctIndex: 2, explanation: '名詞 "schedule" を修飾するには形容詞的な過去分詞。"assigned" が正解。' },
      { blankId: 'p6-011-3', choices: ['The new building has a cafeteria on the ground floor.', 'Moving boxes and packing tape will be distributed to each department by February 15.', 'The company was founded in 1985.', 'Annual leave requests must be submitted two weeks in advance.'], correctIndex: 1, explanation: '荷造りの指示の流れで、資材配布の情報が文脈に合う。' },
      { blankId: 'p6-011-4', choices: ['fragile', 'fragilely', 'fragility', 'fragileness'], correctIndex: 0, explanation: '名詞 "items" を修飾するには形容詞。"fragile" が正解。' },
    ],
  },
  {
    id: 'p6-012',
    instruction: 'Questions 1-4 refer to the following email.',
    passage: `Dear Ms. Watanabe,

I am writing to follow up on our phone conversation regarding the lease agreement for the retail space at 55 Market Street.

After reviewing the terms you ____(1)____, we would like to propose a few modifications. Specifically, we are requesting a reduction in the monthly rent from $4,500 to $4,000 for the first year of the lease.

____(2)____. We believe this adjustment would be mutually ____(3)____, as it would allow us to invest more in renovating the space, which would ultimately increase the property's value.

Please let us know if these terms are ____(4)____ to you. We would be happy to schedule a meeting to discuss this further.

Sincerely,
David Chen
Chen's Bakery`,
    blanks: [
      { blankId: 'p6-012-1', choices: ['proposal', 'proposing', 'proposed', 'propose'], correctIndex: 2, explanation: '関係代名詞節内で "you proposed"（あなたが提案した）。過去形 "proposed" が正解。' },
      { blankId: 'p6-012-2', choices: ['In addition, we would appreciate a three-month grace period before the lease payments begin.', 'The building was recently inspected by city officials.', 'Our bakery has been in business for over twenty years.', 'The local real estate market has been declining steadily.'], correctIndex: 0, explanation: '賃料交渉に加えて、猶予期間のリクエストが文脈に合う。' },
      { blankId: 'p6-012-3', choices: ['benefiting', 'beneficially', 'benefit', 'beneficial'], correctIndex: 3, explanation: '"mutually beneficial" で「双方にとって有益」。形容詞 "beneficial" が正解。' },
      { blankId: 'p6-012-4', choices: ['accept', 'acceptable', 'acceptance', 'acceptably'], correctIndex: 1, explanation: '"are acceptable to you" で「あなたに受け入れ可能」。形容詞 "acceptable" が正解。' },
    ],
  },
]
