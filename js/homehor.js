document.querySelectorAll('.tabBox-tab').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
  
      // Toggle active class on buttons
      document.querySelectorAll('.tabBox-tab').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Show correct content
      document.querySelectorAll('.tabBox-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });



document.querySelectorAll('.tabBox-tab-2').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
  
      // Toggle active class on buttons
      document.querySelectorAll('.tabBox-tab-2').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Show correct content
      document.querySelectorAll('.tabBox-content-2').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });

 
  

(function() {
    emailjs.init("YmmX-bXNDxhbL0RKq"); // Replace with your EmailJS Public Key
  })();


document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();

    const form=e.target;
    const loader=document.getElementById('loader');
    const status=document.getElementById('statusMessage');

    const formData={
        fullname:form.fullname.value.trim(),
        email:form.email.value.trim(),
        organization:form.organization.value.trim(),
        designation:form.designation.value.trim(),
        message:form.message.value.trim(),
    };

    console.log("Form Data:", formData);

    if(!validateEmail(formData.email)){
        alert('Please enter a valid email address.');
        return;
    }

    loader.style.display="block";
    status.textContent="";
    form.querySelectorAll("input,textarea,button").forEach(el=>el.disabled=true);

    // Simulate sending 

    emailjs.send("service_fvmhr9v", "template_lqizcel", formData)
      .then(function(response) {
        loader.style.display = 'none';
        status.style.color = 'green';
        status.textContent = "Your message has been sent successfully!";
        form.reset();
      }, function(error) {
        loader.style.display = 'none';
        status.style.color = 'red';
        status.textContent = "Something went wrong. Please try again.";
      })
      .finally(() => {
        form.querySelectorAll("input, textarea, button").forEach(el => el.disabled = false);
      });
})


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  
  openBtn.addEventListener("click", () => {
    modalOverlay.classList.add("show");
  });
  
  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("show");
    }
  });

  