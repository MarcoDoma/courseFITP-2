/* ============================================================
   CORSO IS1 2026 — STUDIO
   Corso di Formazione per Istruttori di 1° Livello (Padel)
   FITP — Federazione Italiana Tennis e Padel — A.A. 2026
   Contenuti tratti integralmente dalle slide "Corso IS1 2026"
   ============================================================ */

const SECTIONS = [

  /* ===================== SISTEMA ===================== */
  {id:1,name:"Percorso Formativo & Esame",icon:"🎓",cat:"sistema",qa:[
    {q:"Da quante domande è composto l'esame finale teorico?",a:"30 domande a risposta multipla",e:"L'esame finale teorico prevede 30 domande a risposta multipla, da svolgere in 30 minuti, con esito immediato.",wrong:["20 domande a risposta aperta","40 domande vero/falso","15 domande a risposta multipla"]},
    {q:"Quanto tempo si ha a disposizione per l'esame teorico?",a:"30 minuti",e:"30 domande in 30 minuti. L'esito è immediato e la valutazione è la media tra teoria e pratica.",wrong:["60 minuti","45 minuti","90 minuti"]},
    {q:"L'esame finale è:",a:"Teorico e Pratico",e:"L'esame finale si compone di una parte teorica (30 domande) e di una parte pratica (tecnica di base). L'esito della teoria è immediato.",wrong:["Solo teorico","Solo pratico","Solo un colloquio orale"]},
    {q:"Quale condizione è necessaria per accedere all'esame finale?",a:"Il superamento dell'esame delle materie scientifiche e del tirocinio",e:"Sia il superamento dell'esame delle materie scientifiche sia il superamento del tirocinio pratico sono condizioni necessarie per accedere all'esame finale.",wrong:["Solo la frequenza del modulo tattico","Solo il pagamento della quota","Aver compiuto 21 anni"]},
    {q:"Come si articola il percorso formativo dell'istruttore?",a:"Modulo scientifico, modulo tattico/tecnico, esame scientifico, tirocinio pratico, esame finale",e:"Il percorso (\"Il vostro percorso\") prevede: modulo scientifico (piattaforma telematica + campus), modulo tattico/tecnico in presenza, esame materie scientifiche, tirocinio pratico e infine esame finale teorico-pratico.",wrong:["Solo un modulo online e un esame","Due esami scritti e una tesi","Un colloquio e una prova pratica"]}
  ]},

  {id:2,name:"Qualifica Istruttore 1° Livello",icon:"📋",cat:"sistema",qa:[
    {q:"Quale età deve avere il candidato all'inizio del corso?",a:"18 anni compiuti",e:"Il candidato deve avere 18 anni compiuti all'inizio del corso di formazione.",wrong:["16 anni compiuti","21 anni compiuti","Nessun requisito di età"]},
    {q:"Qual è la durata della qualifica di Istruttore di 1° Livello?",a:"Biennale, confermabile",e:"La qualifica ha durata biennale ed è confermabile tramite il rinnovo.",wrong:["Annuale","Triennale","Permanente"]},
    {q:"Il tirocinio di formazione corrisponde ad almeno:",a:"10 crediti",e:"Il corso comprende un periodo di tirocinio corrispondente ad almeno dieci crediti.",wrong:["5 crediti","20 crediti","Nessun credito"]},
    {q:"Quando il tirocinio si intende eseguito con profitto?",a:"Al completamento delle 6 giornate lavorative/formative con attestazione di sufficienza del Tutor",e:"Il tirocinio si intende superato al completamento delle 6 giornate formative con attestazione quantomeno di sufficienza rilasciata dal Tutor.",wrong:["Dopo 3 giornate senza valutazione","Al superamento di un esame scritto","Dopo un anno di attività"]},
    {q:"Come avviene il rinnovo della qualifica?",a:"Ogni due anni: corso di aggiornamento, relazione sul biennio e test di valutazione",e:"È prevista la partecipazione obbligatoria, ogni due anni, a un corso di aggiornamento con presentazione di una relazione sull'attività svolta nel biennio e superamento di un test di valutazione.",wrong:["Automaticamente ogni anno","Solo con il pagamento della quota","Con il Simposio Internazionale"]}
  ]},

  {id:3,name:"Attività e Limitazioni",icon:"⚖️",cat:"sistema",qa:[
    {q:"L'Istruttore di 1° Livello può svolgere lezioni individuali?",a:"No, non può svolgere lezioni individuali",e:"Tra le limitazioni dell'attività, l'istruttore di primo livello non può svolgere lezioni individuali.",wrong:["Sì, sempre","Sì, solo con adulti","Sì, solo nel tennis"]},
    {q:"In una Club School l'Istruttore di 1° Livello può operare in autonomia:",a:"Solo per l'avviamento al mini-padel e al padel in corsi collettivi",e:"In una Club School può operare in completa autonomia solo per l'avviamento al mini-padel e al padel in corsi collettivi, con allievi esclusivamente di quarta o terza categoria.",wrong:["In tutte le fasi didattiche","Solo nell'alto livello","Solo con giocatori di prima categoria"]},
    {q:"Con quali allievi può operare in autonomia nei corsi collettivi?",a:"Giocatori di quarta o terza categoria",e:"Nei corsi collettivi in Club School può avere per allievi esclusivamente giocatori di quarta o terza categoria.",wrong:["Giocatori di prima categoria","Solo professionisti","Qualsiasi categoria"]},
    {q:"Solo in quali corsi collabora con un istruttore di 2° livello o maestro nazionale?",a:"Solo nei corsi di mini-padel",e:"Collabora con un istruttore di secondo livello o con un maestro nazionale, per l'affiliato che ne richiede la prestazione, solo nei corsi di mini-padel.",wrong:["In tutti i corsi","Solo nell'alto livello","Solo nei corsi individuali"]},
    {q:"Quando può eccezionalmente svolgere attività da 2° livello senza supervisione?",a:"Su richiesta motivata del presidente e autorizzazione del comitato direttivo dell'Istituto",e:"In particolari casi, su richiesta motivata del presidente dell'affiliato, può essere autorizzato dal comitato direttivo dell'Istituto a svolgere l'attività prevista per gli istruttori di 2° livello senza la presenza di un insegnante di qualifica superiore.",wrong:["Sempre, a sua discrezione","Mai, in nessun caso","Solo dopo cinque anni di attività"]}
  ]},

  {id:4,name:"Sistema Italia & Scuole Padel",icon:"🏫",cat:"sistema",qa:[
    {q:"Quali sono le tipologie di Scuole Padel del Sistema Italia?",a:"Club School, Basic School, Standard School e Padel Academy (dal 2027)",e:"Le tipologie di Scuole Padel sono: Club School, Basic School, Standard School e la Padel Academy (in arrivo dal 2027).",wrong:["Club, Basic, Standard, Super e Top","Mini, Junior e Senior","Solo Club e Standard"]},
    {q:"Nella Fase 1, chi verifica i parametri per il riconoscimento della Scuola Padel?",a:"Il Fiduciario Territoriale, tramite compilazione scheda JOTFORM",e:"Nella Fase 1 l'ISF riconosce temporaneamente la scuola dopo che il Fiduciario Territoriale ha verificato personalmente strutture e staff, compilando la scheda tramite JOTFORM.",wrong:["Il Presidente Federale","Un ispettore esterno","Il Comitato Olimpico"]},
    {q:"Quando arriva il riconoscimento definitivo (Fase 2) della Scuola Padel?",a:"Dopo la seconda verifica da parte della segreteria dell'ISF",e:"Il riconoscimento definitivo viene comunicato dopo la seconda verifica effettuata dalla segreteria dell'ISF.",wrong:["Immediatamente dopo la Fase 1","Dopo un anno di attività","Dopo il pagamento di una tassa"]},
    {q:"Le Scuole Federali di Formazione 3.0 riguardano le discipline:",a:"Tennis, Padel, Pickleball e Beach Tennis",e:"Le Scuole Federali di Formazione 3.0 coprono Tennis, Padel, Pickleball e Beach Tennis, con articolazione Junior e Over.",wrong:["Solo Tennis e Padel","Solo Padel","Padel, Squash e Tennistavolo"]},
    {q:"Secondo l'Articolo 6.6.1, i corsi nelle scuole sono rivolti a:",a:"Due o più persone, sia minori sia adulti",e:"Nelle scuole si svolgono corsi relativi a una o più discipline e fasi didattiche, rivolti a due o più persone, sia minori sia adulti.",wrong:["Solo minori","Solo adulti","Una singola persona per volta"]}
  ]},

  {id:5,name:"Progetti Federali & Junior",icon:"🌟",cat:"sistema",qa:[
    {q:"A chi è rivolto principalmente il FITP Junior Program per il padel?",a:"Agli under 18",e:"Il FITP Junior Program è rivolto agli under 18 per il padel (e agli under 16 per il tennis).",wrong:["Solo agli over 18","Agli under 10","Ai professionisti"]},
    {q:"Qual è il contributo del progetto \"Racchette in Classe\" per ogni bambino tesserato?",a:"€ 16,00 (di cui € 6 netto all'affiliato ed € 10 per la Tessera)",e:"Il progetto Racchette in Classe prevede € 16,00 per ogni bambino tesserato partecipante: € 6,00 come contributo netto per l'affiliato ed € 10,00 per il costo della Tessera Racchette in Classe.",wrong:["€ 10,00 totali","€ 25,00 totali","€ 6,00 totali"]},
    {q:"Chi è il responsabile dei Centri di Aggregazione Territoriale (C.A.T.)?",a:"Il Fiduciario Territoriale",e:"Il responsabile dei C.A.T. è il Fiduciario Territoriale; coinvolgono gli under 10-12-14 (per il 2026), si svolgono la domenica mattina con la figura del PF, per monitorare l'attività di base.",wrong:["Il Direttore Tecnico Nazionale","Il Presidente del Circolo","Il Comitato Olimpico"]},
    {q:"Quanto costa la Tessera Estiva per gli allievi che si iscrivono da giugno a settembre?",a:"4 euro",e:"La Tessera Estiva costa 4 euro (come la Tessera SAT). La tessera per gli allievi adulti nell'ultimo quadrimestre costa invece 6 euro.",wrong:["6 euro","10 euro","16 euro"]},
    {q:"Nell'attività agonistica U10, quale campo si usa per i bambini di 10 anni?",a:"Campo da 10x20 metri",e:"Per l'attività agonistica U10: i 9 anni giocano su campo 6x20 m, i 10 anni su campo 10x20 m, entrambi con palline MID e racchetta junior.",wrong:["Campo da 6x20 metri","Campo da 4x10 metri","Campo regolamentare 10x20 con pallina normale"]}
  ]},

  {id:6,name:"Sistema di Gioco RED-ORANGE-GREEN",icon:"🚦",cat:"sistema",qa:[
    {q:"Il livello RED è previsto per quale fascia d'età e formato?",a:"Singolare 5-6-7-8 anni, solo fase intra-circolo",e:"Il RED è singolare per i 5-6-7-8 anni, solo nella fase intra-circolo, su campo 4x10 m con rete da 50 cm.",wrong:["Doppio 11-12 anni","Singolare 8-9-10 anni","Doppio 13-14 anni"]},
    {q:"Quali sono le misure del campo nel livello RED?",a:"4x10 metri con rete da 50 cm",e:"Il campo RED misura 4 metri di larghezza per 10 di lunghezza, con rete alta 50 cm.",wrong:["6x20 metri con rete 88 cm","10x20 metri con rete 92 cm","4x10 metri con rete 88 cm"]},
    {q:"Il livello ORANGE riguarda:",a:"Il singolare per gli 8-9-10 anni (solo fase intra-circolo)",e:"L'ORANGE è singolare per gli 8-9-10 anni, solo fase intra-circolo. Il SUPER ORANGE è invece doppio per la stessa fascia.",wrong:["Il doppio per gli 11-12 anni","Il singolare per i 5-6-7-8 anni","Il doppio per i 13-14 anni"]},
    {q:"Il livello GREEN è previsto per:",a:"Il doppio degli 11-12 anni",e:"Il GREEN è doppio per gli 11-12 anni; il SUPER GREEN è doppio per i 13-14 anni.",wrong:["Il singolare dei 5-6-7-8 anni","Il doppio dei 13-14 anni","Il singolare degli 8-9-10 anni"]}
  ]},

  /* ===================== DEONTOLOGIA ===================== */
  {id:7,name:"I 6 Criteri Deontologici",icon:"🧭",cat:"deontologia",qa:[
    {q:"Quanti sono i criteri deontologici di un buon insegnante?",a:"6 criteri",e:"I 6 criteri deontologici sono: Immagine (presenza), Aspetti comportamentali, Abilità dimostrative, Abilità comunicative, Competenze organizzative e Competenze didattiche.",wrong:["4 criteri","5 criteri","8 criteri"]},
    {q:"A cosa si riferisce il criterio dell'\"Immagine\"?",a:"Alla presenza: figura di riferimento, presenza fisica e mentale, empatia e divisa",e:"L'Immagine riguarda la presenza dell'insegnante: essere figura di riferimento (per genitori, allievi, colleghi), presenza fisica (osservare e ascoltare), presenza mentale (empatia, emozioni) e divisa riconoscibile (appartenenza).",wrong:["Solo all'aspetto fisico","Al livello di gioco","Alla capacità di vincere partite"]},
    {q:"Il criterio delle \"Abilità dimostrative\" è legato a:",a:"Il livello di gioco: velocità replicabile e tecnica di base senza personalismi",e:"Le abilità dimostrative riguardano il livello di gioco: capacità dimostrative con velocità replicabile, tecnica di base senza personalismi, uso del canale visivo e gestione degli spazi in sicurezza.",wrong:["La gestione amministrativa","La conoscenza delle lingue","Il marketing sui social"]},
    {q:"Nel criterio \"Aspetti comportamentali\", cosa si intende per life skills?",a:"Le abilità umane, distinte dalle hard skills (competenze specifiche)",e:"Gli aspetti comportamentali comprendono life skills (abilità umane) e hard skills (competenze specifiche), il ruolo di guida, la motivazione e la gestione delle relazioni.",wrong:["Le competenze tecniche specifiche","La sola preparazione fisica","La conoscenza dei regolamenti"]},
    {q:"Le \"Competenze organizzative\" comprendono:",a:"Pianificazione, gestione di materiale e tempo, adattabilità e aggiornamento",e:"Le competenze organizzative riguardano la preparazione: pianificazione (definire obiettivi), gestione del materiale e del tempo (struttura della lezione), adattabilità e l'essere un istruttore moderno e aggiornato.",wrong:["Solo la valutazione dell'apprendimento","Solo la comunicazione non verbale","Solo la presenza fisica"]}
  ]},

  {id:8,name:"Deontologia dell'Insegnante",icon:"👔",cat:"deontologia",qa:[
    {q:"Con quale atteggiamento deve operare l'insegnante secondo la deontologia?",a:"Con umiltà, prudenza, gradualità, diligenza e competenza, al servizio dell'allievo",e:"L'insegnante deve operare con umiltà, prudenza, gradualità, diligenza e competenza, ponendosi al servizio dell'allievo con chiari intenti educativi e didattici.",wrong:["Con severità e rigidità","Privilegiando i risultati agonistici","Con distacco professionale"]},
    {q:"Quali intenti deve avere l'insegnante nel porsi al servizio dell'allievo?",a:"Chiari intenti educativi e didattici",e:"L'insegnante si pone al servizio dell'allievo con chiari intenti educativi e didattici, adottando un atteggiamento adeguato alla dignità della propria figura professionale.",wrong:["Intenti prevalentemente economici","Intenti agonistici e competitivi","Intenti promozionali"]},
    {q:"Rispetto all'aggiornamento, l'insegnante deve essere:",a:"Continuamente aggiornato nell'esercizio della professione",e:"L'insegnante deve mantenersi continuamente aggiornato, adottando un atteggiamento adeguato alla dignità della propria figura professionale.",wrong:["Aggiornato solo al momento della qualifica","Aggiornato ogni cinque anni","Non è tenuto ad aggiornarsi"]}
  ]},

  /* ===================== REGOLE ===================== */
  {id:9,name:"Il Campo: Regole e Misure",icon:"📐",cat:"regole",qa:[
    {q:"Quali sono le dimensioni ufficiali del campo da padel?",a:"20 metri di lunghezza per 10 di larghezza (tolleranza 0,5%)",e:"Secondo le regole ufficiali della FIP il campo misura 20 m di lunghezza per 10 di larghezza, con una tolleranza dello 0,5% in più o in meno.",wrong:["10 metri per 20 con tolleranza 5%","18 metri per 9","20 metri per 8"]},
    {q:"A che distanza dalla rete si trovano le righe del servizio?",a:"A 6,95 metri dalla rete",e:"Le righe del servizio sono poste a 6,95 metri dalla rete. La linea di servizio centrale si estende 20 cm oltre la linea di servizio.",wrong:["A 5 metri dalla rete","A 6,40 metri dalla rete","A 8 metri dalla rete"]},
    {q:"Qual è l'altezza della rete al centro?",a:"0,88 metri al centro (fino a 0,92 m ai lati)",e:"La rete è lunga 10 metri e ha un'altezza di 0,88 metri al centro, che arriva fino a un massimo di 0,92 metri ai lati.",wrong:["0,92 metri al centro","1,00 metro al centro","0,50 metri al centro"]},
    {q:"Quanto devono essere larghe tutte le linee del campo?",a:"5 centimetri",e:"Tutte le linee del campo devono essere larghe 5 centimetri.",wrong:["3 centimetri","10 centimetri","2 centimetri"]},
    {q:"Nei campi coperti, qual è l'altezza libera minima dal soffitto?",a:"6 metri su tutta la superficie",e:"Nei campi coperti l'altezza libera minima dal soffitto deve essere di 6 metri su tutta la superficie del campo.",wrong:["4 metri","8 metri","5 metri"]},
    {q:"Qual è l'altezza totale della parete di fondo?",a:"4 metri (3 m di materiale + 1 m di struttura metallica)",e:"La parete di fondo ha 4 metri di altezza totale: chiusa fino ai primi 3 metri con materiale trasparente o opaco, più un ultimo metro di struttura metallica.",wrong:["3 metri totali","5 metri totali","4 metri tutti in vetro"]}
  ]},

  {id:10,name:"Attrezzatura: la Racchetta",icon:"🏓",cat:"regole",qa:[
    {q:"Quali sono le forme ammesse del piano di contatto della racchetta?",a:"Rotonda, a goccia e a diamante",e:"Le forme del piano di contatto sono: rotonda, a goccia e a diamante.",wrong:["Solo rotonda","Quadrata e ovale","Triangolare e rotonda"]},
    {q:"Qual è la lunghezza massima della racchetta da padel?",a:"45,5 cm",e:"La racchetta ha una lunghezza massima di 45,5 cm e una larghezza di 26 cm.",wrong:["50 cm","40 cm","45,5 cm di larghezza"]},
    {q:"Qual è lo spessore massimo della racchetta?",a:"38 mm",e:"Lo spessore della racchetta è di 38 mm, con larghezza di 26 cm.",wrong:["45 mm","26 mm","50 mm"]},
    {q:"Qual è il peso della racchetta da padel?",a:"Tra 340 e 390 grammi",e:"Il peso della racchetta è compreso tra 340 g e 390 g.",wrong:["Tra 200 e 250 grammi","Tra 400 e 450 grammi","Esattamente 300 grammi"]},
    {q:"Cosa è obbligatorio in fondo all'impugnatura?",a:"Il cordino (laccio da polso)",e:"È obbligatorio il cordino in fondo all'impugnatura, per motivi di sicurezza.",wrong:["Un contrappeso","Una protezione in gomma","Il logo del produttore"]}
  ]},

  /* ===================== DIDATTICA ===================== */
  {id:11,name:"Il Mini Padel: Gioco-Sport",icon:"🎾",cat:"didattica",qa:[
    {q:"Che cos'è il Mini-padel?",a:"Un progetto didattico basato sull'apprendimento motorio, per integrare apprendimento e divertimento",e:"Il Mini-padel è un progetto didattico basato sull'applicazione di principi di apprendimento motorio e sull'utilizzo di mezzi didattici adeguati, con la finalità di integrare l'apprendimento con il divertimento.",wrong:["Una versione ridotta del regolamento ufficiale","Un torneo per bambini agonisti","Un metodo esclusivamente tecnico"]},
    {q:"Quali sono gli elementi del Mini-padel come Gioco-Sport?",a:"Spazi, attrezzi, mezzi didattici, regole semplificate e principi didattici",e:"Gli elementi del Gioco-Sport sono: Spazi (orizzontali e verticali), Attrezzi (palline e racchette), Mezzi didattici, Regole semplificate (azioni di gioco) e Principi didattici.",wrong:["Solo attrezzi e regole","Mentale, motorio, tattico e tecnico","Età, livello e categoria"]},
    {q:"Gli spazi nel Mini-padel si distinguono in:",a:"Orizzontali e verticali",e:"Gli spazi sono di due tipi: orizzontali e verticali. Lo spazio verticale si gestisce con reti, mini reti, elastici, nastri e corde.",wrong:["Interni ed esterni","Grandi e piccoli","Fissi e mobili"]},
    {q:"I mezzi didattici per definire le zone comprendono:",a:"Coni, birilli, coppelle, cerchi, fascette e marker",e:"Per definire le zone si usano coni, birilli, coppelle, cerchi, fascette e marker; per lo spazio verticale reti, mini reti, elastici, nastri e corde.",wrong:["Solo le linee del campo","Solo palline e racchette","Solo la rete regolamentare"]}
  ]},

  {id:12,name:"La Situazione Didattica",icon:"👦",cat:"didattica",qa:[
    {q:"Quali sono gli elementi principali della \"situazione didattica\"?",a:"Allievo, atmosfera, insegnante ed esercitazioni",e:"Gli elementi principali della situazione didattica sono: allievo, atmosfera, insegnante ed esercitazioni. Il mini-padel ne modifica l'importanza relativa rispetto al passato.",wrong:["Insegnante, campo, palla e rete","Tecnica, tattica, fisico e mente","Regole, attrezzi, spazi e tempo"]},
    {q:"Chi è la figura didattica centrale nel Mini-padel?",a:"L'allievo, non l'insegnante",e:"Nel mini-padel l'allievo (e non l'insegnante, come spesso accadeva in passato) è la figura didattica centrale e il vero protagonista della fase di insegnamento-apprendimento.",wrong:["L'insegnante","Il genitore","Il gruppo dei compagni"]},
    {q:"Come deve essere l'atmosfera nella situazione didattica?",a:"Un clima piacevole e stimolante che favorisca l'apprendimento",e:"L'atmosfera deve favorire l'apprendimento, caratterizzata da un clima piacevole e stimolante: \"a scuola s'impara se si sta bene\".",wrong:["Rigida e competitiva","Silenziosa e formale","Basata sulla pressione dei risultati"]},
    {q:"Quanti sono gli obiettivi/vantaggi prodotti dalla situazione didattica del Mini-padel?",a:"5 obiettivi",e:"I 5 obiettivi sono: attivazione del binomio pratica-successo, del binomio pratica-divertimento, interattività in tempi rapidi, sviluppo di azioni di gioco e corretto apprendimento delle abilità tecniche.",wrong:["3 obiettivi","4 obiettivi","6 obiettivi"]},
    {q:"Come deve proporsi l'insegnante nella situazione didattica?",a:"In maniera empatica, soddisfacendo i bisogni fondamentali dei bambini",e:"L'insegnante deve proporsi in maniera empatica, soddisfacendo bisogni fondamentali come giocare, muoversi, semplicità e concretezza, essere amati.",wrong:["In maniera autoritaria e distaccata","Concentrandosi solo sulla tecnica","Ignorando gli aspetti emotivi"]}
  ]},

  {id:13,name:"I Principi Didattici",icon:"📏",cat:"didattica",qa:[
    {q:"Quali sono i principi didattici del Mini-padel?",a:"Multilateralità, Multiformità, Gradualità e Specificità dell'apprendimento",e:"I principi didattici sono: Multilateralità, Multiformità, Gradualità e Specificità dell'apprendimento (che comprende distribuzione della pratica e interattività).",wrong:["Solo multilateralità e specificità","Tecnica, tattica, fisico e mente","Controllo, regolarità e precisione"]},
    {q:"Cosa si intende per Multilateralità?",a:"Una proposta didattica orientata contemporaneamente su diverse aree di competenza",e:"La multilateralità è una proposta didattica orientata contemporaneamente su diverse aree: Area Tecnica, Motoria, Mentale e Tattica, che si determinano reciprocamente. L'insegnante evita di puntare solo sulla tecnica.",wrong:["Insegnare più sport contemporaneamente","Variare sempre gli obiettivi","Lavorare solo sull'area tecnica"]},
    {q:"Il principio della Multiformità suggerisce di:",a:"Proporre le esercitazioni in forma differente per lo stesso obiettivo",e:"La multiformità propone le esercitazioni il più possibile in forma differente per soddisfare il bambino, che ha scarsa capacità di concentrazione prolungata e trova nella variazione un requisito per il divertimento, pur perseguendo lo stesso obiettivo.",wrong:["Cambiare continuamente gli obiettivi","Ripetere sempre lo stesso esercizio","Eliminare la programmazione scritta"]},
    {q:"Il principio della Gradualità tiene conto di:",a:"Il livello cognitivo e motorio degli allievi",e:"Il grado di difficoltà delle esercitazioni deve sempre tener conto del livello cognitivo e motorio degli allievi, garantendo l'attuabilità dei compiti e il consolidamento delle abilità.",wrong:["Solo dell'età anagrafica","Solo del numero di allievi","Del calendario delle gare"]},
    {q:"La Specificità dell'apprendimento afferma che le abilità:",a:"Acquisite in forma globale e applicate in situazioni reali di gioco favoriscono un apprendimento ottimale",e:"Il principio di specificità afferma che le abilità acquisite prevalentemente in forma globale e applicate in situazioni reali di gioco favoriscono esperienze ottimali di apprendimento.",wrong:["Vanno sempre apprese in forma analitica isolata","Non dipendono dal contesto di gioco","Si sviluppano solo con la ripetizione al cesto"]}
  ]},

  {id:14,name:"Stili di Insegnamento & GBA",icon:"🔄",cat:"didattica",qa:[
    {q:"Quali sono i due stili di insegnamento a confronto?",a:"Insegnamento prescrittivo vs Scoperta guidata",e:"I due stili sono: insegnamento prescrittivo (modello tecnico ottimale, correzione costante dell'errore, feedback prescrittivi) e scoperta guidata (apprendimento individualizzato, correzione in eccesso di errore, feedback interrogativi).",wrong:["Globale vs Analitico","Aperto vs Chiuso","Individuale vs Collettivo"]},
    {q:"Qual è il problema principale dell'approccio tradizionale (closed)?",a:"Produce buoni colpitori ma con mancanza di comprensione del gioco",e:"L'approccio tradizionale dà priorità alla tecnica (esercitazione al cesto, fila indiana) e porta a buoni colpitori, ma con una mancanza di comprensione del gioco.",wrong:["Rende il gioco troppo tattico","Ignora completamente la tecnica","Elimina la parte competitiva"]},
    {q:"Cosa caratterizza il G.B.A. (Game Based Approach)?",a:"L'insegnamento della tecnica all'interno del contesto del gioco",e:"Il GBA (open) introduce al gioco sviluppando situazioni di gioco e interattività: la tecnica viene insegnata dentro il contesto del gioco, con maggiore coinvolgimento dei ragazzi.",wrong:["La ripetizione isolata dei gesti tecnici","L'esercitazione al cesto in fila indiana","La correzione costante dell'errore"]},
    {q:"Nel metodo dell'apprendimento individualizzato, qual è la sequenza corretta?",a:"Assegnazione del compito, osservazione, valutazione, intervento, verifica",e:"Il metodo individualizzato segue: 1) assegnazione del compito, 2) osservazione, 3) valutazione, 4) intervento, 5) verifica, alternando metodo globale e analitico su situazioni aperte, semi-aperte, semi-chiuse e chiuse.",wrong:["Correzione, ripetizione, gara","Spiegazione, dimostrazione, esame","Riscaldamento, tecnica, partita"]}
  ]},

  {id:15,name:"Le Situazioni nel GBA",icon:"🎯",cat:"didattica",qa:[
    {q:"Cos'è una situazione APERTA nel GBA?",a:"Una situazione reale di gioco in cui l'allievo risolve problematiche tattiche",e:"La situazione aperta è una situazione reale di gioco (partita) nella quale l'allievo dovrà risolvere problematiche di ordine tattico.",wrong:["Una situazione con vincoli tecnici","Un esercizio al cesto","Una fase di solo riscaldamento"]},
    {q:"La situazione SEMI-APERTA si distingue perché:",a:"Presenta inizialmente dei vincoli tattici rispetto alla situazione aperta",e:"La semi-aperta è una situazione reale di gioco che, rispetto all'aperta, presenta inizialmente dei vincoli tattici.",wrong:["Non ha alcun vincolo","È un esercizio puramente tecnico","Elimina la componente tattica"]},
    {q:"A cosa serve la situazione CHIUSA?",a:"A risolvere problematiche di ordine tecnico, senza tralasciare la tattica",e:"La situazione chiusa serve a risolvere problematiche di ordine tecnico, non tralasciando gli aspetti legati alla tattica.",wrong:["A giocare la partita reale","A sviluppare solo la tattica","Ad allenare la resistenza fisica"]},
    {q:"La situazione SEMI-CHIUSA permette all'insegnante di:",a:"Apportare correzioni tecniche senza tralasciare completamente la parte tattica",e:"Nella semi-chiusa l'insegnante può apportare correzioni da un punto di vista tecnico, senza tralasciare completamente la parte tattica.",wrong:["Simulare una partita ufficiale","Concentrarsi solo sulla preparazione fisica","Eliminare ogni riferimento tecnico"]}
  ]},

  {id:16,name:"Canali di Apprendimento",icon:"👁️",cat:"didattica",qa:[
    {q:"Qual è la percentuale del canale VISIVO nell'apprendimento?",a:"64%",e:"I canali di apprendimento incidono così: Visivo 64%, Uditivo 25%, Cinestetico 11%. Il canale visivo è nettamente dominante.",wrong:["25%","11%","50%"]},
    {q:"Quali sono le percentuali dei tre canali di apprendimento?",a:"Visivo 64%, Uditivo 25%, Cinestetico 11%",e:"Il canale visivo pesa per il 64%, l'uditivo per il 25% e il cinestetico per l'11%.",wrong:["Visivo 50%, Uditivo 30%, Cinestetico 20%","Visivo 83%, Uditivo 12%, Cinestetico 5%","Uditivo 64%, Visivo 25%, Cinestetico 11%"]},
    {q:"Come deve essere la dimostrazione dell'insegnante?",a:"A velocità ridotta e priva di personalismi o adattamenti agonistici",e:"L'insegnamento rispetta i canali di apprendimento: velocità ridotta per favorire la visione, dimostrazione priva di personalismi, esecuzione rapportata al livello degli allievi e ripetizione del gesto completo.",wrong:["Alla massima velocità possibile","Con adattamenti personali di stile","Senza mai ripetere il gesto"]},
    {q:"Secondo Rizzolatti e Gallese (neuroni specchio), l'osservazione di un'azione:",a:"Produce automaticamente la simulazione dell'azione stessa",e:"\"L'osservazione di un'azione produce automaticamente la simulazione dell'azione stessa\" (Gallese, Rizzolatti - neuroscienze e apprendimento motorio): è la base dell'apprendimento per imitazione.",wrong:["Non ha effetti sull'apprendimento motorio","Serve solo per il canale uditivo","Rallenta l'apprendimento tecnico"]}
  ]},

  {id:17,name:"Area Mentale",icon:"⭐",cat:"didattica",qa:[
    {q:"Qual è l'obiettivo dell'area mentale nella didattica del padel?",a:"Creare un clima di accettazione, accoglienza e interesse verso il bambino",e:"Gli obiettivi dell'area mentale sono creare un clima di accettazione, accoglienza e interesse dell'ambiente padel verso il bambino che si avvicina per la prima volta al gioco, rendendolo attore protagonista.",wrong:["Selezionare i bambini più talentuosi","Massimizzare i risultati agonistici","Insegnare solo la tecnica di base"]},
    {q:"Quale \"circuito virtuoso\" deve attivare l'insegnante?",a:"Emozione positiva → ricordo → ritorno",e:"Attraverso l'attenzione agli aspetti emotivi, l'insegnante attiva il circuito virtuoso emozione positiva-ricordo-ritorno.",wrong:["Errore → correzione → punizione","Sforzo → fatica → risultato","Vittoria → premio → competizione"]},
    {q:"Attraverso quali fattori si sviluppa l'autoefficacia percepita?",a:"Esperienze dirette di successo, imitazione, attenzione agli stati emotivi e capacità comunicative dell'insegnante",e:"L'autoefficacia percepita si sviluppa tramite: esperienze dirette di successo, esperienze di imitazione, attenzione agli stati emotivi e fisici degli allievi e capacità comunicative dell'insegnante.",wrong:["Solo dalla vittoria nelle gare","Dalla ripetizione meccanica dei gesti","Dall'uso di attrezzatura costosa"]},
    {q:"Nella fase di avviamento, il feedback deve essere fornito:",a:"In numero consistente, basandosi sulla scoperta guidata",e:"Nella fase di avviamento è importante fornire un numero consistente di feedback sulla qualità dei movimenti, con uno stile basato sulla scoperta guidata e non su uno stile direttivo e prescrittivo.",wrong:["Il meno possibile per non distrarre","Solo alla fine della lezione","In stile esclusivamente prescrittivo"]}
  ]},

  {id:18,name:"Area Motoria",icon:"🤸",cat:"didattica",qa:[
    {q:"Su cosa si basano le capacità coordinative?",a:"Sull'elaborazione dei dati inviati al cervello dagli analizzatori (sistemi percettivi)",e:"Le capacità coordinative si basano sull'elaborazione dei dati che gli analizzatori motori (sistemi percettivi distribuiti nel corpo) inviano al cervello.",wrong:["Solo sulla forza muscolare","Esclusivamente sulla resistenza","Sulla sola componente genetica"]},
    {q:"Quali sono gli analizzatori sensoriali del movimento?",a:"Ottico, acustico, tattile, cinestetico e dell'equilibrio",e:"Gli analizzatori sono: ottico, acustico, tattile, cinestetico (saper posizionare parti del corpo senza guardarle) e dell'equilibrio (statico, dinamico, in volo).",wrong:["Solo ottico e acustico","Muscolare, tendineo e osseo","Mentale, tattico e tecnico"]},
    {q:"Cosa afferma il Principio di Hotz?",a:"Le abilità tecniche e le capacità coordinative sono strettamente correlate",e:"Secondo il Principio di Hotz le abilità tecniche e le capacità coordinative sono strettamente correlate: si raccomanda quindi un lavoro specifico sulle coordinative anche nell'area tecnica.",wrong:["La tecnica va appresa prima delle coordinative","Le capacità condizionali sono le più importanti","La coordinazione non è allenabile"]},
    {q:"L'analizzatore cinestetico permette di:",a:"Saper posizionare le parti del corpo senza guardarle",e:"L'analizzatore cinestetico consente di percepire e posizionare le parti del corpo senza doverle guardare.",wrong:["Percepire i suoni dell'ambiente","Valutare le distanze con la vista","Mantenere l'equilibrio in volo"]}
  ]},

  /* ===================== TATTICA ===================== */
  {id:19,name:"La Tattica: Definizione e Obiettivi",icon:"♟️",cat:"tattica",qa:[
    {q:"Cosa si intende per tattica nel padel?",a:"L'abilità di produrre scelte in riferimento alle situazioni di gioco",e:"Per tattica s'intende l'abilità di produrre scelte in riferimento alle situazioni di gioco. La domanda chiave è \"Quando?\".",wrong:["L'esecuzione perfetta del gesto tecnico","La preparazione fisica del giocatore","La conoscenza dei regolamenti"]},
    {q:"Qual è la domanda chiave della tattica?",a:"Quando",e:"La tattica risponde alla domanda \"Quando?\": quando è in/out, quando sfruttare la parete, quando colpire a rimbalzo o al volo, quando giocare basso/alto/lungolinea/incrociato.",wrong:["Come","Perché","Dove"]},
    {q:"Quali sono gli obiettivi tattici del primo macro-argomento (#1)?",a:"Controllo, Regolarità e Precisione",e:"Gli obiettivi #1 (concetto errore=apprendimento) sono: Controllo (elemento principale), Regolarità (padel = percentuale) e Precisione (spazi ben definiti).",wrong:["Traiettoria, Profondità e Direzione","Servizio, Risposta e Volée","Forza, Velocità e Resistenza"]},
    {q:"Gli obiettivi tattici del secondo macro-argomento (#2) riguardano:",a:"Traiettoria, Profondità e Direzione (gestione tempo-spazio)",e:"Gli obiettivi #2 (gestione del tempo-spazio) sono: Traiettoria (bassa-alta), Profondità (corta-media-lunga), Direzione (lungolinea-centrale-incrociato).",wrong:["Controllo, Regolarità e Precisione","Attacco, Difesa e Contrattacco","Equilibrio, Ritmo e Peso"]},
    {q:"Nel padel, la regolarità è legata al concetto di:",a:"Percentuale",e:"La regolarità è un obiettivo tattico fondamentale: nel padel vince chi mantiene alta la percentuale, riducendo l'errore (concetto errore = apprendimento).",wrong:["Potenza","Velocità di esecuzione","Spettacolarità del colpo"]}
  ]},

  {id:20,name:"Fasi di Gioco: il Semaforo",icon:"🚥",cat:"tattica",qa:[
    {q:"Quante e quali sono le fasi di gioco secondo il concetto di \"Semaforo\"?",a:"Tre: costruttiva (gialla), offensiva (verde) e difensiva (rossa)",e:"Il concetto di \"Semaforo\" prevede tre fasi: costruttiva (zona di transizione, gialla), offensiva (zona di rete, verde) e difensiva (zona di fondo, rossa).",wrong:["Due: attacco e difesa","Quattro: servizio, risposta, scambio e chiusura","Tre: iniziale, centrale e finale"]},
    {q:"La zona GIALLA (fase costruttiva) corrisponde a:",a:"La zona di transizione (terra di nessuno), fase di manovra",e:"La zona gialla è la fase costruttiva: la terra di nessuno, fase di manovra e gestione dello scambio con alternanza di colpi a rimbalzo e al volo. Obiettivo: percentuale e riconquista della rete.",wrong:["La posizione vicino alla rete","Il fondo campo difensivo","La linea di servizio in battuta"]},
    {q:"Nella zona VERDE (fase offensiva) qual è la posizione e l'obiettivo?",a:"Posizione vicino alla rete (3 m), obiettivo mantenere il possesso della rete",e:"La zona verde è la fase offensiva: posizione vicino alla rete (3 m), fase di chiusura del punto (muovere l'avversario, crearsi spazi, colpi al volo). Obiettivo: mantenimento del possesso della rete.",wrong:["Fondo campo, obiettivo difendere","Terra di nessuno, obiettivo manovrare","Linea di servizio, obiettivo servire"]},
    {q:"La zona ROSSA (fase difensiva) prevede:",a:"Posizione a fondo campo (intersezione dei vetri), obiettivo conquistare la rete",e:"La zona rossa è la fase difensiva: posizione a fondo campo (intersezione dei vetri), difesa del punto coprendo gli spazi con colpi a rimbalzo con e senza parete. L'obiettivo è la conquista della rete.",wrong:["Posizione a rete, obiettivo chiudere il punto","Zona di transizione, obiettivo manovrare","Battuta, obiettivo fare ace"]}
  ]},

  {id:21,name:"Situazioni di Gioco",icon:"🎾",cat:"tattica",qa:[
    {q:"Quali sono gli obiettivi tattici del SERVIZIO?",a:"Conquista della rete, percentuale di 1° servizio e precisione",e:"Nel servizio gli obiettivi sono: conquista della rete, alta percentuale di prima palla e precisione.",wrong:["Massima potenza e velocità","Solo la sorpresa dell'avversario","Coprire gli spazi a fondo campo"]},
    {q:"Nella RISPOSTA, cosa si deve considerare?",a:"Copertura degli spazi, percentuale e scelta tra gioco orizzontale o verticale",e:"Nella risposta gli obiettivi sono: copertura degli spazi, percentuale (palla in campo) e scelta di giocare orizzontale o verticale.",wrong:["Colpire sempre più forte possibile","Attaccare subito la rete","Giocare sempre lungolinea"]},
    {q:"Qual è l'obiettivo del gioco a rete?",a:"È l'obiettivo del padel: chiudere il punto con scelte in base al compagno",e:"Il gioco a rete è l'obiettivo del padel: prevede scelte in base al compagno e una varietà di colpi al volo (i più utilizzati).",wrong:["Difendere a fondo campo","Rallentare lo scambio","Servire con precisione"]},
    {q:"Nella transizione, cosa è fondamentale comunicare?",a:"Comunicare con il compagno (studio della palla, scelta del colpo)",e:"Nella transizione avanti e indietro sono fondamentali lo studio della palla (orizzontale/verticale), la scelta del colpo sopra la spalla e la comunicazione con il compagno.",wrong:["Nulla, si gioca in autonomia","Solo la potenza del colpo","La posizione dell'arbitro"]}
  ]},

  /* ===================== TECNICA ===================== */
  {id:22,name:"La Tecnica: Obiettivi",icon:"🎯",cat:"tecnica",qa:[
    {q:"Quali sono i principali obiettivi della tecnica?",a:"Equilibrio, trasferimento del peso, traiettoria lineare della racchetta, arto non dominante e ritmo esecutivo",e:"Gli obiettivi della tecnica sono: equilibrio (assetto del corpo), trasferimento del peso del corpo, traiettoria lineare della racchetta, azione dell'arto non dominante (bilateralità) e ritmo esecutivo.",wrong:["Forza, velocità, resistenza e mobilità","Controllo, regolarità e precisione","Servizio, risposta, volée e smash"]},
    {q:"Perché è importante l'azione dell'arto non dominante?",a:"Per l'equilibrio e la bilateralità del gesto",e:"L'azione dell'arto non dominante (l'importanza dell'altra mano) garantisce equilibrio e bilateralità nell'esecuzione dei colpi.",wrong:["Serve solo per l'estetica del gesto","Non ha alcuna rilevanza tecnica","Solo per impugnare una seconda racchetta"]},
    {q:"Quali sono i sotto-obiettivi della tecnica?",a:"Posizione di partenza, azioni degli arti inferiori e superiori, impugnature e studio della palla",e:"I sotto-obiettivi sono: posizione di partenza (equilibrio), azioni degli arti inferiori, impugnature, azioni degli arti superiori e studio della palla (timing esecutivo).",wrong:["Solo l'impugnatura e la potenza","Tattica, mentale e fisico","Velocità e resistenza"]},
    {q:"Lo \"studio della palla\" è collegato soprattutto a:",a:"Il timing esecutivo",e:"Lo studio della palla riguarda il timing esecutivo: il momento corretto di impatto rispetto alla traiettoria della palla.",wrong:["La forza del colpo","La scelta della racchetta","Il punteggio della partita"]}
  ]},

  {id:23,name:"Le 4 Categorie di Azioni di Gioco",icon:"🏓",cat:"tecnica",qa:[
    {q:"Quali sono le 4 categorie di azioni di gioco?",a:"A rimbalzo senza parete, a rimbalzo con parete, al volo sotto la spalla e al volo sopra la spalla",e:"Le 4 categorie di azioni di gioco sono: azioni a rimbalzo senza parete, azioni a rimbalzo con parete, azioni al volo sotto la spalla e azioni al volo sopra la spalla.",wrong:["Diritto, rovescio, servizio e smash","Attacco, difesa, transizione e chiusura","Bassa, media, alta e profonda"]},
    {q:"Le azioni al volo SOPRA la spalla comprendono:",a:"La Bandeja e lo Smash",e:"Le azioni al volo sopra la spalla sono la Bandeja (alta con più angolo / bassa con più profondità) e lo Smash (diretto / rullo).",wrong:["La volée di diritto e di rovescio","La chiquita e il pallonetto","Il servizio e la risposta"]},
    {q:"Le azioni al volo SOTTO la spalla sono:",a:"Le volée (in blocco, offensiva e in dinamica)",e:"Le azioni al volo sotto la spalla sono le volée di diritto e rovescio, eseguite in blocco, in forma offensiva o in dinamica.",wrong:["La bandeja e lo smash","Il servizio e la chiquita","Il pallonetto e la risposta"]},
    {q:"Tra le azioni a rimbalzo senza parete troviamo:",a:"Diritto/rovescio, servizio/risposta e chiquita/pallonetto",e:"Le azioni a rimbalzo senza parete comprendono diritto/rovescio, servizio/risposta e chiquita/pallonetto (azioni orizzontali e verticali).",wrong:["Bandeja e smash","Solo la volée","Solo il servizio"]}
  ]},

  {id:24,name:"Impugnatura & Metodologia",icon:"✋",cat:"tecnica",qa:[
    {q:"Quale impugnatura è di riferimento nell'area tecnica del padel?",a:"L'impugnatura Continental",e:"L'impugnatura di riferimento è la Continental, individuata sulla base del dito indice (base dell'indice).",wrong:["L'impugnatura Eastern","L'impugnatura Western","L'impugnatura a due mani"]},
    {q:"Quali sono i metodi di insegnamento della tecnica?",a:"Metodo globale, analitico e complesso",e:"I metodi di insegnamento della tecnica sono tre: globale, analitico e complesso. Ci si interroga se la segmentazione delle abilità sia una forma corretta di apprendimento.",wrong:["Prescrittivo, guidato e libero","Aperto, chiuso e misto","Visivo, uditivo e cinestetico"]},
    {q:"Qual è l'obiettivo del Mini-padel attraverso la gara?",a:"Formare giovani sportivi, non giovani campioni",e:"Il Mini-padel, attraverso la gara, ha l'obiettivo di formare giovani sportivi e non, come a volte succede, giovani campioni.",wrong:["Selezionare i futuri professionisti","Massimizzare le vittorie","Individuare i talenti precoci"]},
    {q:"Nel Mini-padel la gara è considerata:",a:"Un mezzo e non un obiettivo di allenamento",e:"La gara è un mezzo e non un obiettivo di allenamento: serve a competere con se stessi, creare entusiasmo e motivazione ed educare alla gestione della vittoria e della sconfitta.",wrong:["L'unico obiettivo dell'allenamento","Un momento da evitare con i bambini","Uno strumento di sola selezione"]},
    {q:"Secondo Alejandro Galán, qual è l'errore più comune nel padel?",a:"Cercare di vincere il punto con ogni colpo",e:"\"L'errore più comune è cercare di vincere il punto con ogni colpo\" (Alejandro Galán, ex numero 1 al mondo di padel): il padel premia la costruzione e la percentuale, non il colpo vincente a tutti i costi.",wrong:["Giocare sempre troppo lento","Non usare mai la parete","Servire con poca potenza"]}
  ]}
];


