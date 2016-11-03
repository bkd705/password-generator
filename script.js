const pwdButton = document.getElementById('get-pwd');
const displayInput = document.getElementById('pwd-display');
const apikey = 'ifl8ZWMzVrmshPk0oCkR5QjjiM2kp1ELD3ajsneq6j3KbHPKnn';

//get noun
function getNoun() {
  let url = 'https://wordsapiv1.p.mashape.com/words/?partOfspeech=noun&random=true';

  return Promise.resolve($.ajax({
    url: url,
    type: 'GET',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', apikey);
    },
    data: {}
  }));
}

//get adjective
function getAdjective() {
  let url = 'https://wordsapiv1.p.mashape.com/words/?partOfspeech=adjective&random=true';

  return Promise.resolve($.ajax({
    url: url,
    type: 'GET',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', apikey);
    },
    data: {}
  }));
}

//get verb
function getVerb() {
  let url = 'https://wordsapiv1.p.mashape.com/words/?partOfspeech=verb&random=true';

  return Promise.resolve($.ajax({
    url: url,
    type: 'GET',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', apikey);
    },
    data: {}
  }));
}

//function to generate random password
function randomPassword() {
  let verb = getVerb();
  let adjective = getAdjective();
  let noun = getNoun();

  Promise.all([noun, adjective, verb]).then(data => {
    for(let i=0; i < data.length; i++) {
      displayInput.value += (' ' + data[i].word);
    }
  })
}

//function to handle button click
function handleClick() {
  displayInput.value = '';
  randomPassword();
}

//call randomPassword function to make password show on load
randomPassword();
