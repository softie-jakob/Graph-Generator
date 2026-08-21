# Binary 3D Chart Generator

## Deutsch

### Überblick

Der Generator in [`graph_generator.html`](graph_generator.html) erstellt Binary-3D-Diagramme direkt im Browser. Die Datei ist eigenständig und benötigt weder React noch einen Entwicklungsserver. Öffne die HTML-Datei einfach per Doppelklick in einem Browser.

Beim Start wird automatisch das Balkendiagramm angezeigt.

### Diagramm erstellen

1. Öffne `graph_generator.html`.
2. Trage im Feld **Werte eingeben** Zahlen ein, die durch Kommas getrennt sind.
	Beispiel:
	```text
	40,65,80,100
	```
3. Trage im Feld **Beschriftungen eingeben** die zugehörigen Namen ein.
	Beispiel:
	```text
	A,B,C,D
	```
4. Die Grafik wird bei jeder Änderung automatisch aktualisiert.

Du kannst beliebig viele Werte und Beschriftungen hinzufügen. Trenne einfach jeden Eintrag mit einem Komma. Beide Felder sollten gleich viele Einträge enthalten, damit jeder Wert die passende Beschriftung erhält. Beispiel:

```text
Werte:         10,25,40,55,70,85
Beschriftungen: Januar,Februar,März,April,Mai,Juni
```

Für jeden Wert wird ein Diagrammelement erstellt. Die Beschriftungen werden in derselben Reihenfolge zugeordnet. Fehlt eine Beschriftung, wird automatisch die Nummer des Elements verwendet.

### Diagrammtyp wechseln

- **Balkendiagramm** zeigt die Werte horizontal.
- **Säulendiagramm** zeigt die Werte vertikal.

Klicke auf den jeweiligen Button, um den Diagrammtyp sofort zu wechseln. Die eingegebenen Werte und Beschriftungen bleiben erhalten.

### Sprache wechseln

Oben im Generator kannst du zwischen **Deutsch** und **English** wechseln. Dabei werden Titel, Beschreibungen, Buttons und Fehlermeldungen übersetzt. Die Sprache ändert nicht die Diagrammdaten.

### SVG exportieren

1. Wähle den gewünschten Diagrammtyp.
2. Prüfe, ob Werte und Beschriftungen korrekt sind.
3. Klicke auf **SVG exportieren**.
4. Der Browser lädt eine skalierbare SVG-Datei herunter.

Der Dateiname enthält den Diagrammtyp sowie Datum und Uhrzeit, zum Beispiel:

```text
balkendiagramm_2026-08-21_14-30-05.svg
```

Die exportierte SVG-Datei kann in Browsern, Grafikprogrammen und Vektor-Programmen geöffnet und weiterbearbeitet werden.

### Eingaben und Fehlermeldungen

- Werte müssen gültige, positive Zahlen oder `0` sein.
- Werte werden durch Kommas getrennt.
- Dezimalzahlen können mit einem Punkt eingegeben werden, zum Beispiel `12.5`.
- Bei ungültigen Werten erscheint eine Fehlermeldung und das Diagramm wird nicht neu aufgebaut.
- Eine leere Beschriftung wird durch die automatisch erzeugte Elementnummer ersetzt.

### Anpassung im Quellcode

Die wichtigsten Funktionen befinden sich im Script-Block von [`graph_generator.html`](graph_generator.html):

- `setChartType()` wechselt zwischen Balken und Säulen.
- `drawBars()` zeichnet das Balkendiagramm.
- `drawColumns()` zeichnet das Säulendiagramm.
- `drawFace()` zeichnet die gerade Vorderfläche.
- `drawTop()` zeichnet die obere, perspektivisch verzerrte Fläche.
- `drawSide()` zeichnet die seitliche Fläche.
- `exportChart()` erstellt den SVG-Download.
- `setLanguage()` aktualisiert die Sprache der Oberfläche.

## English

### Overview

The generator in [`graph_generator.html`](graph_generator.html) creates Binary 3D charts directly in the browser. The file is self-contained and requires neither React nor a development server. Open the HTML file by double-clicking it in a browser.

The bar chart is shown automatically when the tool starts.

### Creating A Chart

1. Open `graph_generator.html`.
2. Enter numbers in **Enter values**, separated by commas.
	Example:
	```text
	40,65,80,100
	```
3. Enter the corresponding names in **Enter labels**.
	Example:
	```text
	A,B,C,D
	```
4. The chart updates automatically whenever the input changes.

You can add as many values and labels as needed. Separate every entry with a comma. The two fields should contain the same number of entries so that every value receives the correct label. Example:

```text
Values: 10,25,40,55,70,85
Labels: January,February,March,April,May,June
```

Each value creates one chart element. Labels are assigned in the same order. If a label is missing, the element number is used automatically.

### Switching Chart Types

- **Bar chart** displays values horizontally.
- **Column chart** displays values vertically.

Click the respective button to switch immediately. Your values and labels remain unchanged.

### Switching Languages

Use the language buttons at the top of the generator to switch between **Deutsch** and **English**. Titles, descriptions, buttons, and error messages are translated. The language does not change the chart data.

### Exporting SVG

1. Select the desired chart type.
2. Check the values and labels.
3. Click **Export SVG**.
4. The browser downloads a scalable SVG file.

The filename contains the chart type, date, and time, for example:

```text
balkendiagramm_2026-08-21_14-30-05.svg
```

The exported SVG can be opened and edited in browsers, graphics applications, and vector-graphics software.

### Input And Errors

- Values must be valid positive numbers or `0`.
- Separate values with commas.
- Decimal numbers can use a period, for example `12.5`.
- Invalid values display an error and prevent the chart from being rebuilt.
- An empty label is replaced by the automatically generated element number.

### Source Code Customization

The main functions are in the script block of [`graph_generator.html`](graph_generator.html):

- `setChartType()` switches between bars and columns.
- `drawBars()` draws the bar chart.
- `drawColumns()` draws the column chart.
- `drawFace()` draws the straight front face.
- `drawTop()` draws the perspective top face.
- `drawSide()` draws the side face.
- `exportChart()` creates the SVG download.
- `setLanguage()` updates the interface language.