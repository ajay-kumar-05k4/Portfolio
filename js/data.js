// Edit this file to update projects, skills and certificates. Certificate files live in the Certificates folder.
const PROJECTS=[
{n:'Pro-Shopify',d:'AI e-commerce platform with a hybrid recommendation engine, live analytics dashboard and a Groq-powered support chatbot that escalates hard cases to admins.',s:['React','Node.js','Express','MongoDB','Python','Scikit-learn','Groq API','JWT'],live:'https://shopify-ecommerce-website-pi.vercel.app/'},
{n:'E-Voting through Blockchain',d:'Tamper-proof, verifiable elections on Ethereum Sepolia with voter authentication, an admin panel and real-time results. I led the 3-member team.',s:['React','Solidity','Hardhat','Node.js','MetaMask'],live:'https://evotingthroughblockchain.vercel.app/'},
{n:'Spam Detection Using NLP',d:'Email spam classifier with an end-to-end NLP pipeline: text preprocessing, TF-IDF vectorization and Scikit-learn models, deployed on Streamlit with confidence-score visualization.',s:['Python','NLTK','TF-IDF','Scikit-learn','Streamlit'],live:'https://spamdetectionusingnlp.streamlit.app/',code:'https://github.com/ajay-kumar-05k4/Spam_Detection_Using_NLP'},
{n:'SkillPass',wip:1,d:'Our major project: a decentralized, AI-powered digital skill passport where learners, institutions and employers verify credentials. Deployment coming soon.',s:['React','Node.js','MongoDB','Solidity','IPFS','FastAPI','Scikit-learn']}];
const GH='https://github.com/ajay-kumar-05k4';
const SKILLS={'Languages':['Java','Python','JavaScript','TypeScript','HTML5','CSS3'],'Web':['React','Node.js','Express','Bootstrap','REST APIs','JWT auth'],'AI and ML':['Machine learning','Generative AI','NLP','LLMs','RAG','Prompt engineering','Scikit-learn'],'Blockchain':['Solidity','Hardhat','MetaMask','Ethereum Sepolia'],'Databases':['MySQL','PostgreSQL','MongoDB','Firebase'],'Tools':['Git','Docker','Render','Vercel','Google Cloud','AWS'],'Core CS':['DSA','DBMS','OOP','System design','Networks','OS']};
// t=title, i=issuer, d=date, f=file in Certificates/, c=category, g=extra files (grouped)
const MONGO=['M2','M3','M4','M5','M6','M7','M8','M9','M10','M11'].map(x=>x+'.pdf');
const CERTS=[
{t:'PwC Advisory Launchpad',i:'PwC India',d:'Aug 2026',f:'23B81A05K4_pwc.pdf',c:'Industry'},
{t:'PwC micro-credentials: Python, Data Systems, Cloud, GenAI, Soft Skills',i:'PwC India',d:'Sep 2026',f:'Screenshot 2026-09-22 140615.png',c:'Industry'},
{t:'Networking Virtual Internship',i:'AICTE · EduSkills · Zscaler',d:'Apr–Jun 2025',f:'23B81A05K4_COHORT-12.pdf',c:'Industry'},
{t:'Networking for Cyber Professionals',i:'Zscaler Academy',d:'May 2025',f:'23B81A05K4_ZSCALER NETWORKING_COHORT_12.pdf',c:'Industry'},
{t:'JNCIA-Junos',i:'Juniper Networks',d:'Dec 2025',f:'23B81A05K4.pdf',c:'Industry'},
{t:'Introduction to Soft Skills',i:'TCS',d:'',f:'tcssoftskills.pdf',c:'Industry'},
{t:'AWS Cloud Foundations',i:'AWS Academy',d:'Jul 2026',f:'23B81A05K4_AWSFOUNDATIONS.pdf',c:'Cloud'},
{t:'AWS Cloud Operations',i:'AWS Academy',d:'Jul 2026',f:'23B81A05K4_AWSCLOUDOPERATIONS.pdf',c:'Cloud'},
{t:'Linux Fundamentals (RH104)',i:'Red Hat',d:'May 2026',f:'RedhatFundamentals.pdf',c:'Cloud'},
{t:'Complete Full-Stack Web Development Bootcamp',i:'Udemy',d:'',f:'fsdcertfificate.pdf',c:'Web'},
{t:'Master Full Stack Web Development',i:'Udemy',d:'Feb 2026',f:'FullStackWeb.pdf',c:'Web'},
{t:'React Crash Course',i:'Udemy',d:'May 2025',f:'Reactcertificate.pdf',c:'Web'},
{t:'JavaScript Master Course',i:'Udemy',d:'May 2025',f:'javascript.pdf',c:'Web'},
{t:'JavaScript APIs',i:'Udemy',d:'Nov 2025',f:'Screenshot 2025-11-30 140104.png',c:'Web'},
{t:'JavaScript',i:'Infosys Springboard',d:'Jun 2025',f:'Infosysjs.pdf',c:'Web'},
{t:'HTML and CSS, Beginner to Advanced',i:'Udemy',d:'May 2025',f:'HTML-CSS-CERTIFICATE.pdf',c:'Web'},
{t:'GA4 Data and Reports',i:'Google Skillshop',d:'May 2025',f:'Dive Deeper into GA4 Data and Reports • Ajay .M 10 k1 • Skillshop.pdf',c:'Web'},
{t:'Mastering AI Agents Bootcamp',i:'Udemy',d:'Jan 2026',f:'Ai_agents_udemy.pdf',c:'Data and AI'},
{t:'NumPy, Pandas, SciPy, Matplotlib, Seaborn',i:'Udemy',d:'Oct 2025',f:'dslibraries.pdf',c:'Data and AI'},
{t:'Machine Learning with Python, Level 1',i:'IBM',d:'May 2025',f:'IBMDesign20250528-27-nic9z5.pdf',c:'Data and AI'},
{t:'Machine Learning with Python (ML0101EN)',i:'IBM Cognitive Class',d:'May 2025',f:'IBM ML0101EN Certificate _ CognitiveClass.pdf',c:'Data and AI'},
{t:'Python Coder badge',i:'Kaggle',d:'',f:'Python Coder.png',c:'Data and AI'},
{t:'PostgreSQL Bootcamp',i:'Udemy',d:'Jan 2026',f:'postgresudemy.pdf',c:'Databases'},
{t:'Introduction to Database Systems',i:'NPTEL · IIT Madras',d:'Jan–Apr 2025',f:'swayamdbms.pdf',c:'Databases'},
{t:'MongoDB for Students, 11 modules',i:'MongoDB University',d:'Aug 2025',f:'MONGO1.pdf',c:'Databases',g:MONGO},
{t:'Programming in Java (Elite, Top 5%)',i:'NPTEL · IIT Kharagpur',d:'Jul–Oct 2024',f:'Programming in Java (1).pdf',c:'Programming'},
{t:'C Basics for Beginners',i:'E-Box',d:'2023–24',f:'CVR23B81A05K4.pdf',c:'Programming'},
{t:'Python Basics for Beginners',i:'E-Box',d:'2024',f:'CVR23B81A05K4 (1).pdf',c:'Programming'},
{t:'Data Structures Using C',i:'E-Box',d:'2024',f:'CVR23B81A05K4 (2).pdf',c:'Programming'},
{t:'Java Basics for Beginners',i:'E-Box',d:'2024',f:'CVR23B81A05K4JAVA.pdf',c:'Programming'},
{t:'Advanced Java Programming',i:'E-Box',d:'2024',f:'JAVA2.pdf',c:'Programming'},
{t:'Smart Coder, Gold Certified',i:'Smart Interviews',d:'2025',f:'Screenshot 2026-10-01 230237.png',c:'Programming'}];
