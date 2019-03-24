'use strict';

(function() {
  window.addEventListener('load', function() {
    const forms = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          $('#applySuccess').modal();
        }
        form.classList.add('was-validated');
      }, false);
      form.addEventListener('submit', function() {
      });
    });
    const fileid = document.getElementById('fileid');
    const fileid2 = document.getElementById('fileid2');
    const fileid3 = document.getElementById('fileid3');

    document.getElementById('uploadBtn').addEventListener('click', () => {
      fileid.click();
    });

    document.getElementById('uploadBtn2').addEventListener('click', () => {
      fileid2.click();
    });

    document.getElementById('uploadBtn3').addEventListener('click', () => {
      fileid3.click();
    });

    fileid.addEventListener('change', () => {
      document.getElementById('resumeCheck').style.display = 'inline';
    });

    fileid2.addEventListener('change', () => {
      document.getElementById('portfolioCheck').style.display = 'inline';
    });

    fileid3.addEventListener('change', () => {
      document.getElementById('photoCheck').style.display = 'inline';
    });

  }, false);
})();

function scrollIt(destination, duration = 350) {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const body = document.body;
  const dele = document.documentElement;

  const dHeight = Math.max(body.scrollHeight, body.offsetHeight, dele.clientHeight, dele.scrollHeight, dele.offsetHeight);
  const wHeight = window.innerHeight || dele.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const dOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const dOffsetScroll = Math.round(dHeight - dOffset < wHeight ? dHeight - wHeight : dOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, dOffsetScroll);
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = time;
    window.scroll(0, Math.ceil((timeFunction * (dOffsetScroll - start)) + start));

    window.pageYOffset === dOffsetScroll || requestAnimationFrame(scroll);
  }

  scroll();
}

document.getElementById('scrollBtn').addEventListener('click', () => {
  scrollIt(0);
});



