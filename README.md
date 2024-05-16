# 42ADxMOI

&emsp;> This is a joint hackathon by 42 Abu Dhabi and the Ministry of Interior UAE.
</br>
&emsp;> 42ADxMOI aims to better UX in an all-inclusive way (i.e. for People of Determination) through gamification.
</br>
&emsp;> We entered as "Team Kudos", which consisted Mukhammadusmon Ganiev, Faraz Khan and I (Jinxiu Yao).


## Description

#### Problems Identified:
* __There needs to be a better user experience on the website, so users won't feel compelled to call the support centre.__
* __There needs to be more accessibility support to the People of Determination to ensure the user experience is all-inclusive.__
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
- __Hardware: >=16GB RAM, >=8GB VRAM, >=6 Core CPU__
- __Tools: Ollama, Nodejs, npm__


### Installing

```
git pull https://github.com/jya0/42ADxMOI
cd 42ADxMOI/frontend
npm install
```

### Executing program

```
npm start
```

### (DEMO ONLY) (OPTIONAL) Running RAG AI Assistant and Starting backend

1. [Ollama Install](https://ollama.com/download/mac)
```
cd local_LLM_tests/local-LLM-with-RAG
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 app.py -m tinyllama -p ../moi_pdfs
```

2. 
```
cd ../backend
npm install
npm run start
```


## Authors
- [Mukhammadusmon Ganiev](https://github.com/muhammadganiev)
- [Faraz Khan](https://github.com/Faraz7704)
- [Jinxiu Yao](https://github.com/jya0)
- [Abdullah Rashidov](https://github.com/Rashidov01)

## License

Following this submission, all IP rightfully belongs to MOI UAE.
