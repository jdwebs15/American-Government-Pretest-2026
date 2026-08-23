const GAME_ID="american-government-pretest";
const GAME_TITLE="American Government Pretest";
const QUESTIONS=[
  {
    "prompt": "How does the legislative branch check the executive branch?",
    "options": [
      "By overriding vetoes",
      "By granting pardons",
      "By interpreting laws",
      "By appointing judges"
    ],
    "answer": 0,
    "topic": "CS13 Checks and Balances"
  },
  {
    "prompt": "What is a key step in the process of civic engagement with government structures?",
    "options": [
      "Ignoring public issues",
      "Researching and proposing solutions to issues",
      "Limiting public debate",
      "Avoiding political processes"
    ],
    "answer": 1,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "What is the primary goal of political processes in government?",
    "options": [
      "To acquire governmental power and influence decision-making",
      "To limit public participation",
      "To restrict media involvement",
      "To eliminate public policy processes"
    ],
    "answer": 0,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "What distinguishes public policy processes from political processes?",
    "options": [
      "They exclude public participation",
      "They involve institutional actions to carry out government functions",
      "They focus on acquiring power",
      "They are unrelated to government operations"
    ],
    "answer": 1,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "Which group seeks to influence public policy by engaging in political processes?",
    "options": [
      "Interest groups",
      "The judiciary",
      "The media",
      "Political parties"
    ],
    "answer": 0,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "How do political parties primarily influence public policy?",
    "options": [
      "By conducting public demonstrations",
      "By winning elections to place members in office",
      "By filing legal briefs",
      "By regulating the economy"
    ],
    "answer": 1,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "What role does the media play in civic involvement?",
    "options": [
      "It creates laws directly",
      "It enforces public policy",
      "It serves as a means of communication for political parties and interest groups",
      "It elects public officials"
    ],
    "answer": 2,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "Which action is an example of using the media to address a civic issue?",
    "options": [
      "Filing a lawsuit in court",
      "Publishing an op-ed to raise awareness",
      "Voting in an election",
      "Passing a new law"
    ],
    "answer": 1,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "Why might an interest group choose a specific type of media to address a civic issue?",
    "options": [
      "To replace the political process",
      "To ensure the issue is ignored",
      "To reach a targeted audience effectively",
      "To limit public access to information"
    ],
    "answer": 2,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "What is a key consideration when devising a plan to address a civic issue?",
    "options": [
      "Weighing the costs and benefits of each solution",
      "Ignoring the costs of proposed solutions",
      "Avoiding public input",
      "Limiting government involvement"
    ],
    "answer": 0,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "Which of the following is an example of civic engagement at the local level?",
    "options": [
      "Paying federal taxes",
      "Voting for president",
      "Attending a city council meeting",
      "Serving in the military"
    ],
    "answer": 2,
    "topic": "CS1 Civic Engagement"
  },
  {
    "prompt": "What is a key factor in determining the credibility of a source?",
    "options": [
      "The reputation of the writer or organization",
      "The length of the source",
      "The number of advertisements",
      "The publication date alone"
    ],
    "answer": 0,
    "topic": "CS2 Source Credibility"
  },
  {
    "prompt": "Which of the following indicates a source may lack credibility?",
    "options": [
      "Use of supporting evidence",
      "Evidence of bias or unstated assumptions",
      "Internal consistency",
      "Logical conclusions"
    ],
    "answer": 1,
    "topic": "CS2 Source Credibility"
  },
  {
    "prompt": "When researching a civic issue, what should students do first?",
    "options": [
      "Accept all sources as credible",
      "Ignore the perspective of the source",
      "Determine which sources are relevant to the task",
      "Avoid analyzing the source's context"
    ],
    "answer": 2,
    "topic": "CS2 Source Credibility"
  },
  {
    "prompt": "How does persuasion contribute to the democratic process?",
    "options": [
      "It prevents compromise",
      "It helps achieve agreement by convincing others",
      "It eliminates negotiation",
      "It restricts participation"
    ],
    "answer": 1,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "What is the purpose of consensus building in government?",
    "options": [
      "To create conflict among groups",
      "To limit public involvement",
      "To enforce laws directly",
      "To settle differences and achieve agreement"
    ],
    "answer": 3,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "Which skill is essential for effective negotiation in the democratic process?",
    "options": [
      "Compromising to reach a solution",
      "Ignoring opposing viewpoints",
      "Avoiding debate",
      "Limiting public input"
    ],
    "answer": 0,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "How does compromise contribute to democratic governance?",
    "options": [
      "It prevents decision-making",
      "It allows groups to find mutually acceptable solutions",
      "It eliminates the need for laws",
      "It restricts civic participation"
    ],
    "answer": 1,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "In what context are persuasion and negotiation typically used in government?",
    "options": [
      "As isolated techniques",
      "To limit public policy processes",
      "Within group dynamics to make decisions",
      "To enforce judicial rulings"
    ],
    "answer": 2,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "Which of the following is an example of using persuasion in government?",
    "options": [
      "A judge issuing a ruling",
      "A citizen paying taxes",
      "A senator debating a bill to gain support",
      "A president vetoing a law"
    ],
    "answer": 2,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "Why is evaluating source credibility important in civic participation?",
    "options": [
      "It prevents consensus building",
      "It helps make informed decisions on issues",
      "It ensures all sources are accepted",
      "It limits public debate"
    ],
    "answer": 1,
    "topic": "CS3 Democratic Processes"
  },
  {
    "prompt": "What is an example of the judicial branch checking the legislative branch?",
    "options": [
      "Vetoing a law",
      "Approving treaties",
      "Declaring a law unconstitutional",
      "Impeaching judges"
    ],
    "answer": 2,
    "topic": "CS13 Checks and Balances"
  },
  {
    "prompt": "What is a civic responsibility tied to the right to vote?",
    "options": [
      "Serving in the military",
      "Being informed on public issues",
      "Paying federal taxes",
      "Attending jury trials"
    ],
    "answer": 1,
    "topic": "CS4 Civic Responsibilities"
  },
  {
    "prompt": "How has the U.S. Supreme Court extended civil rights?",
    "options": [
      "By passing voting rights laws",
      "By eliminating the Bill of Rights",
      "Through the doctrine of incorporation",
      "By limiting state powers entirely"
    ],
    "answer": 2,
    "topic": "CS14-15 Civil Rights"
  },
  {
    "prompt": "What action did the executive branch take to support civil rights in the 1950s?",
    "options": [
      "Passed the Civil Rights Act",
      "Used troops to integrate schools",
      "Declared laws unconstitutional",
      "Eliminated poll taxes"
    ],
    "answer": 1,
    "topic": "CS14-15 Civil Rights"
  },
  {
    "prompt": "How is the Ohio Constitution similar to the U.S. Constitution?",
    "options": [
      "Both appoint judges",
      "Both limit legislator terms",
      "Both have a separation of powers into three branches",
      "Both allow citizens to vote directly on laws"
    ],
    "answer": 2,
    "topic": "CS16 Ohio Constitution"
  },
  {
    "prompt": "What is a key difference between the Ohio and U.S. Constitutions?",
    "options": [
      "Ohio's Constitution allows initiative and referendum",
      "The U.S. Constitution elects judges",
      "Ohio's Constitution has no bill of rights",
      "The U.S. Constitution limits legislator terms"
    ],
    "answer": 0,
    "topic": "CS16 Ohio Constitution"
  },
  {
    "prompt": "What change was made in the 1851 Ohio Constitution?",
    "options": [
      "Removed the bill of rights",
      "Centralized power in the state government",
      "Eliminated the judicial branch",
      "Elected major executive officials and judges"
    ],
    "answer": 3,
    "topic": "CS16 Ohio Constitution"
  },
  {
    "prompt": "How can Ohio citizens assist local governments?",
    "options": [
      "By ignoring local issues",
      "By limiting public petitions",
      "By serving in volunteer fire departments",
      "By avoiding community meetings"
    ],
    "answer": 2,
    "topic": "CS17 Ohio Civic Participation"
  },
  {
    "prompt": "What is a way Ohioans can engage at the state level?",
    "options": [
      "Attending federal court hearings",
      "Signing petitions to place issues on the ballot",
      "Serving in the U.S. military",
      "Passing local ordinances"
    ],
    "answer": 1,
    "topic": "CS17 Ohio Civic Participation"
  },
  {
    "prompt": "Which federal agency advises the president on foreign policy?",
    "options": [
      "Department of State",
      "Congressional Budget Office",
      "Federal Reserve",
      "Ohio Legislative Service Commission"
    ],
    "answer": 0,
    "topic": "CS18-19 Public Policy"
  },
  {
    "prompt": "What is an example of a public policy issue?",
    "options": [
      "A personal dispute between citizens",
      "Government addressing economic stability",
      "A private company's hiring practices",
      "A school's dress code policy"
    ],
    "answer": 1,
    "topic": "CS18-19 Public Policy"
  },
  {
    "prompt": "How can individuals influence public policy?",
    "options": [
      "By avoiding public meetings",
      "By ignoring government officials",
      "By limiting media use",
      "By lobbying legislators"
    ],
    "answer": 3,
    "topic": "CS18-19 Public Policy"
  },
  {
    "prompt": "What is fiscal policy used for by the federal government?",
    "options": [
      "To regulate the money supply",
      "To enforce judicial rulings",
      "To maintain economic stability through taxing and spending",
      "To limit state powers"
    ],
    "answer": 2,
    "topic": "CS20 Fiscal Policy"
  },
  {
    "prompt": "How does the Federal Reserve encourage economic growth?",
    "options": [
      "By increasing reserve requirements for banks",
      "By selling bonds",
      "By increasing taxes",
      "By lowering interest rates"
    ],
    "answer": 3,
    "topic": "CS21 Monetary Policy"
  },
  {
    "prompt": "What does the principle of popular sovereignty mean?",
    "options": [
      "States have supreme power",
      "Government authority comes from the people",
      "The judiciary controls the government",
      "Government power is unlimited"
    ],
    "answer": 1,
    "topic": "CS5 Basic Principles"
  },
  {
    "prompt": "How does limited government function in the U.S.?",
    "options": [
      "Government operates under the rule of law",
      "Government can exercise any power it wants",
      "Government ignores constitutional limits",
      "Government avoids public input"
    ],
    "answer": 0,
    "topic": "CS5 Basic Principles"
  },
  {
    "prompt": "What is federalism in the U.S. Constitution?",
    "options": [
      "Power is centralized in the national government",
      "Power is held only by the states",
      "Power is divided between national and state governments",
      "Power is shared equally among citizens"
    ],
    "answer": 2,
    "topic": "CS5 Basic Principles"
  },
  {
    "prompt": "Which branch of government is primarily responsible for making laws?",
    "options": [
      "Legislative",
      "Executive",
      "Judicial",
      "Federal Reserve"
    ],
    "answer": 0,
    "topic": "CS5 Basic Principles"
  },
  {
    "prompt": "What is the purpose of checks and balances?",
    "options": [
      "To concentrate power in one branch",
      "To allow each branch to restrain actions of others",
      "To eliminate separation of powers",
      "To limit public participation"
    ],
    "answer": 1,
    "topic": "CS5 Basic Principles"
  },
  {
    "prompt": "What did Federalists argue in favor of?",
    "options": [
      "A strong state government",
      "A national bill of rights",
      "Limiting national government powers",
      "Ratification of the U.S. Constitution"
    ],
    "answer": 3,
    "topic": "CS6 Federalists and Anti-Federalists"
  },
  {
    "prompt": "Why did Anti-Federalists oppose the U.S. Constitution?",
    "options": [
      "They wanted a stronger national government",
      "They feared it gave too much power to the national government",
      "They supported the Articles of Confederation entirely",
      "They opposed checks and balances"
    ],
    "answer": 1,
    "topic": "CS6 Federalists and Anti-Federalists"
  },
  {
    "prompt": "What was a key outcome of the Federalist and Anti-Federalist debate?",
    "options": [
      "The Articles of Confederation were kept",
      "The Bill of Rights was adopted",
      "The Constitution was rejected",
      "States gained supreme power"
    ],
    "answer": 1,
    "topic": "CS6 Federalists and Anti-Federalists"
  },
  {
    "prompt": "How has the U.S. Constitution changed over time?",
    "options": [
      "Through amendments, Supreme Court decisions, and legislation",
      "It remains unchanged since ratification",
      "Only through informal practices",
      "By eliminating the Bill of Rights"
    ],
    "answer": 0,
    "topic": "CS7 Constitutional Change"
  },
  {
    "prompt": "What is an example of an informal practice that changed constitutional government?",
    "options": [
      "Amending the Constitution",
      "Supreme Court judicial review",
      "Legislative oversight of the executive branch",
      "Passing civil rights legislation"
    ],
    "answer": 2,
    "topic": "CS7 Constitutional Change"
  },
  {
    "prompt": "Which amendment protects freedom of speech?",
    "options": [
      "First Amendment",
      "Second Amendment",
      "Fourth Amendment",
      "Tenth Amendment"
    ],
    "answer": 0,
    "topic": "CS8 Bill of Rights"
  },
  {
    "prompt": "What does the 4th Amendment protect against?",
    "options": [
      "Self-incrimination",
      "Unreasonable search and seizure",
      "Cruel and unusual punishment",
      "Denial of voting rights"
    ],
    "answer": 1,
    "topic": "CS8 Bill of Rights"
  },
  {
    "prompt": "Which amendment abolished slavery in the U.S.?",
    "options": [
      "Thirteenth Amendment",
      "Fourteenth Amendment",
      "Fifteenth Amendment",
      "Nineteenth Amendment"
    ],
    "answer": 0,
    "topic": "CS9 Reconstruction Amendments"
  },
  {
    "prompt": "What did the 14th Amendment primarily address?",
    "options": [
      "Presidential term limits",
      "Voting rights for women",
      "Citizenship and equal protection under the law",
      "Prohibition of alcohol"
    ],
    "answer": 2,
    "topic": "CS9 Reconstruction Amendments"
  },
  {
    "prompt": "Why did African Americans still face inequality after the Reconstruction Amendments?",
    "options": [
      "The amendments were repealed",
      "Jim Crow laws enforced racial segregation",
      "The amendments only applied to states",
      "The Supreme Court overturned them"
    ],
    "answer": 1,
    "topic": "CS9 Reconstruction Amendments"
  },
  {
    "prompt": "Which amendment granted women the right to vote?",
    "options": [
      "Nineteenth Amendment",
      "Fifteenth Amendment",
      "Twenty-third Amendment",
      "Twenty-sixth Amendment"
    ],
    "answer": 0,
    "topic": "CS10 Suffrage"
  },
  {
    "prompt": "What did the 24th Amendment eliminate?",
    "options": [
      "Gender-based voting restrictions",
      "Poll taxes",
      "Presidential term limits",
      "Slavery"
    ],
    "answer": 1,
    "topic": "CS10 Suffrage"
  },
  {
    "prompt": "How did the 12th Amendment change the Electoral College?",
    "options": [
      "It eliminated electoral votes",
      "It limited presidential terms",
      "It gave states more electoral votes",
      "It required separate balloting for president and vice president"
    ],
    "answer": 3,
    "topic": "CS11 Electoral College and Presidency"
  },
  {
    "prompt": "What does the 22nd Amendment establish?",
    "options": [
      "Citizenship for all born in the U.S.",
      "Electoral votes for D.C.",
      "Presidential term limits",
      "Voting rights for 18-year-olds"
    ],
    "answer": 2,
    "topic": "CS11 Electoral College and Presidency"
  },
  {
    "prompt": "Which branch of government enforces laws?",
    "options": [
      "Legislative",
      "Executive",
      "Judicial",
      "Federal Reserve"
    ],
    "answer": 1,
    "topic": "CS11 Electoral College and Presidency"
  }
];
