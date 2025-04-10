# Yiming Luo

## Work Experience

### Shenzhen Intellectia Information Technology Co., Ltd. - LLM Algorithm Leader (Algorithm Development Department)
*Jul 2023 - Mar 2025*

1. Responsible for the architectural design and implementation of a financial Q&A system, covering query processing (QP), search optimization, and recommendation algorithm development, ensuring system efficiency and accuracy.
2. Led the development of RAG and multi-Agent systems, enhancing the system's deep understanding and application of financial data.
3. Implemented intent recognition and processing strategies for multi-turn dialogues and specific financial scenarios, enhancing system interactivity and adaptability.
4. Managed the data team, formulated and executed standardized processes for data augmentation, processing, maintenance, and monitoring, ensuring data quality and security.
5. Led the team to complete complex data analysis, including factor mining and strategy building, promoting multi-dimensional applications of data in business.
6. Initially responsible for SFT fine-tuning and pre-processing of pre-training data, optimizing model performance and output quality.

### Zhejiang Tonghuashun Intelligent Technology Co., Ltd. - Algorithm Engineer (Wencai Business Unit)
*Jul 2022 - Jul 2023*

1. Responsible for the text processing module in voice recognition and synthesis projects, leading and implementing key tasks such as English case restoration, name error detection, punctuation restoration, prosody prediction, and homophone prediction, ensuring text input accuracy and naturalness.
2. Developed non-autoregressive speech synthesis models, successfully achieving speech synthesis effects comparable to autoregressive models, supporting multi-speaker style transfer and cross-language migration.

## Education

### Southwestern Institute of Physics - Nuclear Energy Engineering and Technology
*Master's Degree | Jul 2019 - Jun 2022*

### Harbin Engineering University - Nuclear Engineering and Technology
*Bachelor's Degree | Sep 2014 - Jun 2018*

## Project Experience

### AlphaMatrix Quantitative Platform Construction - Architecture Design Lead
*Apr 2024 - Mar 2025*

**Overview:** Led a cross-departmental team to complete the quantitative system upgrade, building an intelligent trading platform supporting multi-dimensional strategy collaboration such as event-driven/trend-following, covering the entire lifecycle management from data governance to strategy implementation.

**Team Division:**
- Data Engineering Group (4 people): Responsible for real-time data pipeline construction and feature library maintenance.
- Strategy Research Group (3 people): Executing strategy backtesting and parameter optimization.
- My Role: Formulated data-strategy collaborative architecture standards, designed strategy matrix interaction mechanisms, and coordinated key module technology selection.

**Achievements:**
1. Built a six-dimensional strategy matrix system, systematically capturing market inefficiencies in different time windows, forming a comprehensive strategy ecosystem covering event-driven/statistical arbitrage/technical analysis.
2. Constructed a closed-loop management system from data governance to strategy implementation, optimizing strategy development processes and significantly improving new strategy development efficiency.

### Intelligent Recommendation System Development - Development, Project Management
*Nov 2024 - Mar 2025*

**Background:** Initially had small user volume, imprecise target user groups, missing user profile data, and low Q&A system quality resulting in few effective conversation turns. Needed to reduce user input costs through recommendations, increase conversation turns, and guide users to ask questions within the system's capabilities.

**Responsibilities:** Led the intelligent recommendation system's evolution from rule-based to personalized recommendations, optimizing algorithms according to business development stages, implementing multi-level cold start.

1. Cold Start Phase: Designed simple heuristic rule recommendations based on LLM to meet basic needs.
2. Mid-term: Used HMM+DCG to model user conversation sequences, increasing query average click rate to 20%, average conversation turns by 1.3.
3. Later Stage: Introduced CRF+Beam Search to optimize user behavior modeling, implementing personalized recommendations based on sequence information, increasing average conversation turns by 0.8.
4. Mature Stage: Based on DeepFM, SIM models, combined user profiles and behavior sequence data, automatically learning feature interactions and generating personalized recommendations.

### Data Platform and Multi-agent System Development - Lead Developer, Project Management
*Oct 2024 - Dec 2024*

**Background:** Financial Q&A system as a systemic project, beyond basic modules like QP, search, and recommendations, the overall pipeline includes financial data platforms with standardized interfaces, fixed workflows, and multi-level agent systems with different degrees of freedom. From data to frontend graphic components, a standard framework is needed for integration.

**Responsibilities:**
1. Built a multi-source heterogeneous data processing platform, gradually developing financial analysis workflows like abnormal movement analysis, technical analysis, and financial analysis as data expands.
2. Set up stock, ETF, and cryptocurrency stock selection Agents, supporting intelligent stock selection through natural language, especially for intent parsing, secondary confirmation, and multi-hop analysis, greatly reducing the professional threshold required for ordinary users.
3. Designed and implemented Muti-Workflow, Mult-Data to Multi-Agent integration system, significantly improving the flexibility and professionalism of data analysis, providing customized solutions for complex financial scenarios.
4. Developed a graphic component system, achieving effective combination of data and visual elements, enriching output forms and interaction logic, further enhancing the intuitiveness and usability of the user interface.

### Query Processing (QP) Module - Lead Developer
*Jun 2024 - Sep 2024*

**Background:** Query understanding is both the first step in search and plays a role in context understanding in multi-round dialogue systems. In financial Q&A, it is particularly necessary to identify factors such as scenarios, subject categories, time sensitivity, and investment preferences.

**Responsibilities:**
1. Designed and implemented the query preprocessing module, including query type recognition, intent recognition, semantic feature extraction, context information processing, time sensitivity analysis, and query term weight calculation.
2. Built a context manager including long-term and short-term memory, introducing Dynamic Context Graph (DCG) and Deep Semantic Matching Model (DSSM), optimizing context relevance calculation and query rewriting modules, improving system performance. Context relevance calculation accuracy improved by about 20%, query rewriting accuracy improved by 14%.

### Financial Search Algorithm and RAG System Development - Lead Developer
*Nov 2023 - May 2024*

1. Indexed document databases, maintained faiss and Elasticsearch databases, adding EAT, document category, and other tags.
2. Optimized queries for three scenarios: sudden time-sensitivity, strong time-sensitivity, and periodic time-sensitivity, adopting different indexing and recall strategies for documents of different ages.
3. Used text and semantic recall during the recall phase, with separate recall for new documents.
4. Initially used RRF algorithm for fusion ranking in the coarse ranking phase, later using fusion models for ranking, combining query and document relevance, content quality, timeliness, click rate, and other features.

## Professional Skills

1. Proficient in using Spark for large-scale data processing, mastering tools such as Elasticsearch, MongoDB, Faiss, Redis.
2. Familiar with the complete search system process, including QP, multi-path recall, coarse and fine ranking, skilled in cold start, long sequence modeling, and multi-level cold start strategy optimization.
3. Mastered models such as HMM, CRF, Transformer, familiar with recommendation algorithms such as DSSM, DeepFM, SIM, knowledgeable about multi-task models such as MoE, STAR.
4. Expert in RAG technology architecture and Agent development, proficient in using frameworks such as LangChain, Llama-Index, AutoGen, with experience in deploying large language models.
5. Successfully led data teams and algorithm groups to complete multiple complex projects, possessing resource coordination and efficient delivery capabilities. Skilled in cross-departmental collaboration, coordinating technical, product, and business requirements to drive project goals. 