const NUMBERS_DATA = [
  {val:"30",lbl:"Domande esame",ctx:"Esame finale teorico a risposta multipla"},
  {val:"30 min",lbl:"Durata esame",ctx:"30 domande in 30 minuti, esito immediato"},
  {val:"18",lbl:"Età candidato (anni)",ctx:"Compiuti all'inizio del corso"},
  {val:"2 anni",lbl:"Durata qualifica",ctx:"Biennale, confermabile"},
  {val:"10",lbl:"Crediti tirocinio",ctx:"Periodo di tirocinio minimo"},
  {val:"6",lbl:"Giornate tirocinio",ctx:"Formative, con attestazione del Tutor"},
  {val:"20×10",lbl:"Campo padel (m)",ctx:"Lunghezza × larghezza, tolleranza 0,5%"},
  {val:"6,95 m",lbl:"Linea di servizio",ctx:"Distanza dalla rete"},
  {val:"20 cm",lbl:"Linea servizio centrale",ctx:"Estensione oltre la linea di servizio"},
  {val:"5 cm",lbl:"Larghezza linee",ctx:"Tutte le linee del campo"},
  {val:"0,88 m",lbl:"Rete al centro",ctx:"Fino a 0,92 m ai lati"},
  {val:"6 m",lbl:"Altezza libera coperti",ctx:"Minima dal soffitto"},
  {val:"4 m",lbl:"Parete di fondo",ctx:"3 m di materiale + 1 m metallica"},
  {val:"45,5 cm",lbl:"Racchetta lunghezza",ctx:"Massima. Larghezza 26 cm"},
  {val:"38 mm",lbl:"Racchetta spessore",ctx:"Peso: 340-390 g"},
  {val:"340-390 g",lbl:"Peso racchetta",ctx:"Obbligo del cordino all'impugnatura"},
  {val:"4×10",lbl:"Campo RED (m)",ctx:"Rete da 50 cm, singolare 5-8 anni"},
  {val:"64%",lbl:"Canale visivo",ctx:"Uditivo 25% · Cinestetico 11%"},
  {val:"6",lbl:"Criteri deontologici",ctx:"Immagine, comportamento, dimostrazione, comunicazione, organizzazione, didattica"},
  {val:"4",lbl:"Aree multilateralità",ctx:"Tecnica, Motoria, Mentale, Tattica"},
  {val:"4",lbl:"Principi didattici",ctx:"Multilateralità, Multiformità, Gradualità, Specificità"},
  {val:"5",lbl:"Obiettivi situazione didattica",ctx:"Pratica-successo, pratica-divertimento, interattività, azioni, tecnica"},
  {val:"3",lbl:"Fasi di gioco (Semaforo)",ctx:"Costruttiva (gialla), Offensiva (verde), Difensiva (rossa)"},
  {val:"3 m",lbl:"Posizione a rete",ctx:"Zona verde, fase offensiva"},
  {val:"4",lbl:"Categorie azioni di gioco",ctx:"Rimbalzo s/parete, rimbalzo c/parete, volo sotto, volo sopra"},
  {val:"3",lbl:"Metodi insegnamento tecnica",ctx:"Globale, Analitico, Complesso"},
  {val:"€16",lbl:"Racchette in Classe",ctx:"€6 netto affiliato + €10 tessera, per bambino"},
  {val:"€4",lbl:"Tessera estiva / SAT",ctx:"Adulti ultimo quadrimestre: €6"},
  {val:"Continental",lbl:"Impugnatura",ctx:"Base del dito indice"}
];


const PLAN_DAYS = [
  {n:1,topics:"Percorso formativo, Esame, Qualifica Istruttore 1° Livello",method:"Leggi + scrivi i concetti chiave"},
  {n:2,topics:"Sistema Italia, Scuole Padel, Progetti federali, RED-ORANGE-GREEN",method:"Flashcard mentali su numeri e categorie"},
  {n:3,topics:"6 Criteri deontologici, Campo e misure, Attrezzatura",method:"Ripassa ad alta voce le misure"},
  {n:4,topics:"Mini Padel, Situazione didattica, Principi didattici",method:"Sintesi scritta da zero"},
  {n:5,topics:"Stili di insegnamento, GBA, Canali di apprendimento, Aree mentale e motoria",method:"Collega gli argomenti tra loro"},
  {n:6,topics:"Tattica: obiettivi, fasi di gioco (Semaforo), situazioni",method:"Schemi visivi sul campo"},
  {n:7,topics:"Tecnica: obiettivi, azioni di gioco, impugnatura, metodologia",method:"Simulazione test finale (30 domande)"}
];
