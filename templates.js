// AnkiDroid card type definitions
// Used with AnkiConnect to create model and card types
export const MODEL_NAME_DEFAULT = "Langenscheidt (EN↔DE)";

// Template Keyword Fields
// with defined positions in templates and can be replaced with information per card
export const MODEL_FIELDS = [
  "English",
  "English Alternatives",
  "English Hidden Alternatives",
  "German",
  "German Alternatives",
  "German Hidden Alternatives",
  "Part of Speech",
  "Picture",
  "Sample sentence",
  "Sample sentence Alternatives",
  "Sample sentence Hidden Alternatives",
  "Plural and inflected forms",
  "Plural and inflected forms Alternatives",
  "Plural and inflected forms Hidden Alternatives",
  "Audio"
];

// Card Templates
// define how the front and back of the cards should look in terms of keyword field placement
export const TEMPLATE_EN_TO_DE_FRONT = `
{{English}}<br/>
{{#Picture}}{{Picture}}<br/>{{/Picture}}
{{#English Alternatives}}<span class="alts">{{English Alternatives}}</span><br/>{{/English Alternatives}}
{{#English Hidden Alternatives}}<span class="alts">{{English Hidden Alternatives}}</span><br/>{{/English Hidden Alternatives}}
{{#Part of Speech}}(<span class="attrs">{{Part of Speech}}</span>)<br/>{{/Part of Speech}}
`;

export const TEMPLATE_EN_TO_DE_BACK = `
{{FrontSide}}

<hr id="answer" />

{{German}}{{#Audio}}<div style="display:none;">{{Audio}}</div>{{/Audio}}<br/>
{{#German Alternatives}}<span class="alts">{{German Alternatives}}</span><br/>{{/German Alternatives}}
{{#German Hidden Alternatives}}<span class="alts">{{German Hidden Alternatives}}</span><br/>{{/German Hidden Alternatives}}
{{#Sample sentence}}<span class="sentence">{{Sample sentence}}</span><br/>{{/Sample sentence}}
{{#Sample sentence Alternatives}}<span class="sentence">{{Sample sentence Alternatives}}</span><br/>{{/Sample sentence Alternatives}}
{{#Sample sentence Hidden Alternatives}}<span class="sentence">{{Sample sentence Hidden Alternatives}}</span><br/>{{/Sample sentence Hidden Alternatives}}
<br/>
{{#Plural and inflected forms}}<div class="plural">Plural: {{Plural and inflected forms}}{{#Plural and inflected forms Alternatives}}, {{Plural and inflected forms Alternatives}}{{/Plural and inflected forms Alternatives}}{{#Plural and inflected forms Hidden Alternatives}}, {{Plural and inflected forms Hidden Alternatives}}{{/Plural and inflected forms Hidden Alternatives}}</div><br/>{{/Plural and inflected forms}}
`;

export const TEMPLATE_DE_TO_EN_FRONT = `
{{German}}{{#Audio}}<div style="display:none;">{{Audio}}</div>{{/Audio}}<br/>
{{#German Alternatives}}<span class="alts">{{German Alternatives}}</span><br/>{{/German Alternatives}}
{{#German Hidden Alternatives}}<span class="alts">{{German Hidden Alternatives}}</span><br/>{{/German Hidden Alternatives}}
{{#Sample sentence}}<span class="sentence">{{Sample sentence}}</span><br/>{{/Sample sentence}}
{{#Sample sentence Alternatives}}<span class="sentence">{{Sample sentence Alternatives}}</span><br/>{{/Sample sentence Alternatives}}
{{#Sample sentence Hidden Alternatives}}<span class="sentence">{{Sample sentence Hidden Alternatives}}</span><br/>{{/Sample sentence Hidden Alternatives}}
<br/>
{{#Plural and inflected forms}}<div class="plural">Plural: {{Plural and inflected forms}}{{#Plural and inflected forms Alternatives}}, {{Plural and inflected forms Alternatives}}{{/Plural and inflected forms Alternatives}}{{#Plural and inflected forms Hidden Alternatives}}, {{Plural and inflected forms Hidden Alternatives}}{{/Plural and inflected forms Hidden Alternatives}}</div><br/>{{/Plural and inflected forms}}
`;

export const TEMPLATE_DE_TO_EN_BACK = `
{{FrontSide}}

<hr id="answer" />

{{English}}<br/>
{{#Picture}}{{Picture}}<br/>{{/Picture}}
{{#English Alternatives}}<span class="alts">{{English Alternatives}}</span><br/>{{/English Alternatives}}
{{#English Hidden Alternatives}}<span class="alts">{{English Hidden Alternatives}}</span><br/>{{/English Hidden Alternatives}}
{{#Part of Speech}}(<span class="attrs">{{Part of Speech}}</span>)<br/>{{/Part of Speech}}
`;

// CSS Styles
// shared by all templates
export const TEMPLATE_CSS = `
.card {
 font-family: arial;
 font-size: 20px;
 text-align: center;
 color: black;
 background-color: white;
}
.alts { font-size: 14px; }
.attrs { font-style: italic; font-size: 14px; }
.plural { text-align: left; }
.sentence { font-style: italic; }
`;
