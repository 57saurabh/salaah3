import IMG1 from "../../assets/cisco2.jpg";
import IMG2 from "../../assets/amazon.jpeg";
import IMG3 from "../../assets/gold.jpg";
import IMG4 from "../../assets/infosys.jpg";
import IMG5 from "../../assets/synopsys.jpg";
import IMG6 from "../../assets/tcs.jpg";
import IMG7 from "../../assets/capgemini.jpg";
import IMG8 from "../../assets/cognizant.jpg";
import IMG9 from "../../assets/accenture.jpg";
import Mentors from '../Company/mentors'
import { mentorAccenture, mentorAmazon, mentorCapgemini, mentorCisco, mentorCognizant, mentorGoldmansachs, mentorInfosys, mentorSynopsys, mentorTcs } from "./mentorList";

export const compdata = [
  {
    id: 1,
    mentors: mentorCisco.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    company: "Cisco",
    cover: IMG1,
    alum__img: "https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB",
    alum__name: "Sameeksha Agarwal",
    alum__link: "https://www.linkedin.com/in/shreyansh-shukla-38842b187",
    about: (
      <div>
        The top supplier of goods, equipment, and networking-related services worldwide is <b> Cisco Systems. </b> Two Stanford University scientists
        founded the business in 1984 after discovering a simpler method of integrating numerous distinct computer systems. With thousands of employees dispersed over more than 115 countries, Cisco Systems, whose first product was sold in 1986, is today a multinational corporation. Today, Cisco provides networking solutions to a wide range of service
        providers, small- to medium-sized businesses, and enterprise clients,
        including businesses in the public sector, large corporations,
        utilities, and educational institutions.
        <br />
        <br />
        The ability to connect people, computer networks, and computing devices
        with Cisco's networking solutions enables users to access or transmit
        data regardless of differences in location, time, or computer system
        type. Cisco offers extensive networking solutions that customers can use
        to connect to other networks or create their own internal, unified data
        infrastructure. The most comprehensive selection of hardware components
        available in the market is provided by Cisco, which also offers various
        software, which enables networked applications and offers network
        services.
        <br />
        <br />
        Cisco doesn't adopt a rigid strategy where it favours one technology
        over the others and forces it on clients as the sole option, in contrast
        to other IT corporations. Cisco's philosophy is to pay attention to
        client requests, keep an eye on all technological developments, and
        offer them a variety of solutions. Cisco bases the development of its
        products and solutions on generally recognised industry standards.
      </div>
    ),
    jd: "Job Profile: Cisco Intern",
    process: (
      <div>
        Hundreds of applicants go through the Cisco interview process each year.
        Candidates that are more knowledgeable about networking principles and
        possess strong analytical abilities and computer intelligence will have
        no trouble passing the <b>Cisco interview.</b>
        <br /> <br />
        Selection Process involves three rounds:
        <br /> <br />        
        <ul>
          <li>
            <b>Online Assessment Test</b>: This assessment consists of the
            following sections with no negative marking.{" "}
          </li>
          <li>
            <b>Aptitude Test:</b> Questions around Probability, Permutations and
            Combinations, Algebra, Simple and Compound Interest, Number Series,
            Profit and Loss, etc.
          </li>
          <li>
            <b>Technical Test:</b> Questions around Computer Networking, C,
            Algorithms, Data Structures as well as digital electronics, CMOS and
            Microprocessor, etc.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    mentors:  mentorAmazon.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    // (<Mentors name="Shreyansh Shukla" img="https://drive.google.com/uc?export=view&id=1Bk266gmynWUZmP2BZCY8s2NVoMemLTmQ" link="https://www.linkedin.com/in/shreyansh-shukla-38842b187" />),
    company: "Amazon",
    cover: IMG2,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about:(
        <div>
            The American multinational technology corporation <b>Amazon</b> focuses on a wide range of industries, including e-commerce, cloud computing, artificial intelligence (AI), digital streaming, etc. Along with Google, Apple, Microsoft, and Facebook, it is regarded as one of the Big Five corporations in the US IT sector.
Amazon is recognised for its massive industry disruptions brought about by technology innovation and size. Being the largest online retailer, provider of AI assistants, and cloud computing platform in the world, Amazon employs over six lakh people, of whom more than 50,000 are Indians. As a result of it being the largest Internet company in the world in terms of revenue at the moment, Amazon has the greatest worldwide brand valuation.
        </div>
    ),
    process: (
        <div>
            It has the following rounds for the off campus process: <br /><br />
            <ul>
                <li>
                    <b><h2>Application: </h2></b><br />
                Best way to get noticed by Amazon recruiters is to maintain a good Linkedin profile and message recruiters. The candidate can also apply on the Amazon job portal but it is suggested that they also get a referral from an Amazon employee.
                </li><br />
                <li>
                    <b><h2>Interview Rounds: </h2></b><br />
                Amazon conducts four interview rounds alongside an initial coding test. The coding test consists of DS/Algo problems. The first round is an HR round where they ask behavioral questions along with Computer Science theory questions to the candidate. The next three rounds focus solely on DS/Algo.
                </li><br />
                <li>
                    <b><h2>After Interviews: </h2></b><br />
                    The recruiter contacts the candidate after these rounds and tells the verdict. They also look at the candidate’s leadership principles along with technical skills.
                </li>
            </ul>
        </div>
    ),
  },
  {
    id: 3,
    mentors: mentorGoldmansachs.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }), 
    // (<Mentors name="Aarushi Rai" img="https://drive.google.com/uc?export=view&id=1cr9C3kducCWZsfvqJS6TgVg2Z9jMwvro" link="https://www.linkedin.com/in/aarushi-rai-0a176a1a7/?originalSubdomain=in" />),
    company: "Golman Sachs",
    cover: IMG3,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        In the areas of investment banking, securities, investment management,
        and consumer banking, The <b>Goldman Sachs Group, Inc.</b> is a
        preeminent international financial organisation that offers a wide range
        of financial services to a sizable and varied clientele that consists of
        businesses, financial institutions, governments, and private citizens.
        Utilizing its more than 150 years of experience working with the finest
        businesses, entrepreneurs, and organisations in the world, Goldman Sachs
        mobilises its personnel and assets to increase client success, increase
        individual prosperity, and hasten economic growth for all. According to
        Goldman Sachs, collaboration, teamwork, and honesty provide the ideal
        environment for employees to provide the best results for their clients.
        It looks for individuals who will flourish in this setting, prioritising
        communication, passion, and rapid thinking over certain qualifications.
      </div>
    ),
    jd: "Job Profile: Golman Sachs Summer Intern",
    process: (
      <div>
        The Goldman Sachs online assessment test is divided into the following
        sections: <br /> <br />
        <ul>
          <li>
            <b><h2>Online Assessment Test </h2></b><br />
            The Goldman Sachs online assessment test is divided into the
            following sections: <br /> <br />
            <b>• Quantitative Aptitude:</b> It contains questions related to Numerical Computations and Numerical Reasoning. Prepare questions related to Numbers, Profit and Loss, Permutation and Combination, Averages, Time Speed and Distance, Ratio, Probability among other topics. Candidates' mathematical ability will be assessed through Diagrammatic puzzles and Series. <br /> <br /> <b>• Reasoning:</b> It contains questions related to Logical Reasoning, Abstract Reasoning and Diagrammatic Reasoning. Be prepared on questions related to Data Arrangements, Coding and Decoding, Data Interpretation, Algorithms/ Flowcharts, Circuits, Input-Output patterns among other topics. <br /> <br /> <b>• Verbal:</b> This section is related to Reading Comprehension. You must practise the topics listed below in order to answer more efficiently: Improvement and Correction of Sentences, Articles and Fill in the blanks. <br /> <br /><b>• Technical section:</b> Technical Test will contain questions related to the Coding Aptitude(Advance), Computer science, Competitive Programming and Subjective Questions.
          </li>
          <br />
          <li>
            <b><h2>Technical Interview </h2></b> <br />
            Candidates who successfully complete the online assessment exam
            stage will receive an invitation to a technical interview in person.
            Technical interviews are designed to evaluate your technical skills,
            which are typically tailored to the position you are pursuing, as
            well as your problem-solving and stress-management talents. The
            interviewer will also assess your ability to solve problems. You'll
            be questioned about your prior endeavours and employment history, as
            well as what you accomplished, how you used technology, and the
            degree of your achievement. Know the foundations of computers as
            well and be ready.
            <br />
            Candidates with a solid conceptual grasp of at least one programming
            language, ideally C/C++, Java, Python, or JavaScript, are sought
            after by Goldman Sachs.
          </li>
          <br />
          <li>
            <b><h2>HR Interview</h2></b> <br />
            Candidates advance to the HR phase only after successfully
            completing the technical interview. Examining a candidate's
            personality, background, strengths, and shortcomings in order to
            assess whether or not they are a suitable fit for a particular
            position is the main objective of an HR interview. Therefore, it's
            critical to prepare thoroughly for the HR interview.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    mentors: mentorInfosys.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    // mentors: (<Mentors name="Kunal Tyagi" img="https://drive.google.com/uc?export=view&id=1eWdwx41DmlnRx-Nf5YQP1HK_hUs5LsNw" link="https://www.linkedin.com/in/kunal-tyagi-4042b217a/" />),
    company: "Infosys",
    cover: IMG4,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        A leading worldwide IT consulting firm, Infosys helps customers from a
        range of industry segments improve their business performance by
        offering end-to-end solutions in the areas of business consulting,
        information technology, and outsourcing services. Infosys primarily
        provides businesses in the manufacturing, insurance, and other
        industries with software development, product maintenance, and
        independent validation services. <br /> <br />
        Before changing its name to Infosys, the company was known as Infosys
        Technologies Ltd. N. R. Narayana Murthy and a group of six other
        engineers created Infosys in Pune. Just $250 in startup funding was used
        to launch the firm. Bangalore, India presently serves as the
        headquarters of Infosys. Infosys supports customers in more than 50
        countries as they develop and carry out various plans for their path
        toward digital transformation. Infosys not only assists its clients in
        improving their overall company performance but also promotes their
        transformation into smarter organisations. Their clients may thus
        concentrate on the most important business objectives. <br /> <br />
        Infosys has extensive industry knowledge. Infosys offers very effective,
        cutting-edge goods and services, from assisting in the development of
        lighter, stronger passenger aircraft and more fuel-efficient smart
        automobiles to supplying banks with the means to extend financial
        inclusion to the world's most remote regions. Infosys alters how people
        live and work through this rigorous procedure.
      </div>
    ),
    jd: "Job Profile: Infosys SDE Intern",
    process: (
      <div>
        In general, you must meet Infosys' academic requirements in order to
        apply. For classes 10, 12, and graduation, students must earn at least
        60 percent of the possible points. <br /> <br /> After that, the
        qualified applicants must proceed through Infosys' three recruiting
        phases, which include: <br />
        <ul>
          <li>
            <b>• Online Evaluation Test</b>
          </li>
          <li>
            <b>• HR Interview</b>
          </li>
          <li>
            <b>• Technical Interview</b>
          </li>
        </ul>
        <br />
        The hiring procedure is the same for experienced applicants as well.
        However, for some crucial positions, you might need to go through two or
        more rounds of technical interviews before an HR interview. <br />
        <br />
        <h2>Online Assessment</h2>
        <br />
        The three portions of the online assessment exam each have time
        constraints and cutoffs. The online assessment test has three portions,
        including these: <br /> <br />
        <b>Logical and Analytical Reasoning</b>: Questions in this area range in
        difficulty from easy to somewhat difficult and are based on concepts
        like data sufficiency, data interpretation, visual reasoning, statement
        reasoning, syllogism, etc. <br /> <br />
        <b>Quantitative aptitude</b>: Questions in this area range in complexity
        from moderate to high and cover topics like time, permutations and
        combinations, speed and distance, number series, analytical puzzles,
        formulas, algebra, probability, etc. <br />
        <br />
        <b>Verbal Ability</b>: In this round, you may anticipate vocabulary
        questions, fill-in-the-blanks, completion of paragraphs, sentence
        correction, and more. The number of inquiries and the amount of time
        allotted for the aforementioned parts in this round may change depending
        on the interviews.
        <br /><br />
        <h2>Technical Interview</h2><br />
        You will be contacted for a technical interview if you pass the online assessment test. During this stage, questions based on the candidates' resumes and areas of interest are often posed. Computer foundations including operating systems, data structures, and algorithms, as well as understanding of the most recent developing technologies, are some other factors that might help you earn a decent score in this round. You are required to have some solid knowledge of at least one programming language. You must decide on and be ready for a subject of interest that is directly relevant to the position. Your ability to solve problems may occasionally be evaluated in this round, possibly through puzzles and aptitude tests. Additionally, be prepared to respond to inquiries about your projects and/or internships.<br /><br />
        <h2>HR Interview</h2><br />
        If you pass the technical interview, you will be invited to the HR interview stage. Essentially, the goal of this evaluation is to determine if you are the greatest candidate for the firm. Your history, education, interests, and even your outlook on life are all up for scrutiny in this situation. Some queries about the Infosys corporation must be anticipated. Be prepared to answer any inquiries meant to gauge your sincerity in your application for the position.
      </div>
    ),
  },
  {
    id: 5,
    
    mentors:mentorSynopsys.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }), 
    // (<Mentors name="Anshita Yadav" img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T" link="https://www.linkedin.com/in/anshita-yadav-a4748a213/" />),
    company: "Synopsys",
    cover: IMG5,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
    <div>
      Technology from Synopsys is at the core of technologies that are revolutionising how people work and play. Autonomous vehicles. learning computers. blazing-fast connectivity among the datasphere's trillions of gadgets. These innovations have ushered in the era of "Smart Everything," where gadgets are becoming more intelligent and interconnected, and security is built right into the design.<br /> <br />

