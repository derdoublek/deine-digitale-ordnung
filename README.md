# Digitale Ordnung

Vollständiger Website-Export für derdoublek/deine-digitale-ordnung.
Enthalten: Landingpage, Impressum, drei Originalvorschauen mit Beispieldaten,
Stylesheets und editierbare React-Quellen. Die private Geschäftszentrale ist nicht enthalten.
Alle Website- und Asset-Pfade sind relativ: funktioniert unter der Repository-Adresse
und später unter der eigenen Domain. Es ist kein Build für die Veröffentlichung nötig.

## Veröffentlichung

Alle Dateien dieses Ordners direkt im Hauptverzeichnis des Repositories ablegen.
Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.
Vorschau: https://derdoublek.github.io/deine-digitale-ordnung/
Startseite, Impressum, drei Vorschauen, Kaufbutton und Formularversand prüfen.
FormSubmit und Digistore24 bleiben die bisherigen externen Dienste.

## Domain umziehen

Erst nach erfolgreicher Vorschau unter Settings → Pages → Custom domain
"deine-digitale-ordnung.de" speichern. Dann bei IONOS die bisherigen beiden
Website-A-Einträge für @ (162.159.143.30 und 172.66.3.26) ersetzen durch:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

www: CNAME auf derdoublek.github.io (ohne Repository-Pfad).
Weitere konkurrierende @-A/AAAA- oder www-Website-Einträge prüfen.
MX, SPF, DKIM, DMARC und autodiscover erhalten: Sie betreffen E-Mail.
Keine Nameserver-Änderung nötig. Die Domain kann zunächst bei IONOS bleiben.
Domain-Verifizierung optional zuerst über GitHub-Kontoeinstellungen → Pages;
den dort angezeigten TXT-Code unverändert übernehmen.
Nach DNS-Umstellung und Bereitstellung des Zertifikats "Enforce HTTPS" aktivieren.
DNS kann bis zu 24 Stunden benötigen. Alte Sites-Seite erst nach erfolgreicher
Kontrolle der Domain abschalten. Vorherige DNS-Werte bei Bedarf wiederherstellen.
Die eigenständige Seite finanzielle-ordnung.de wird hier nicht umgezogen.

## Pflege

Startseite mit zwei Karten: index.html. Zielseiten: geschaeft.html (Firma) und zuhause.html (Privat), Demos mit erfundenen Daten in demo/. Rechtliches: impressum.html, datenschutz.html.
Impressum: impressum.html und impressum/index.html; bei beiden die Inhalte ändern.
Finanzplaner: finance-preview.html.
React-Quellen: preview-src/. Bei Änderungen im Hauptverzeichnis:

    npm install --prefix preview-src
    node build-previews.mjs

Neu erzeugte Dateien unter previews/ ebenfalls committen.
Die vorhandenen Vorschauen sind bereits fertig gebaut.

## GitHub-Verbindung freigeben

Wenn Codex "Resource not accessible by integration" meldet:
GitHub → Settings → Applications → Installed GitHub Apps → betreffende
ChatGPT/Codex-App → Configure → Repository access.
Das Repository deine-digitale-ordnung auswählen und speichern.
Falls die Verbindung als OAuth-App eingerichtet ist, stattdessen die GitHub-Verbindung
in ChatGPT erneut autorisieren und den Zugriff auf das Repository freigeben.
Keine Tokens oder Passwörter in den Chat senden.

## Offizielle Dokumentation

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Export basiert auf Sites-Version 17 / a06f4f1e5bf199a607bdc1ac6e2cff6b37737ff1.
Vorbereitet am 11. Oktober 2026. Veröffentlichung und DNS-Umzug noch ausstehend.
