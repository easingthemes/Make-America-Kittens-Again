// load and save options for MAKA

// Saves options to chrome.storage
function save_options() {
  var blockPence = document.getElementById('blockpence').checked;
  var blockFarage = document.getElementById('blockfarage').checked;
  var blockLePen = document.getElementById('blocklepen').checked; 
  var blockWilders = document.getElementById('blockwilders').checked;
  var blockVucic = document.getElementById('blockvucic').checked;
  var blockKolinda = document.getElementById('blockkolinda').checked;
  
  chrome.storage.local.set({
    blockPence: blockPence,
    blockFarage: blockFarage,
    blockLePen: blockLePen,
    blockWilders: blockWilders,
    blockVucic: blockVucic,
    blockKolinda: blockKolinda
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value 
  chrome.storage.local.get({
    blockPence: false,
    blockFarage: false,
    blockLePen: false,
    blockWilders: false,
    blockVucic: false,
    blockKolinda: false
  }, function(items) {
    document.getElementById('blockpence').checked = items.blockPence;
    document.getElementById('blockfarage').checked = items.blockFarage;
    document.getElementById('blocklepen').checked = items.blockLePen;
    document.getElementById('blockwilders').checked = items.blockWilders;
    document.getElementById('blockvucic').checked = items.blockVucic;
    document.getElementById('blockkolinda').checked = items.blockKolinda;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
