# Content discovery notes

These are approved interview findings for future editorial review. They are not published portfolio copy.

## UN Viet Nam — humanitarian document processing

**Status:** Confirmed by Passapol on 27 September 2026 and implemented in the portfolio.

**Operational workflow:** During typhoon and storm response, leadership sent unstructured Vietnamese material, including PDFs, scanned PDFs, and images. Passapol used OCR (provider uncertain), generative AI (service intentionally undisclosed), and document formatting to prepare English-language updates. A Vietnamese colleague reviewed the translation before it went to leadership for distribution within the UN disaster risk reduction team in Viet Nam and UN Viet Nam. Monitoring and reporting could occur 3–9 times a day during active response.

**Observed timing:** Initial processing took more than 10 minutes manually and approximately 2 minutes with the assisted workflow. The former “~60% estimated reduction” claim has been replaced in the public portfolio. Do not imply that the unvalidated automation pilot achieved this result.

**Separate automation pilot:** Passapol independently conceived and built a React.js file-upload interface connected to an n8n Webhook. The pilot used n8n, an OCR node, and local AI to explore extraction, translation, formatting, and routing to leadership. It was not deployed operationally; translation accuracy had not been validated sufficiently for operational use.

**Presentation:** Passapol presented both the operational assisted workflow and the automation pilot to the United Nations Development Coordination Office headquarters in New York. No audience size, feedback, adoption, or follow-up outcome has been confirmed.

**Public wording constraints:** Do not name an OCR provider or translation model/service. Keep organisational documents, personal information, and internal operational details out of the public case study. Distinguish Passapol's pilot ownership from the colleague's language review and leadership's distribution role.

**Page treatment:** Shows the operational assisted process and the separate automation pilot as distinct paths. The local AI service is not named publicly.

## KBTG — virtual-patient simulator

**Status:** Confirmed by Passapol on 27 September 2026 and implemented in the portfolio.

**Ownership and collaborators:** During his internship, Passapol supported a business analyst and software engineer; the simulator was co-developed. He helped gather requirements from a Chulalongkorn medical professor, researched comparable products, used Design Thinking to frame the product, and reported findings to the team.

**AI configuration:** Passapol configured rules, system prompts, and retrieval from medical reference documents in JSON format. He shaped patient personas through symptoms, gender, and age. This was configuration, not model fine-tuning. He recalls using LangChain but cannot yet identify its exact role, so omit that claim from public copy for now.

**Evaluation:** Passapol compared generated answers with prepared reference answers and marked responses accurate or inaccurate in Excel. No numerical accuracy rate was confirmed. Do not identify who prepared the reference answers in public copy.

**Outcomes and claim boundaries:** The work ended after answer evaluation. Potential future use in a medical-school curriculum has not been verified and must not be described as adoption. The former portfolio wording about “healthcare stakeholder validation” was removed: requirements input from a medical professional is confirmed, but direct testing or validation by medical professionals was not confirmed.

**Possible page treatment:** Tell the process as understanding the need, shaping patient scenarios, configuring RAG and prompts, and evaluating answers. Candidate tools and methods: Excel, JSON medical reference material, RAG, rules and prompt configuration, Design Thinking, competitor research, requirements gathering, answer evaluation. Keep the public scan list selective.

## KMUTT — TARA education technology project

**Status:** Confirmed by Passapol on 27 September 2026 and implemented in the portfolio.

**Ownership:** Passapol originated the idea and was the project's manager. He formed and coordinated the team, worked with a teacher collaborator, reported to the adviser, contacted a school for testing, spoke with teachers and students, prepared slides, and made a small frontend contribution. Do not imply he personally implemented every feature. The official academic record lists three student authors; do not equate that author list with the full set of collaborators.

**Product:** Digital teaching materials, exercises in varied formats, rewards that students could use in a game, and an AI chatbot tailored to Thai students learning English reading. Passapol advised that visual cues would help students with difficult words; a teammate added emojis to the chatbot. This was pedagogical guidance, not chatbot implementation ownership.

**Stack:** The [official KMUTT record](https://seniorproject.sit.kmutt.ac.th/showproject/CS64-RE16) lists React and Vite for the final frontend. Treat this as the project stack, distinct from Passapol's individual tool use. Do not call the final frontend Next.js based on uncertain recollection.

**Classroom pilot and evidence:** The team asked the teacher and students for feedback at the end of a class and recorded some student feedback on video. Passapol recalls that they loved the prototype. Do not publish or link the recordings without a privacy review and permission. The formerly published “50% engagement increase across 20 students” had no confirmed measurement method or confirmed count from the interview, and does not appear in the official project record. It has been removed from the public portfolio in favour of qualitative pilot wording.

**Possible page treatment:** Present project management, educational product design, teacher and student conversations, gamification, and classroom piloting. Show React/Vite as project technology only. Avoid crediting Passapol with building the chatbot or claiming quantified engagement gains.

## Airports of Thailand — digital website experience

**Status:** Confirmed by Passapol on 27 September 2026 and implemented in the portfolio.

**Context and ownership:** A Skytrax audit of the airport prompted a review of its digital experience. As an IT Business Analyst Intern, Passapol researched effective airport websites and compared other airports' sites. He met with AOT departments and the software house responsible for the website, explained website, frontend, backend, and CMS concepts to AOT staff, and reported findings to the business analyst. Do not claim he led the entire website redesign or that Skytrax audited the website specifically.

**Tools and deliverables:** Web search and generative AI supported research; the AI service is unspecified. Passapol delivered presentation slides and a brief executive overview document, not a detailed technical report. No presentation/document software was confirmed.

**Observed change:** After his analysis, advertising was removed from AOT's official website, making airport branding more visible. Describe this as a change his analysis contributed to, without assigning sole credit or claiming a measured usability or commercial outcome.

**Possible page treatment:** Use a concise overview centred on the audit-triggered question, comparative website research, cross-department and vendor meetings, executive communication, and the observed website change. Candidate scan labels: website benchmarking, stakeholder meetings, web research, AI-assisted research, executive reporting. Avoid an oversized tag list.
