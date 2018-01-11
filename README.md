# Countdown

Deze library geeft gebruikers de mogelijkheid om een aftelbare klok te starten op basis van een gekozen datum. De gekozen datums bevinden zich in een array die je oneindig kunt opvullen, de container past zich automatisch aan op de hoeveelheid datums. De library is een goede basis voor desbetreffend project die zich hierin wil uitbreiden.

## Hoe pas je deze library toe?

Deze library is handig voor bepaalde evenementen waarbij de keuze ligt aan de gebruiker welke tijd hij zo'n evenement zou willen uitvoeren, de library zorgt dan voor een aftelbare klok op basis van die gekozen datum. Voor degene die de evenementen zou regelen kan hij de array met datums aanpassen en toevoegen. Eventueel kan hij dit nog uitbreiden door datums automatisch te verwijderen wanneer een gebruiker een datum kiest.

## Hoe installeer ik deze library?

### 1. Download de bestanden

Zorg dat je een zip met de bestanden download voor het gebruiken van deze library, deze is gratis beschikbaar in mijn github repostitory.

### 2. Heb je zelf al een bestand, geen probleem, zo pas je hem aan!

Voor de HTML maak je gebruik van een div-container en bijbehorende paragraphs (p-tags), deze zijn beschikbaar in het downloadbare index.html bestand, voeg deze toe in de body van je eigen code. Zorg dat je het JS file juist plaats in de mappenstructuur en juist linkt onderaan in de body in je eigen bestand. Het linken van de JS file doe je als volgt:

```
<script type="text/javascript" src="js/countdown.js"></script>
```

Er is een CSS-bestand beschikbaar voor de huidige uitwerking, deze is natuurlijk aanpasbaar om het te maken naar eigen behoren.

### 3. Voeg datums toe!

In deze array kun je datums toevoegen en verwijderen, zorg dat je de formulering hetzelfde houdt als hieronder beschreven.

```
var dates = [
    "Jan 10, 2018 12:00:00",
    "Jan 10, 2018 18:00:00",
    "Jan 20, 2018 14:00:00",
    "Jan 20, 2018 18:00:00",
    "Feb 02, 2018 08:00:00",
    "Feb 21, 2018 10:00:00"
];
```

## Authors

* **Pelle Vissers**

## Demo

http://i341374.iris.fhict.nl/countdown/

