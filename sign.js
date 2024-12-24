        function validateForm() {

          const firstName = document.getElementById("firstName").value.trim();
          const lastName = document.getElementById("lastName").value.trim();
          const phone = document.getElementById("phone").value.trim();
          const email = document.getElementById("email").value.trim();

          if (!firstName || !lastName || !phone || !email) {
              alert("All fields are required!");
              return false;
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email)) {
              alert("Please enter a valid email address!");
              return false;
          }

          const phonePattern = /^\d+$/;
          if (!phonePattern.test(phone)) {
              alert("Please enter a valid phone number (digits only)!");
              return false;
          }

          alert("Form submitted successfully!");
          return true;
      }
