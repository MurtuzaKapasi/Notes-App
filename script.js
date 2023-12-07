$(document).ready(function() {
    // Function to add a new note
    $('.btn').on('click', function() {
      const newNote = `<div class ="noteBox">
                        <p contenteditable="true" class="input-box" placeholder="Enter your note"></p>
                        <img src="assets/icons8-delete-96.png" class="delete-icon">
                     </div>`;
      $('.notes-container').prepend(newNote);
      saveNotes();
      
    });
  
    // Click event for dynamically added delete icons
    $('.notes-container').on('click', '.delete-icon', function() {
        // $(this).closest('p').remove();
      $(this).closest('.noteBox').remove();
      saveNotes();
    });

    loadNotes();

    //store Notes on Local storage
    function saveNotes(){
        const notes = $('.notes-container').html();
        localStorage.setItem('notes', notes);
        console.log(notes);
        console.log('notes saved');
    }

    //load notes from local storage
    function loadNotes(){
        const savednotes = localStorage.getItem('notes');
        if(savednotes != null){
            $('.notes-container').html(savednotes);
            console.log('notes loaded'); 
            console.log(savednotes);
        }
    }

    $(document).on('keydown',  function(e) {
        if (e.key === 'Enter') {
          document.execCommand('insertLineBreak'); // Insert line breaks on "Enter"
          e.preventDefault();
        //   saveNotes();
        //   return false; // Prevent default behavior of the "Enter" key
        }
      });




  });
  



//   $('button').html('Save Note');






  