High-performance silicon processors and an increasingly expanding volume of software content are driving this new age of innovation. With the most cutting-edge technologies available for chip design, verification, IP integration, and software security and quality testing, Synopsys is at the forefront of the Smart Everything movement. We support our clients' innovation efforts from silicon to software so they may create incredible new products.
    </div>
    ),
    jd: "Job Profile: Synopsys SDE Intern",
    process: (
      <div>
        Synopsys conducts 5-8 rounds to select freshers as Software Engineer in their organisation.<br /><br />
        <ul>
          <li>• Written Round</li>
          <li>• Technical Round 1</li>
          <li>• Technical Round 2</li>
          <li>• Technical Round 3</li>
          <li>• Technical Round 4</li>
          <li>• Technical Round 5</li>
          <li>• HR Round 1</li>
          <li>• HR Round 2</li>
        </ul><br />
        <h1>Academic Criteria: </h1><br />
        <li>• 75 percent or above in B.Tech, Class X and XII.</li>
        <li>• No backlogs at the time of interview.</li>
        <br />
        <br />
        <h2>Online Round :</h2><br />
        Written round oftenly consists of questions Quantitative Aptitude, Logical Ability, C, C++, Algorithm, Data structures, Digital Design. To be prepared for aptitude section you can practice from our Placement Section.<br /><br />
        <h2>Technical Rounds:</h2><br />
        The students who clear the written round are called for Technical Interview.To clear this round you should be clear with your basics. You should be prepared with Data structures and Algorithms, and C language. Students will be expected to write codes in the interview. They could also be ask questions from resume. You may be asked puzzles in this round. To be prepared for puzzles you can practice from our Puzzles section.<br /><br />

        <h2>HR Round :</h2><br />
        You can expected general HR questions like :
        <li>• Tell me about Yourself</li>
        <li>• Why Synopsys?</li>
        <li>• What will you do if you get offer from Google/Facebook, etc ?</li>
        <li>• What kind of culture do you want to work in?</li>
        <li>• What are your strengths and weaknesses ?</li>
        <li>• Questions form resume</li><br />
      </div>
    ),
  },
  {
    id: 6,
    mentors: mentorTcs.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    // mentors: (<Mentors name="Animesh Porkhriyal" img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO" link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/" />),
    company: "TCS",
    cover: IMG6,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Since more than 50 years ago, many of the top organisations in the world
        have relied on Tata Consultancy Services for IT services, consulting,
        and business solutions. Its headquarters are in Mumbai, Maharashtra,
        while Chennai, Tamil Nadu, serves as its primary campus. As of February
        2021, <b>TCS</b> had the greatest market capitalization among IT
        services providers worldwide. The Tata group, the largest international
        corporate conglomerate in India, includes TCS. Being associated with a
        brand not only gives you the confidence that your career is on the right
        course, but it also goes some way toward ensuring job stability. People
        think that TCS can help them develop in their professions while yet
        preserving a healthy work-life balance.
      </div>
    ),
    jd: "Job Profile: Software Engineer",
    process: (
      <div>
        <ul>
          <li>
            <h2>Round 1 (TCS NQT): </h2>
            <br />
            The TCS NQT (National Qualifier Test), the initial round of the
            hiring process, is regarded as one of the trickiest parts of the
            process. It is an aptitude test that assesses a candidate's
            competencies. TCS NQT Exams are available at TCS iON Authorised Exam
            Centers as well as online (at home). <br />
            This test has the following section: <br /><br />
            <b>Numerical ability</b>:<br /> Number Systems, Arithmetic, Elementary
            Statistics, and Data Interpretation are all assessed in this part.{" "}
            <br />
            Verbal Ability: This section assesses English grammar, how to use it
            correctly, and reading comprehension.
            <br />
            Reasoning ability: Identifying words and mathematical patterns,
            problem-solving, figurative and factual analysis, decision-making,
            propositional reasoning, and visual-spatial reasoning are all
            assessed in this section.
            <br />
            Programming Section: Pseudo-code, Algorithms, Programming
            structures, fundamental Software Development Life Cycle (SDLC) and
            its stage-wise documents, and implementation using C, C++, and Java
            will be tested. <br />
          </li>
          <li><br />
            <b>Technical interview: </b>
            <br />
            Make every effort to get ready for this stage of the hiring process
            as it is the most difficult. Your technical knowledge, biography,
            and key projects will be the main topics of discussion throughout
            the entire interview process. The face-to-face technical round of
            the TCS interview consists of questions aimed at determining the
            candidate's proficiency with object-oriented programming concepts,
            database management systems, operating systems, networking, and a
            programming language of your choosing. There is a good likelihood
            that you will be required to write some code on paper.
          </li>
          <li><br />
            <b>Managerial interview: </b>
            <br />A group of senior members oversee the managerial round. This
            round of interviews also takes place in person. This round may be
            made up entirely of technical questions or may include both
            managerial and technical inquiries. Most of the inquiries are
            related to the position for which you are being interviewed. Any new
            software or technology that are necessary for that position should
            be familiar to you. In order to evaluate your thinking style, you
            could also be asked questions based on your behaviour. It's possible
            that you'll face pressure to test how you handle it. The
            accomplishments listed on your CV could be contested, and you might
            need to defend them. You can be asked questions about your prior
            employment, goals, reasons for joining TCS, and other related
            subjects.
          </li>
          <li><br />
            <b>HR Round: </b>
            <br />
            Along with the typical HR inquiries about your skills and
            shortcomings, motivations for applying to the company, reasons why
            you should be recruited, etc., you can anticipate inquiries about
            your work history, schooling, extracurricular activities, and family
            history. They can also inquire about TCS, including its founding
            date, goals, core principles, organisational structure, and other
            details.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    mentors: mentorCapgemini.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    // mentors: (<Mentors name="Animesh Porkhriyal" img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO" link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/" />),
    company: "Capgemini",
    cover: IMG7,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        <p>It is an information technology consulting company
        specializing in technology and professional engineering
        services. <b>Capgemini</b> partners with companies to transform and
        manage their businesses by unlocking the value of
        technology.</p>
        <p>As a leading strategic partner to companies around the
        world, we have leveraged technology to enable business
        transformation for more than 50 years. We address the entire
        breadth of business needs, from strategy and design to
        managing operations. To do this, we draw on deep industry
        expertise and a command of the fast-evolving fields of
        cloud, data artificial intelligence, connectivity, software,
        digital engineering, and platforms.</p>
      </div>
    ),
    jd: "Job Profile: Analyst, Senior Analyst",
    process: (
      <div>
       The Pseudo Code section of Capgemini tests student's
ability to answer questions that test:<br /><br />
        <ul>
          <li>• Understanding of programming logic (tested through
Pseudocode Questions)</li>
          <li>• C, C++, and Java</li>
          <li>• Data Structures and Algorithms</li>
          <li>• Object-Oriented Programming (OOPS)</li>
          <li>• Database</li>
          <li>• Networking</li>
          <li>• Cloud Fundamentals</li>
        </ul>
            This is an MCQ round.
        <br /><br/>
        <h2>MCQ-Based English Communication Test :</h2><br />
        This is a new round that has replaced the Essay Writing round that Capgemini had until last year. This round will test students' ability to answer questions which will be multiplechoice questions. Here are the areas to prepare for the English Communication test.<br />
        <h4>Areas of English Communication Test</h4>
        <li>• Reading Comprehension</li>
          <li>• Para-Jumbles</li>
          <li>• Direct and Indirect Speech</li>
          <li>• Active and Passive Voice</li>
          <li>• Sentence Correction</li>
          <li>• Sentence Completion</li>
          <li>• Vocabulary</li>
        <br /><br/>
        <h2>Game-Based Aptitude Test :</h2><br />
        This is the most exciting new round in the Capgemini
        Recruitment Process - the Capgemini Gamified Quantitative Aptitude Test. It is expected to be a series of 4 games thatone must solve. Here are the different types of games that appear in the test.<br />
        <h4>Type of Game</h4>
        <li>• Deductive Logical Thinking</li>
          <li>• Inductive Logical Thinking</li>
          <li>• Grid Challenge</li>
          <li>• Motion Challenge</li>
        <br /><br/>

        <h2>Behavioral Competency Profiling: </h2><br />
        This round (called the ADEPT-15 or the Adaptive Employee
        Personality Test) is a personality psychometric intended to
        measure work-related behavior. <br />
        <li>• The assessment is composed of pairs of statements.</li>
        <li>• You need to indicate which one you agree with more.</li>
        <li>• There will be 5 pairs of statements on each screen.</li>
        <li>• You cannot skip any item to continue to the next page.</li>
        This Behavioural Competency Profiling is not an elimination
        round.
        <br />
        <br />
       
        <h2>Technical Rounds:</h2><br />
        In the technical interview, Capgemini focuses on analyzing
        your application skills & knowledge of technology. Hence in
        this round, you can expect questions on the below-given
        topics:<br />
        <li>• Projects you have worked on: Make sure you know in and
        out of every project that is mentioned in your resume.
        Right from the logic to components used if any and also
        the flow/circuit diagram.</li>
        <li>• The subject of Interest: Before getting into technical
        questions, you will be asked about your favorite
        subjects/subjects of interest. All the questions in this
        interview will be focused on testing your knowledge in
        those subjects.</li>
        <li>•Latest Technologies: You also need to be aware of
          trending technologies like AI, Cyber Security, etc. There
          is a chance that you might be asked about these topics.</li>
        <br /><br/>

        <h2>HR Round :</h2><br />
        The HR interview is just a formality. Students who have
cleared the Technical interview will be called for this round.
In this round, you just have to take care of your
communication skills and present yourself well.
Be prepared for common HR interview questions like :
        <li>• Tell us about yourself.</li>
        <li>• What is your expectation with respect to the role?</li>
        <li>• Why Capgemini?</li>
       <br />
      </div>
    ),
  },
  {
    id: 8,
    mentors: mentorCognizant.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    company: "Cognizant",
    cover: IMG8,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        <p><b>Cognizant</b> is an American multinational corporation that provides ITservices, including digital, technology, consulting, and operations services. It is headquartered in Teaneck, New Jersey, United States. <b>Cognizant</b> is listed in the NASDAQ-100 and the S&P 500 indices. It was founded as an in-house technology unit of Dun & Bradstreet in 1994, and started serving external clients in 1996. [Source : Wikipedia]</p>
        <p><b>Cognizant</b> is listed for the ninth consecutive years among Fortune's Most Admired Companies. <b>Cognizant</b> is also listed on Forbes FastTech 25 companies at 18th positions. With over 50 delivery centers worldwide and approximately 244,300 employees as of June 30, 2016, <b>Cognizant</b> is a member of the NASDAQ-100, the S&P 500, the Forbes Global 2000 and the Fortune 500 and is ranked among the top performing and fastest growing companies in the world.</p>
        <p>Serving clients, solving problems, and enhancing human experiences motivate everything <b>Cognizant</b> does. If you're as passionate about the possibilities as <b>Cognizant</b> is, discover the best digital opportunities for your business.</p>
      </div>
    ),
    jd: "Job Profile: GenZ Next, GenC Elevate, GenC",
    process: (
      
      <div>
        <div>
         <h1>Hiring process:</h1> <br /> <br />
         <h3>GenC - Generation Cognizant (Entry level)</h3> <br />
         Cognizant believes in hiring passionate individuals who have the zeal to excel and go beyond boundaries to make a difference with their digital competence. Our hiring process recognizes how the candidates come with varied exposure to IT. We offer them options based on their interest and IT prowess. The hiring channels are spread across 3 different routes: GenC, GenC Elevate, GenC Pro. All roles require students to go through either an aptitude or technical assessments, communication assessments along with technical / SME interviews.
        </div>
        <br /> <br />
        <h2>Profile 1-GenZ Next</h2> <br /> 
        Cognizant conducts 3 rounds to select freshers in their organization.<br /><br />
        <ul>
          <li>• Written Round</li>
          <li>•Technical Round</li>
          <li>• HR Round</li>
        </ul>
        <br /><br/>
        <h3>Structure Of Exam :</h3><br />
        <h4>Written Round:</h4><br />
        The Written round consists of two major sections namely General Aptitude Test and Verbal Ability Test. General Aptitude Test, has mathematical reasoning part and logical reasoning part and verbal ability Test.<br />
        <h4>Technical Round and HR Round :</h4>
        The students who clear the written round are called for Technical Interview. There is no hard & fast rule for which questions will be asked in this round, you can expect questions on any topic depending on the panel. To clear this round you should be clear with your basics. You should be prepared with Data structures and Algorithms, DBMS, Operating systems, Networking, OOPs concepts and a programming language of your choice. Students from branches other than CS should prepare for the other two subjects related to their branch. CS students will be expected to write codes in the interview. They also ask questions from resumes. You may be asked puzzles in this round.
        <li>• Interview- Basic Interview</li>
        <br /> <br /> 

        <h2>Profile 3-GenC </h2> <br /> 
        Must apply for skill based assessment and then shortlisted for the profile of GenC Next or GenC Elevate.<br /><br />
        
        <h3>Structure Of Exam :</h3><br />
        Skill Based Assessment
        <ul>
          <li>• Numerical Ability</li>
          <li>• Abstract Reasoning</li>
          <li>• Analytical Reasoning</li>
          <li>• Critical Reasoning</li>
          <li>• Verbal Ability</li>
          <li>• Programming and DSA</li>
          <li>• Data Interpretation</li>
        </ul>
       
        <li>Interview Process-Basic Technical+Communication</li>
        <br /><br />
        <h2>Profile 3-GenC</h2> <br /> 
       <h4>Round 1:</h4>
          <li>• Skill Based Assement</li>
       <h4>Round 2:</h4>
          <li>• Technical/HR Interview</li>
       
        <br /><br/>
        <h3>Structure Of Exam :</h3><br />
        <h4>Written Round:</h4><br />
        The Written round consists of two major sections namely General Aptitude Test and Verbal Ability Test. General Aptitude Test, has mathematical reasoning part and logical reasoning part and verbal ability Test.<br />
        <li>•Interview Process-Basic Technical + Communication</li>
        <br /> <br />  
      </div>
    ),
  },
  {
    id: 9,
    mentors: mentorAccenture.map(({name,id,img,link})=>{
      return (
        <Mentors name={name} img={img} link={link} />
      );

    }),
    company: "Accenture",
    cover: IMG9,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Accenture plc is an Irish-American professional services company based in Dublin, specializing in information technology services and consulting. Accenture provides business consultancy, technology strategies, and operation strategies. Accenture also works as “a service model” of service delivery. It also provides mobility services.
      </div>
    ),
    jd: "Job Profile: Associate Software Engineer (ASE), Software Engineer (SE)",
    process: (
      
      <div>
        <div>
         <h1>On Campus Hiringe:</h1> <br /> <br />
         <h2>Recruitment Process:</h2> <br />
         <ul>
         <li>• Round 1: Written Round</li>
          <li>• Round 2: Coding Test</li>
          <li>• Round 3: Communication Assessment</li>
          <li>• Round 4: Technical + HR Interview</li>
        </ul>
        </div>
        <br /> <br />
        <h3>MOCK ASSESSMENT</h3> <br /> 
        
        <ul>
          <li>• Mock / Practice Assessment for 20 minutes.</li>
          <li>• Mock Assessment is mandatory.</li>
          <li>• Mock Assessment is done to ensure you have right hardware.</li>
          <li>• It helps to get experience of actual assessment</li>
          
        </ul>
        <br /><br/>
        <h3>WRITTEN TEST</h3><br />
        <li>• Written Test is sub-divided into two sections-</li>
        <li>➢ Cognitive Assessment</li>
        <li>➢ Technical Assessment</li>
        <li>• Total Questions - 90</li>
        <li>• Time Allotted – 90 minutes</li>
        <li>• It is conducted on the Co-Cubes Platform.</li>
        <li>• No negative marking.</li>
        <li>• Intra-Sectional navigation allowed.</li>
        
        <br /> <br /> 

        <h2>CODING TEST </h2> <br /> 
        <li>• Total Questions: 2</li>
        <li>• Time Allotted: 45 minutes</li>
        <li>• One question will be easy and one will be slightly difficult.</li>
        <li>• Programming languages allowed are- C / C++ / JAVA / PYTHON / DotNet..</li>
        <br /><br />
        
        <h3>COMMUNICATION ASSESSMENT</h3><br />
        <ul>
        <li>• Assess on the basis of basic communication skills.</li>
        <li>• Duration of Test: 30 minutes</li>
        <li>• Test assessment on the following parameters Sentence Mastery, Vocabulary, Pronunciation, and Fluency.</li>
          </ul>
       
        <br /><br />
        <h3>TECHNICAL + HR INTERVIEW</h3> <br /> 
       
          <li>• Checks on Professional Skills.</li>
          <li>• It is an Elimination Round.</li>
          <li>• Website:https://www.accenture.com/in-en/careers/explorecareers/area-of-interest/journey-to-accenture</li>
       
        <br /><br/>
         
      </div>
    ),
  },
];
