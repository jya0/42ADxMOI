# 42ADxMOI

&emsp;> This is a joint hackathon by 42 Abu Dhabi and the Ministry of Interior UAE.
</br>
&emsp;> 42ADxMOI aims to better UX in an all-inclusive way (i.e. for People of Determination) through gamification.
</br>
&emsp;> We entered as "Team Kudos", the memebers were Mukhammadusmon Ganiev, Faraz Khan, Abdullah Rashidov and I (Jinxiu Yao).


## Description

#### Problems Identified:
* __There needs to be a better user experience provided by the website, so users won't feel compelled to call the support centre.__
* __There needs to be more accessibility features for the People of Determination to ensure a wholistic UI for everyone.__
#### Solutions Suggested:
* _A suite of gamified features using 'Kudos' points and an intelligent realtime AI to help users._
* _A menu dedicated for People of Determination which allow single tap buttons to dial for help._

#### Sources to Our Work:
* <a href="https://miro.com/app/board/uXjVKJlP0l0=/?share_link_id=502698747089" target="_blank">Miro Mindmap</a>
* <a href="https://app.asana.com/0/1207285241425320/1207285241425320" target="_blank">Asana Requirements</a>
* <a href="https://www.figma.com/design/b9ziJh3Z86k0hQmtMcYUZv/42ADxMOI?node-id=0%3A1&t=P6qrGz1meW3CNB9l-1" target="_blank">Figma UI/UX</a>
* <a href="https://jinxiuyao.notion.site/42ADxMOI-3d57971b237640019a950e167d04f626?pvs=4" target="_blank">Notion Page Content</a>

## Getting Started

### Dependencies

- __OS: MacOS__
- __Hardware: >=16GB RAM, >=4GB VRAM, >=4 Core CPU__
- __Tools: Ollama, Nodejs, npm, python, pip__


### Starting Frontend

```
git clone https://github.com/jya0/42ADxMOI
cd 42ADxMOI/frontend
npm install
npm start
```

### (DEMO ONLY) (OPTIONAL) Running Locally Hosted RAG AI Assistant and Starting backend

1. [Ollama Install](https://ollama.com/download/mac)
```
cd 42ADxMOI/local_LLM_tests/local-LLM-with-RAG
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 app.py -m tinyllama -p ../moi_pdfs
```

2. 
```
cd 42ADxMOI/backend
npm install
npm run start
```


## Authors
- [Mukhammadusmon Ganiev](https://github.com/muhammadganiev)
- [Faraz Khan](https://github.com/Faraz7704)
- [Jinxiu Yao](https://github.com/jya0)
- [Abdullah Rashidov](https://github.com/Rashidov01)

## License

Following this submission, all IPs generated in this repo only rightfully belongs to MOI UAE.
