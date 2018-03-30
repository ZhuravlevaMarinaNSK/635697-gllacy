      var link = document.querySelector(".adress-and-feedback__button");
      var popup = document.querySelector(".modal__feedback");
      var mask = document.querySelector(".mask");
      var close = document.querySelector(".modal__close-button");
      var form = popup.querySelector("form");
      var email = popup.querySelector("[type=email]");
      var text = popup.querySelector("textarea");
      var login = popup.querySelector("[type=text]");
      var isStorageSupport = true;
      var storage = "";

      try {
        storage = localStorage.getItem("name");
      } catch (err) {
        isStorageSupport = false;
      };

      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        mask.classList.add("modal-show");
        if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        mask.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!name.value || !text.value || !email.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          if (isStorageSupport) {
          localStorage.setItem("name", name.value);
          }
         }
      });

      window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
              evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        mask.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: 59.938568, lng: 30.322944}
        });

        var image = {
          path: 'img/pin.svg',
          anchor: new google.maps.Point(50, 100)
        }

        var marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          icon: image.path
        });
      }
