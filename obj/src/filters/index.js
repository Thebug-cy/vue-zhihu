import Vue from 'vue';
import date from './date.js';
import wan from './wan.js'

Vue.filter('wan',wan);
Vue.filter('date',date);

import {fillzero} from './fillzero.js' 

Vue.filter('fillzero',fillzero)

