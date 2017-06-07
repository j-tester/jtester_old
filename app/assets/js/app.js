/* add and import your js here */
/* eslint-disable import/no-extraneous-dependencies */
/* global $ */
import 'jquery';
import 'materialize-css';
import hljs from 'highlight.js';

$(() => {
  hljs.initHighlightingOnLoad();
  $('.button-collapse').sideNav();
});

