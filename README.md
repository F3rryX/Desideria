# 🍕 Quiz Pizze Desideria

Un quiz interattivo per memorizzare gli ingredienti delle pizze del menu Desideria in modo divertente e coinvolgente!

## 📖 Descrizione

Questo mini-gioco è stato creato per aiutare chi non ha voglia di studiarsi l'intero menu ma vuole comunque imparare gli ingredienti delle pizze. Il quiz ti permette di testare le tue conoscenze sulle pizze Classiche, Bianche e Calzoni del ristorante Desideria.

## ✨ Caratteristiche

- **Quiz Customizzabile**: Scegli la categoria di pizze (Classiche, Bianche, Calzoni o Tutte)
- **Numero Domande Variabile**: Decidi quante domande vuoi affrontare (da 1 a 50)
- **Tipi di Domande Diverse**:
  - "Quali sono gli ingredienti di questa pizza?"
  - "Quale pizza ha questi ingredienti?"
  - **"Trova l'ingrediente sbagliato"** - Domande confusionarie con 3 opzioni che contengono UN ingrediente sbagliato
  - Modalità mista con tutti i tipi
- **Timer da 10 Secondi**: Ogni domanda ha un timer di 10 secondi, al termine si passa automaticamente alla successiva
- **Sistema di Punteggio**: Traccia i tuoi progressi in tempo reale
- **Classifica Record**: Salva i tuoi migliori risultati per ogni tipologia di quiz (10 domande, 20 domande, ecc.)
- **Export CSV**: Scarica tutti i record in formato CSV con nome giocatore, punteggio e tempo
- **Riepilogo Dettagliato**: Alla fine ricevi un feedback completo con tutte le risposte corrette
- **Design Responsive**: Funziona perfettamente su desktop, tablet e smartphone
- **Interfaccia Moderna**: Design accattivante con animazioni fluide e timer visivo

## 🎮 Come Giocare

1. **Configura il Quiz**:
   - Seleziona la categoria di pizze che vuoi studiare
   - Scegli quante domande affrontare
   - Decidi il tipo di domande
   - **Inserisci il tuo nome** per entrare nella classifica

2. **Rispondi alle Domande**:
   - Leggi attentamente la domanda
   - **Hai 10 secondi** per rispondere (il timer è visualizzato in alto)
   - Clicca sulla risposta che ritieni corretta
   - Il sistema ti mostrerà immediatamente se hai risposto correttamente
   - Se non rispondi entro 10 secondi, si passa automaticamente alla prossima domanda

3. **Visualizza i Risultati**:
   - Al termine del quiz vedrai il tuo punteggio finale e il tempo totale impiegato
   - **Verifica se hai battuto un record!** I record sono salvati per ogni categoria e numero di domande
   - Consulta la **classifica dei migliori 10 giocatori** per la tua configurazione
   - Scarica tutti i record in formato CSV cliccando su "📥 Scarica Record (CSV)"
   - Potrai rivedere tutte le domande con le risposte corrette
   - Scegli se riprovare lo stesso quiz o crearne uno nuovo

## 🚀 Pubblicazione su GitHub Pages

### Prerequisiti
- Account GitHub
- Repository GitHub (questo progetto)

### Passaggi per la Pubblicazione

1. **Assicurati che i file siano nel repository**:
   ```bash
   git add .
   git commit -m "Add pizza quiz game"
   git push origin main
   ```

2. **Abilita GitHub Pages**:
   - Vai su GitHub.com e apri il tuo repository
   - Clicca su "Settings" (Impostazioni)
   - Nella barra laterale, clicca su "Pages"
   - Sotto "Source", seleziona il branch `main` (o `master`)
   - Seleziona la cartella `/ (root)`
   - Clicca su "Save"

3. **Attendi la pubblicazione**:
   - GitHub impiegherà alcuni minuti per pubblicare il sito
   - Riceverai un messaggio con l'URL del sito (solitamente: `https://[tuo-username].github.io/[nome-repo]/`)

4. **Visita il tuo quiz**:
   - Apri l'URL fornito da GitHub Pages
   - Il quiz sarà disponibile online gratuitamente!

### Esempio di URL
Se il tuo username GitHub è `F3rryX` e il repository si chiama `Desideria`, il quiz sarà accessibile all'indirizzo:
```
https://f3rryx.github.io/Desideria/
```

## ⚙️ Configurazione Salvataggio su GitHub

Per permettere il salvataggio automatico dei risultati su GitHub, segui questi passaggi:

### 1. Creare un Personal Access Token

1. Vai su GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clicca su "Generate new token (classic)"
3. Dai un nome al token (es. "Desideria Quiz Token")
4. Seleziona i permessi:
   - ✅ `public_repo` (per repository pubblici)
   - ✅ `workflow` (per triggare GitHub Actions)
5. Clicca su "Generate token"
6. **COPIA IL TOKEN** (lo vedrai solo una volta!)

### 2. Aggiungere il Token ai GitHub Secrets

1. Vai nelle Settings del repository GitHub
2. Vai su "Secrets and variables" → "Actions"
3. Clicca su "New repository secret"
4. Nome: `TOKENDESIDERIA`
5. Value: incolla il token creato al passo 1
6. Clicca su "Add secret"

### 3. Configurare il Token nel Quiz (per Trigger)

Apri il quiz nel browser e nella **Console JavaScript** (premi F12) esegui:

