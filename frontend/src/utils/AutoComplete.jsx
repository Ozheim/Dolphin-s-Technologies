import React, { useState } from 'react';
import "../Styles/utils/AutoComplete.scss";
import Autosuggest from 'react-autosuggest';


const AutocompleteSearch = () => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const jobTitles = [
        'Développeur Web',
        'Développeur Full-Stack',
        'Développeur Front-End',
        'Développeur Back-End',
        'Développeur JavaScript',
        'Développeur PHP',
        'Développeur Python',
        'Développeur Ruby',
        'Développeur Java',
        'Développeur .NET',
        'Développeur Mobile',
        'Développeur iOS',
        'Développeur Android',
        'Développeur React',
        'Développeur Angular',
        'Développeur Vue.js',
        'Développeur Svelte',
        'Développeur WordPress',
        'Développeur Prestashop',
        'Développeur Magento',
        'Développeur Shopify',
        'Développeur Symfony',
        'Développeur Laravel',
        'Développeur Node.js',
        'Développeur Express.js',
        'Développeur Meteor.js',
        'Développeur Next.js',
        'Développeur Nuxt.js',
        'Ingénieur logiciel',
        'Ingénieur systèmes',
        'Ingénieur réseaux',
        'Ingénieur DevOps',
        'Architecte logiciel',
        'Architecte systèmes',
        'Architecte Cloud',
        'Administrateur systèmes',
        'Administrateur réseaux',
        'Consultant en sécurité',
        'Expert en cybersécurité',
        'Responsable sécurité informatique',
        'Chef de projet informatique',
        'Chef de projet digital',
        'Product Owner',
        'Scrum Master',
        'Data Scientist',
        'Data Analyst',
        'Analyste de données',
        'Consultant BI',
        'Administrateur base de données',
        'Expert base de données',
        'Analyste en cybersécurité',
        'Analyste SOC',
        'Ingénieur QA',
        'Testeur logiciel',
        'Ingénieur en automatisation de tests',
        'Développeur de jeux vidéo',
        'Concepteur de jeux vidéo',
        'Artiste 3D',
        'Designer UX/UI',
        'Chef de produit digital',
        'Consultant en transformation digitale',
        'Chargé de projet digital',
        'Growth Hacker',
        'Spécialiste SEO',
        'Spécialiste SEM',
        'Social Media Manager',
        'Community Manager',
        'Responsable marketing digital',
        'Consultant en stratégie digitale',
        'Consultant en e-commerce',
        'Consultant IT',
        'Ingénieur cloud',
        'Consultant cloud',
        'Consultant en intelligence artificielle',
        'Ingénieur en machine learning',
        'Développeur en intelligence artificielle',
        'Développeur en réalité augmentée',
        'Développeur en réalité virtuelle',
        'Responsable infrastructure IT',
        'Ingénieur en automatisation',
        'Ingénieur en informatique embarquée',
        'Développeur en logiciels embarqués',
        'Développeur en informatique industrielle',
        'Technicien informatique',
        'Technicien de maintenance informatique',
        'Technicien réseaux',
        'Technicien systèmes',
        'Responsable support technique',
        'Analyste technique',
        'Expert en migration cloud',
        'Administrateur Linux',
        'Administrateur Windows',
        'Ingénieur systèmes Linux',
        'Consultant en informatique décisionnelle'
    ];

    const getSuggestions = (inputValue) => {
        const regex = new RegExp(inputValue.trim(), 'i');
        return jobTitles.filter((jobTitles) => regex.test(jobTitles)).slice(0,4);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const getSuggestionValue = (suggestion) => suggestion;

    const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

    const inputProps = {
        placeholder: 'Type to search...',
        value,
        onChange
    };

    const theme = {
        container: 'autocomplete-container',
        suggestionsContainer: 'suggestions-container',
        suggestion: 'suggestion',
        suggestionHighlighted: 'suggestion-highlighted',
        input: 'autocomplete-input'
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
        />
    );
};

export default AutocompleteSearch;

