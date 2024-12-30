2024-12-27
Vad jag gjort idag:
Skapat java.script och kollar på några inspel videoer för att repetera strukturer och hur jag börjar med memory-spelet.
Designat korten och layouten för spelet.
Problem eller utmaningar:
Hade problem med att få layouten responsiv. java.justeringar behövdes för att layouten skulle fungera bra på olika skärmstorlekar.
Nästa steg:
Börja implementera JavaScript-logiken för att vända korten.

 
2024-12-28
Vad jag gjort idag:
Skapade kortens struktur: Implementerade front-view och back-view för att möjliggöra flipp-animationer.
Felsökte bildproblem: Kontrollerade bildsökvägar, filnamn och koppling mellan HTML, CSS och JavaScript.
Testade funktionalitet: Säkerställde att kortbilder laddas korrekt och att flipp-animationen fungerar som tänkt.
Löste buggar: Fixade problem med dolda element i CSS och förbättrade dataset-hantering i JavaScript.
Planerade nästa steg:
Optimering av flippfunktionen och ytterligare tester för spelets interaktivitet.



2024-12-29
Vad jag gjort idag:
Implementerade en timerfunktion som räknar ner från 30 sekunder och visar den återstående tiden.
Lagt till en funktion för att kontrollera om de två vända korten matchar och om användaren vinner när alla kort matchas.
Lagt till en funktion för att slumpa kortens ordning varje gång spelet startas om.
Lagt till en "starta om"-knapp för att återställa spelet till dess ursprungliga tillstånd och börja om på nytt.
Problem eller utmaningar:
Layoutproblem uppstod när vi la till alternativ för olika tidsintervall (15s, 30s, 60s).
Korten blev felplacerade när vi ändrade tiden.
Lösning:
Förbättrade CSS för att göra layouten mer stabil och säkerställde att alla kort var korrekt centrerade i sin container.
Resultat:
Timerfunktionen fungerar bra, och spelet kan nu kontrolleras med återställningsknapp och tidsväxling.
Det kvarstod dock några mindre layoutproblem när timerinställningar ändrades.



2024-12-30
Vad jag gjort idag:
Justerade CSS ytterligare för att säkerställa att layouten inte påverkades negativt när användaren bytte mellan olika tidsinställningar.
Lagt till en dropdown-meny för att välja mellan 15s, 30s eller 60s för timer.
Justerat bildstorlek och kortens layout för att se till att alla element var jämnt placerade och att inga kort låg utanför den centrala container-layouten.
Problem eller utmaningar:
Layouten blev lite rörig när tiden ändrades, med korten som inte alltid var korrekt centrerade på skärmen.
Lösning:
Använde flexbox och min-height på kortcontainern för att säkerställa att alla kort var korrekt placerade och att spelet var responsivt.
Resultat:
Spelet är nu stabilt och fungerar bra med tidsinställningarna.
Det går att välja mellan 15s, 30s eller 60s utan att layouten påverkas negativt.
Alla funktioner (timer, matchlogik, återställning) är fullt implementerade och fungerar som förväntat