```javascript
configureGitHubToken('ghp_IL_TUO_TOKEN_QUI')
```

Sostituisci `ghp_IL_TUO_TOKEN_QUI` con il token che hai copiato al passo 1.

Per verificare che il token sia configurato correttamente:

```javascript
checkGitHubToken()
```

### Come Funziona il Salvataggio

1. Quando un giocatore finisce una partita, il quiz raccoglie i dati (nome, tempo, punteggio, ecc.)
2. Il JavaScript nel browser triggera un **GitHub Action** tramite l'API `repository_dispatch`
3. Il GitHub Action (che usa il secret `TOKENDESIDERIA`) aggiorna i file CSV nel repository:
   - `CSV/Tutte.csv` - tutte le partite
   - `CSV/Torneo.csv` - solo i migliori tempi in modalità torneo
   - `CSV/Custom.csv` - tutte le partite in modalità custom
4. I risultati sono salvati permanentemente su GitHub

### Formato CSV

I file CSV hanno questa struttura:

```
Nome;Tempo;Corrette;Percentuale;Data;Domande;TempoPerDomanda
Mario;45.2;10/10;100%;01/01/2024, 12:00:00;10;4.52
Luigi;52.8;9/10;90%;01/01/2024, 12:15:00;10;5.28
```

### Ricerca Risultati

La funzione di ricerca legge direttamente i file CSV da GitHub (raw) **senza bisogno di autenticazione**, quindi funziona sempre per tutti gli utenti.

### Sicurezza

- ⚠️ Il token GitHub viene salvato in **localStorage** del browser
- ✅ Il token NON viene mai committato nel repository (`.gitignore`)
- ✅ Il GitHub Secret `TOKENDESIDERIA` viene usato solo dai workflow GitHub Actions
- ✅ I file `config.js` con dati sensibili sono esclusi dal repository

## 📁 Struttura del Progetto

```
Desideria/
├── index.html          # Pagina principale del quiz
├── style.css           # Stili e design dell'applicazione
├── script.js           # Logica del quiz e interazioni
├── data.js             # Database delle pizze e ingredienti
├── README.md           # Questo file
├── Classiche.txt       # Menu pizze classiche
├── Bianche.txt         # Menu pizze bianche
├── Calzoni.txt         # Menu calzoni
└── ...                 # Altri file del menu
```

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura della pagina
- **CSS3**: Styling e animazioni
- **JavaScript Vanilla**: Logica del gioco (nessuna dipendenza esterna!)

## 💡 Suggerimenti per Studiare

1. **Inizia con una categoria alla volta**: Concentrati prima sulle Classiche, poi sulle Bianche, infine sui Calzoni
2. **Usa la modalità "Quali sono gli ingredienti?"**: È il modo migliore per memorizzare
3. **Prova le domande confusionarie**: Ti aiutano a prestare attenzione ai dettagli
4. **Sfida te stesso con il timer**: 10 secondi ti costringono a ricordare velocemente
5. **Riprova finché non raggiungi il 100%**: La ripetizione è la chiave dell'apprendimento
6. **Competi con gli amici**: Confronta i tuoi record nella classifica
7. **Fai pause regolari**: 10-15 minuti di quiz, poi riposa

## 📊 Sistema di Valutazione e Record

### Punteggio
- **90-100%**: 🌟 Eccellente! Sei un vero esperto!
- **70-89%**: 👏 Molto bene! Conosci bene il menu!
- **50-69%**: 📚 Non male! Continua a studiare!
- **0-49%**: 💪 Riprova! Con pratica migliorerai!

### Classifica Record
- I record vengono salvati **localmente nel browser** (localStorage)
- Ogni configurazione ha la sua classifica separata:
  - Quiz da 10 domande - Tutte le pizze
  - Quiz da 20 domande - Solo Classiche
  - Quiz da 15 domande - Solo Bianche
  - ... e così via
- La classifica mostra i **top 10 giocatori** per ogni configurazione
- I record sono ordinati per:
  1. **Punteggio più alto** (numero di risposte corrette)
  2. **Tempo più basso** (a parità di punteggio)
- Puoi scaricare tutti i tuoi record in formato CSV per analizzarli o condividerli

## 🎯 Obiettivo

Memorizzare tutti gli ingredienti delle pizze Desideria senza dover studiare pagine e pagine di menu, ma imparando in modo interattivo e divertente!

## 📝 Note

- Il database contiene tutte le pizze del menu Desideria
- Le pizze speciali come "Desideria" e "Pippo" non appaiono nel quiz perché hanno ingredienti non specificati
- **Timer**: Ogni domanda ha 10 secondi di tempo, il colore cambia in arancione (5s) e rosso (3s)
- **Record locali**: I dati sono salvati nel browser, se cancelli i dati del browser perderai i record
- **Export CSV**: Formato compatibile con Excel e Google Sheets
- Il quiz è completamente gratuito e open source
- Nessun dato viene inviato a server esterni - tutto funziona offline!

## 🤝 Contribuire

Hai trovato un errore negli ingredienti? Vuoi aggiungere nuove funzionalità? Sentiti libero di:
1. Fare un fork del repository
2. Creare un branch per le tue modifiche
3. Fare una pull request

## 📄 Licenza

Questo progetto è libero da utilizzare per scopi educativi e personali.

---

**Buon divertimento e buono studio! 🍕**
