import {greeting} from './functions';
import $ from 'jquery';
import './styles.css';

$(document).ready(function(){
  let apikey = process.env.default;
  $('#jsOutput').text();
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $('.errors').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let temp = Math.round((response.main.temp - 273.15) * 9/5 + 32);
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Fahrenheit is ${temp}%.`);
      },
      error: function() {
        $('.errors').text("There was a error processing your request. Please try again.");
      }
    });
  });
});